import React, { useEffect, useState } from "react";
import { useRoute } from '@react-navigation/native';

import {
  View,
  Image,
  StyleSheet,
  ImageBackground,
  TextInput, FlatList,
  Button,
  Text
} from "react-native";
import BubbleMessage from '../components/BubbleMessage';
import {fetchApi} from '../helper/fetch';
import {getData} from '../helper/storage';
import {jsonApi} from '../helper/jsonApi';
import {useDispatch, useSelector} from 'react-redux';
import {addMessage} from '../store/features/messageListSlice';

const ChatScreen = ({route, navigation}) => {

  const dispatch = useDispatch();
  const messageList = useSelector(state => state.messageList);
  const [message, setMessage] = useState('');
  const [messageFilter, setMessageFilter] = useState([]);

  const [echo, setEcho] = useState('');

  const {idConversation} = route.params;

  const {
    image,
    containerTop,
    containerTopImage,
    containerBottom,
    imageSend,
    containerInput,
    input,
    btn
  } = styles;

  const {id} = getData('user');

  var ws = new WebSocket(`ws://10.0.2.2.9098/ws/${id}`);

  ws.onopen = () => {
  };

  ws.onmessage = (e) => {
    const messages = e.data.map(item => item.data);

    messages.forEach(data => {
      dispatch(addMessage(data));
    });
  };

  const fetchData = async () => {
    try {
      const {id} = await getData('user');

      const response = await fetchApi(
        'GET',
        `messages/get-all/${id}/${idConversation}`,
      );

      const messages = response.map(item => {
        if (item.data.sender_id === id) {
          item.data.receiver_id = idConversation;
        } else {
          item.data.receiver_id = id;
        }
        return item.data;
      });

      messages.forEach(data => {
        dispatch(addMessage(data));
      });

      const messageFilterTemp = messageList.messages.filter(
        message =>
          (message.receiver_id === id && message.sender_id === idConversation) ||
          (message.sender_id === id && message.receiver_id === idConversation),
      );

      setMessageFilter(messageFilterTemp);
    } catch (error) {
      console.error('Erreur lors de la récupération des données:', error);
    }
  };

  const onButtonPress = async () => {

    const {id} = await getData('user');

    jsonApi.data.attributes = {
      sender_id: id,
      receiver_id: idConversation,
      message: message,
    };

    try{
      const response = await fetchApi(
        'POST',
        `send-message`,
        jsonApi
      );

      const messages = response.data.map(item => item.data);

      messages.forEach(data => {
        dispatch(addMessage(data));
      });

    }
    catch(error){
      console.log(error)
    }
  }

  useEffect(() => {
    fetchData();
  }, [fetchData, idConversation]);

  return (
    <>
    <View>
      <Text>{echo}</Text>
    </View>
    <View style={containerTop}>
      <View style={containerTopImage}>
        <ImageBackground
          style={image}
          source={require('./public/background.png')}
        />
      </View>

      <View style={containerBottom}>
        <FlatList
          data={messageFilter}
          renderItem={({item}) =>
              <BubbleMessage
              idMessage={item.id}
              message={item.message}
              sender={item.sender_id}
            />
          }
        />
      </View>
      <View style={containerInput}>
        <TextInput
          style={input}
          onChangeText={text => setMessage(text)}
          value={message}
        />
        <Button
          title="Envoyer"
          style={btn}
          onPress={() => onButtonPress()}>
          Sign In
        </Button>
      </View>
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    height: '100%',
  },
  containerTop: {
    flex: 1,
    borderColor: 'black',
    borderWidth: 1,
    // height: '10%',
  },
  containerTopImage: {
    borderColor: 'pink',
    borderWidth: 1,
    width: '100%',
    height: '15%',
  },
  containerBottom: {
    flex: 1,
    borderColor: 'pink',
    borderWidth: 10,
    padding: '5%',
    height: '60%',
  },
  imageSend: {
    width: '20%',
    height: '100%',
    borderWidth: 4,
    borderColor: 'gray',
    resizeMode: 'contain',
  },
  containerInput: {
    borderWidth: 4,
    height: '12%',
    display: 'flex',
    flexDirection: 'row',
    padding: '5%',
    justifyContent: 'center',

    // display: 'flex',
  },
  input: {
    borderWidth: 4,
    borderColor: 'black',
    borderRadius: 250,
    width: '70%',
  },
  btn: {
    borderTopLeftRadius: 15
  }
});
export default ChatScreen;

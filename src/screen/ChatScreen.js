import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
  ScrollView,
  TextInput, FlatList,
} from "react-native";
import BubbleMessage from '../components/BubbleMessage';
import {fetchApi} from '../helper/fetch';
import {getData} from '../helper/storage';
import {useDispatch, useSelector} from 'react-redux';
import {addMessage} from '../store/features/messageListSlice';

const ChatScreen = ({route, navigation}) => {
  const dispatch = useDispatch();
  const messageList = useSelector(state => state.messageList);
  const [message, setMessage] = useState('');
  const {idConversation} = route.params;

  const {
    image,
    containerTop,
    containerTopImage,
    containerBottom,
    imageSend,
    containerInput,
    input,
  } = styles;

  const fetchData = async () => {
    const {id} = await getData('user');

    const response = await fetchApi(
      'GET',
      `messages/get-all/${id}/${idConversation}`,
    );

    const messages = response.map(item => item.data);

    messages.forEach(data => {
      dispatch(addMessage(data));
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View style={containerTop}>
      <View style={containerTopImage}>
        <ImageBackground
          style={image}
          source={require('./public/background.png')}
        />
      </View>
      <View style={containerBottom}>
        <FlatList
          data={messageList.messages}
          renderItem={({item}) => {
            return (
              <BubbleMessage
                idMessage={item.id}
                message={item.message}
                sender={item.sender_id}
              />
            );
          }}
        />
      </View>
      <View style={containerInput}>
        <TextInput
          style={input}
          onChangeText={text => setMessage(text)}
          value={message}
        />
        <Image style={imageSend} source={require('./public/send.png')} />
      </View>
    </View>
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
    borderColor: 'green',
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
    height: '100%',
  },
});
export default ChatScreen;

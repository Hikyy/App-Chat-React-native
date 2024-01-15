import React, {useState} from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  FlatList,
  StyleSheet,
  Button,
  Pressable,
} from 'react-native';
import {jsonApi} from '../helper/jsonApi';
import {fetchApi} from '../helper/fetch';
import {useDispatch, useSelector} from 'react-redux';

export default function ConversationListScreen({navigation}) {
  const dispatch = useDispatch();
  let response = null;
  const [userList, setUserList] = useState([]);
  const [conversationList, setConversationList] = useState(
    useSelector(state => state.conversationList),
  );

  async function handleKeyDown(text) {
    jsonApi.data.attributes = {
      Username: '',
    };

    if (text.length >= 2) {
      jsonApi.data.attributes.Username = text;
      response = await fetchApi('POST', 'get-user', jsonApi);

      if (response != null) {
        const users = response.map(item => item.data);
        setUserList(users);
        console.log('userList => ', userList);
      } else {
        setUserList([]);
      }
    }
  }

  const RenderUserList = () => {
    if (userList.length === 0 && response !== null) {
      return <Text>Aucun utilisateur trouvé.</Text>;
    } else {
      return (
        <View style={researchedUserWrapper}>
          {userList.map(item => (
            <Button
              onPress={() =>
                navigation.navigate('chats', {idConversation: item.id})
              }
              style={researchedUser}
              title={item.username}
              key={item.id}
            />
          ))}
        </View>
      );
    }
  };

  console.log('conversation list', conversationList);
  const {
    itemContainerStyle,
    imageStyle,
    usernameStyle,
    arrowStyle,
    usernameText,
    loggedInText,
    activeHeadline,
    signInButton,
    textButton,
    contentMessageText,
    inputSearch,
    researchedUser,
    researchedUserWrapper,
  } = styles;

  return (
    <View style={{flex: 1}}>
      <Text style={activeHeadline}>Active</Text>
      <TextInput
        style={inputSearch}
        onChangeText={text => handleKeyDown(text)}
        keyboardType="default"
        placeholder="Entrer un nom d'utilisateur"
      />
      {RenderUserList()}

      <FlatList
        data={conversationList.conversations}
        renderItem={({item}) => {
          return (
            <>
              <Pressable
                onPress={() =>
                  navigation.navigate('chats', {
                    idConversation: item.receiver_id,
                  })
                }
                title="Go">
                <View style={itemContainerStyle}>
                  <Image
                    style={imageStyle}
                    source={require('./public/ellipse-2.png')}
                  />
                  <View style={usernameStyle}>
                    <Text style={usernameText}>{item.receiver_username}</Text>
                    <View>
                      <Text style={contentMessageText}>{item.message}</Text>
                    </View>
                    <Text style={loggedInText}>Logged inn {Date()}</Text>
                  </View>
                  <Image
                    style={arrowStyle}
                    source={require('../assets/arrow.png')}
                    resizeMode="contain"
                  />
                </View>
              </Pressable>
            </>
          );
        }}
      />
      <Button
        style={signInButton}
        title="exit"
        onPress={() => {
          navigation.navigate('signIn');
        }}>
        <Text style={textButton}>Sign Out</Text>
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  activeHeadline: {
    marginLeft: 25,
    fontWeight: 'bold',
    fontSize: 35,
    color: '#333333',
    marginTop: 15,
    marginBottom: 10,
  },
  itemContainerStyle: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 1,
    borderRadius: 5,
    marginTop: 10,
    width: '90%',
    alignSelf: 'center',
  },
  imageStyle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 15,
  },
  usernameStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  usernameText: {
    fontSize: 16,
    marginLeft: 20,
    fontWeight: 'bold',
  },
  loggedInText: {
    fontSize: 12,
    color: '#c9c7c7',
    marginLeft: 20,
    marginTop: 5,
  },
  arrowStyle: {
    height: 20,
    flex: 0.2,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  signInButton: {
    alignSelf: 'center',
    backgroundColor: '#CF7C77',
    color: '#333',
    marginTop: 50,
    width: '45%',
    height: 50,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 70,
  },
  textButton: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  contentMessageText: {
    marginLeft: 20,
    fontSize: 14,
  },
  inputSearch: {
    // border: 0,
    borderBottomWidth: 2,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    padding: 5,
    borderBottomColor: 'black',
    marginTop: 10,
    marginLeft: 'auto',
    marginRight: 'auto',
    // display: 'block',
    width: '75%',
  },
  researchedUser: {
    marginTop: 5,
    marginBottom: 5,
    padding: 5,
    marginLeft: 'auto',
    marginRight: 'auto',
    // display: 'block',
    color: 'gray',
    borderBottomWidth: 1,
    width: '100%',
    textAlign: 'center',
    backgroundColor: 'transparent !important',
    color: 'transparent',
  },
  researchedUserWrapper: {
    width: '75%',
    // display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});

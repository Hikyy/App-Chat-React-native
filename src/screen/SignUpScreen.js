import React, {useState} from 'react';
import {
  Text,
  View,
  TextInput,
  ImageBackground,
  Image,
  KeyboardAvoidingView,
  StyleSheet, Button, ScrollView,
} from "react-native";
import {jsonApi} from '../helper/jsonApi';
import {fetchApi} from '../helper/fetch';

export default function SignUpScreen({navigation}) {
  const [emailAddress, setEmailAddress] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const {
    signInText,
    descriptionText,
    signInImage,
    usernameInput,
    textButton,
    signInButton,
    backgroundImage,
  } = styles;

  function onButtonPress(event) {
    jsonApi.data.attributes = {
      email_address: emailAddress,
      username: username,
      password: password,
    };

    const verifyInput = onButtonRelease({
      email_address: emailAddress,
      username: username,
      password: password,
    });

    if (!verifyInput) {
      return;
    }

    const response = fetchApi('POST','signup' ,jsonApi);
    jsonApi.data.attributes = {};
    if (typeof response.data !== 'undefined') {
    //   navigation.navigate('');
      console.log('True');
    }
  }

  function onButtonRelease(data) {
    if (data.email_address === ''){
      return false;
    }

    if (data.username === ''){
      return false;
    }

    if (data.password === ''){
      return false;
    }

    return true;
  }

  return (
    <ImageBackground
      source={require('../assets/background.png')}
      style={backgroundImage}>
      <View style={{flex: 1}}>
        <Image
          resizeMode="contain"
          style={signInImage}
          source={require('../assets/signIn_cat.png')}
        />
        <View style={{flex: 1}}>
          <Text style={signInText}>Sign In</Text>
          <Text style={descriptionText}>
            Please enter a email and username and password to start
          </Text>
          <ScrollView>
            <TextInput
              onChangeText={text => setEmailAddress(text)}
              keyboardType="email-address"
              value={emailAddress}
              style={usernameInput}
              placeholder="Enter email..."
            />
            <TextInput
              onChangeText={text => setUsername(text)}
              value={username}
              style={usernameInput}
              placeholder="Enter username..."
            />
            <TextInput
              onChangeText={text => setPassword(text)}
              value={password}
              style={usernameInput}
              secureTextEntry={true}
              placeholder="Enter password..."
            />
            <Button
              style={signInButton}
              onPress={() => {
                onButtonPress();
              }}
              title="button">
              <Text style={textButton}>Get Started</Text>
            </Button>
          </ScrollView>
        </View>
        <KeyboardAvoidingView behavior="padding" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },

  signInImage: {
    flex: 1,
    width: '80%',
    alignSelf: 'center',
  },

  signInText: {
    marginLeft: 25,
    fontWeight: 'bold',
    fontSize: 35,
    color: '#333333',
  },

  descriptionText: {
    color: '#333333',
    fontSize: 14,
    marginLeft: 25,
    marginTop: 5,
  },

  usernameInput: {
    marginTop: 40,
    width: '80%',
    marginLeft: 25,
    fontSize: 16,
    fontWeight: 'bold',
    borderBottomColor: '#E2E2E2',
    borderStyle: 'solid',
    borderBottomWidth: 1,
    paddingBottom: 10,
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
  },
  textButton: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

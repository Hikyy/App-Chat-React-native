import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import {Provider} from 'react-redux';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import store from './src/store';
import ChatScreen from './src/screen/ChatScreen';
import SignUpScreen from './src/screen/SignUpScreen';
import ConversationListScreen from './src/screen/ConversationListScreen';

const ChatStack = createNativeStackNavigator();
const App = () => {
  return (
    <>
      <Provider store={store}>
        <NavigationContainer>
          <ChatStack.Navigator>
            <ChatStack.Screen
              name="signIn"
              component={SignUpScreen} />
            <ChatStack.Screen
              name="conversationList"
              component={ConversationListScreen}
            />
            <ChatStack.Screen
              name="chats"
              component={ChatScreen} />
          </ChatStack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
);
};

export default App;

const styles = StyleSheet.create({});

import React from 'react'
import { Text, View, Image, FlatList, StyleSheet, Button } from "react-native";
import { useSelector } from 'react-redux';


export default function ConversationListScreen({ navigation }) {
  const conversationList = useSelector(state => state.conversationList);
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
  } = styles;

  return (
    <View style={{flex: 1}}>
      <Text style={activeHeadline}>Active</Text>
      <FlatList data={conversationList} renderItem={({ item }) => {
        console.log("item", item);
        return <Button onPress={() => navigation.navigate('chats', { name: 'item.username', userId: 'item.userId' })}>
          <View style={itemContainerStyle}>
            <Image style={imageStyle} source={require('./public/ellipse-2.png')} />
            <View style={usernameStyle}>
              <Text style={usernameText}>{'item.username'}</Text>
              <Text style={loggedInText}>Logged in {Date()}</Text>
            </View>
            <Image style={arrowStyle} source={require("../assets/arrow.png")} resizeMode="contain" />

          </View>
        </Button>

      }}

      ></FlatList>
      <Button style={signInButton} onPress={() => {
          navigation.navigate('signIn');
        }}>
        <Text style={textButton}>Sign Out</Text>
      </Button>
    </View>
    );
};

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
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.08,
        shadowRadius: 4,
        elevation: 1,
        borderRadius: 5,
        marginTop: 10,
        width: '90%',
        alignSelf: 'center'
    },
    imageStyle: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 15
    },
    usernameStyle: {
        flex: 1,
        justifyContent: "center",
        alignItems: "flex-start",
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
        flex: .2,
        alignSelf: 'center',
        justifyContent: 'center'
    },
    signInButton: {
        alignSelf: 'center',
        backgroundColor: '#CF7C77',
        color: '#333',
        marginTop: 50,
        width: '45%',
        height: 50,
        borderRadius: 12,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 70
    },
    textButton: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 18
    }
});



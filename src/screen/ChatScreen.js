import React from 'react';
import { View, Text, Image, StyleSheet, ImageBackground, ScrollView, TextInput } from "react-native";
import BubbleMessage from "../components/BubbleMessage";

const styles = StyleSheet.create({
  chatsChild: {
    position: 'absolute',
    top: -374.13,
    left: -366.14,
    width: 1107.95,
    height: 1094.44,
    resizeMode: 'contain',
  },
  vectorIcon: {
    position: 'absolute',
    height: '26.35%',
    width: '109.87%',
    top: '-3.69%',
    right: '-144.8%',
    bottom: '77.34%',
    left: '134.93%',
    maxWidth: '100%',
    overflow: 'hidden',
    maxHeight: '100%',
    resizeMode: 'cover',
  },
  pranavRay: {
    position: 'relative',
    letterSpacing: -0.02,
  },
  online: {
    position: 'relative',
    fontSize: 14,
    letterSpacing: -0.02,
  },
  pranavRayParent: {
    position: 'absolute',
    top: 56,
    left: 76,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    gap: 2,
    color: '#fff',
  },
  chatsItem: {
    position: 'absolute',
    top: 123,
    left: 0,
    borderRadius: 31,
    backgroundColor: '#fff',
    width: 375,
    height: 689,
  },
  ellipseIcon: {
    position: 'absolute',
    top: 54,
    left: 21,
    borderRadius: 21,
    width: 42,
    height: 42,
    resizeMode: 'cover',
  },
  rectangleDiv: {
    position: 'absolute',
    top: 720,
    left: 20,
    borderRadius: 164,
    borderWidth: 1,
    borderColor: '#e5e6e9',
    boxSizing: 'border-box',
    width: 335,
    height: 64,
  },
  phdotsThreeOutlineVerticalIcon: {
    position: 'absolute',
    top: 63,
    left: 349,
    width: 6,
    height: 22,
    overflow: 'hidden',
    resizeMode: 'cover',
  },
  pranavRay1: {
    position: 'relative',
    letterSpacing: -0.02,
  },
  heyHowHaveYouBeenWrapper: {
    borderRadius: 100,
    backgroundColor: 'rgba(255, 199, 0, 0.25)',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    padding: 10,
  },
  frameContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    gap: 6,
  },
  pm: {
    position: 'relative',
    fontSize: 12,
    letterSpacing: -0.02,
    color: '#8a91a8',
  },
  frameGroup: {
    alignSelf: 'stretch',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    gap: 10,
  },
  awesomeLetsMeetUpWrapper: {
    borderRadius: 100,
    backgroundColor: 'rgba(255, 137, 51, 0.25)',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    padding: 10,
  },
  canIAlso: {
    margin: 0,
  },
  canIAlsoGetMyCousinAlongWrapper: {
    borderRadius: 15,
    backgroundColor: 'rgba(255, 137, 51, 0.25)',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    padding: 10,
    textAlign: 'right',
  },
  frameParent1: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    gap: 6,
    fontSize: 12,
    color: '#8a91a8',
  },
  pm1: {
    position: 'relative',
    fontSize: 12,
    letterSpacing: -0.02,
    color: '#8a91a8',
    textAlign: 'right',
  },
  frameDiv: {
    alignSelf: 'stretch',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    gap: 10,
  },
  frameWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  phplayCircleFillIcon: {
    position: 'relative',
    width: 32,
    height: 32,
    overflow: 'hidden',
    flexShrink: 0,
    resizeMode: 'cover',
  },
  frameChild: {
    position: 'relative',
    width: 96.9,
    height: 24.02,
    resizeMode: 'cover',
  },
  phplayCircleFillParent: {
    borderRadius: 89.81,
    backgroundColor: 'rgba(255, 199, 0, 0.25)',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8.981,
    gap: 8.98,
  },
  frameParent4: {
    alignSelf: 'stretch',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'center',
    gap: 10,
    fontSize: 12,
    color: '#8a91a8',
  },
  frameParent: {
    position: 'absolute',
    top: 161,
    left: 20,
    width: 335,
    height: 355,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: 5,
    fontSize: 15,
  },
  groupIcon: {
    position: 'absolute',
    top: 736,
    left: 308,
    width: 33,
    height: 33,
    resizeMode: 'cover',
  },
  chatsChild1: {
    position: 'absolute',
    height: '4.06%',
    width: '8.8%',
    top: '90.64%',
    right: '82.13%',
    bottom: '5.3%',
    left: '9.07%',
    maxWidth: '100%',
    overflow: 'hidden',
    maxHeight: '100%',
    resizeMode: 'cover',
  },
  typeMessage: {
    position: 'absolute',
    top: 744,
    left: 79,
    fontSize: 14,
  },
  lineDiv: {
    position: 'absolute',
    top: 735.5,
    left: 293.5,
    borderRightWidth: 1,
    borderRightColor: '#e5e6e9',
    boxSizing: 'border-box',
    width: 1,
    height: 34,
  },
  chatsRoot: {
    borderColor: '#e5e6e9',
    position: 'relative',
    backgroundColor: '#000',
    width: '100%',
    height: 812,
    overflow: 'hidden',
    textAlign: 'left',
    fontSize: 16,
    color: '#000',
    fontFamily: 'Inter',
  },
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

const ChatScreen = ({ navigation }) => {
  return (
    <View style={styles.containerTop}>
      <View style={styles.containerTopImage}>
        <ImageBackground style={styles.image} source={require('./public/background.png')} />
      </View>
      <View style={styles.containerBottom}>
        <ScrollView>
          <BubbleMessage />
          <BubbleMessage />
          <Text>Toto</Text>
          <Text>Toto</Text>
          <Text>Toto</Text>
          <Text>Toto</Text>
          <Text>Toto</Text>
        </ScrollView>
      </View>
      <View style={styles.containerInput}>
        <TextInput style={styles.input} />
        <Image style={styles.imageSend} source={require('./public/send.png')} />
      </View>
    </View>
  );
};
export default ChatScreen;

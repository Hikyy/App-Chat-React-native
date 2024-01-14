import React from 'react';
import { View, Text, Image, StyleSheet, ImageBackground } from "react-native";

const styles = StyleSheet.create({
  frameGroup: {
    alignSelf: 'stretch',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    gap: 10,
  },
  frameDiv: {
    alignSelf: 'stretch',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    gap: 10,
  },
  frameWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  heyHowHaveYouBeenWrapper: {
    borderRadius: 100,
    backgroundColor: 'rgba(255, 199, 0, 0.25)',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: 10,
  },
  awesomeLetsMeetUpWrapper: {
    borderRadius: 100,
    backgroundColor: 'rgba(255, 137, 51, 0.25)',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: 10,
  },
  pranavRay1: {
    position: 'relative',
    letterSpacing: -0.02,
  },
  // pm: {
  //   position: 'relative',
  //   fontSize: 12,
  //   letterSpacing: -0.02,
  //   color: '#8a91a8',
  // },
  pm: {
    letterSpacing: -0.02,
    color: '#8a91a8',
    fontSize: 12,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    marginLeft: 11,
  },
  messageLeft: {
    borderRadius: 100,
    backgroundColor: 'rgba(255, 199, 0, 0.25)',
    display: 'flex',
    flexDirection: 'row',
    letterSpacing: -0.02,
    paddingLeft: 19,
    paddingRight: 19,
    paddingTop: 9,
    paddingBottom: 9,
  },
  frameWrapperr: {
    display: 'flex',
    flexDirection: 'column',
    gap: 7,
  },
  frameGroupp: {
    alignSelf: 'stretch',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    gap: 10,
    marginBottom: 9,
  },
});

const BubbleMessage = () => {
  return (
    <View style={styles.frameGroupp}>
      <View style={styles.frameWrapperr}>
        <Text style={styles.messageLeft}>Toto</Text>
        <Text style={styles.pm}>11:25PM</Text>
      </View>
    </View>
  );
};

export default BubbleMessage;

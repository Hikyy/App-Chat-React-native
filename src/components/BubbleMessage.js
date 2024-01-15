import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { getData } from '../helper/storage';

const BubbleMessage = ({ idMessage, message, sender }) => {
  const [classNames, setClassNames] = useState({});

  const {
    frameGroupLeft,
    frameGroupRight,
    frameWrapperr,
    messageRight,
    messageLeft,
    pm,
    frameDiv,
  } = styles;

  useEffect(() => {
    const messageDirection = async () => {
      const {id} = await getData('user');

      if (id === sender) {
        setClassNames({
          frameGroup: frameGroupRight,
          message: messageRight,
        });
      } else {
        setClassNames({
          frameGroup: frameGroupLeft,
          message: messageLeft,
        });
      }
    };

    messageDirection();
  }, [sender]);

  return (
    <View style={classNames.frameGroup}>
      <View style={frameWrapperr}>
        <Text style={classNames.message}>{message}</Text>
        <Text style={pm}>11:25PM</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameGroupLeft: {
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
  messageLeft: {
    borderRadius: 100,
    backgroundColor: 'rgba(255, 137, 51, 0.25)',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingLeft: 19,
    paddingRight: 19,
    paddingTop: 9,
    paddingBottom: 9,
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
  messageRight: {
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
    justifyContent: 'center',
    gap: 7,
  },
  frameGroupRight: {
    alignSelf: 'stretch',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    gap: 10,
    marginBottom: 9,
  },
});

export default BubbleMessage;

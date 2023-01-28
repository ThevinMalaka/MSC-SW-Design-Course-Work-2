/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import FlashMessage from 'react-native-flash-message';

const Message = (props) => {
  return <FlashMessage hideStatusBar style={{zIndex: 1000}} duration={3000} />;
};

export default Message;

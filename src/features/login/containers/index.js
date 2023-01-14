import React, {useEffect, useCallback} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {View, Text, TouchableOpacity} from 'react-native';
import {Button} from 'react-native-paper';

import {navigateToHome} from '../../../navigation/NavigationHelpers';

const Login = () => {
  return (
    <View style={{marginTop: 50, alignContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 50, fontWeight: 'bold'}}>Welcome</Text>
      <Text style={{fontSize: 40}}>To</Text>
      <Text style={{fontSize: 40}}>MSC Project</Text>
      <View style={{marginTop: 70}}>
        <Button
          mode="contained"
          color="#1565c0"
          onPress={() => {
            navigateToHome();
          }}
          style={{borderRadius: 20}}>
          Go to Home Screen
        </Button>
      </View>
    </View>
  );
};

export default Login;

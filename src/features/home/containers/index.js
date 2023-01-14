import React, {useEffect, useCallback} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {View, Text, TouchableOpacity} from 'react-native';
import {Button} from 'react-native-paper';

import {testRequest, chnageActionStatus} from '../actions';
import {getTestFunctionStatus, getTestApiEndpointData} from '../selectors';
import {navigateToLogin} from '../../../navigation/NavigationHelpers';

const Home = () => {
  const status = useSelector(state => getTestFunctionStatus(state));
  const data = useSelector(state => getTestApiEndpointData(state));

  const dispatch = useDispatch();

  const testApi = useCallback(
    info => {
      dispatch(testRequest(info));
    },
    [dispatch],
  );

  const testAction = useCallback(
    info => {
      dispatch(chnageActionStatus(info));
    },
    [dispatch],
  );

  return (
    <View style={{marginTop: 50, alignContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 30, fontWeight: 'bold'}}>
        React Native Boilerplate
      </Text>
      <View
        style={{marginTop: 40, alignContent: 'center', alignItems: 'center'}}>
        <Text>Test Action Status: {status ? 'ON' : 'OFF'}</Text>
        {status ? (
          <View
            style={{
              height: 50,
              width: 50,
              backgroundColor: '#53ab30',
              borderRadius: 50,
              marginTop: 30,
            }}
          />
        ) : (
          <View
            style={{
              height: 50,
              width: 50,
              backgroundColor: '#bf0000',
              borderRadius: 50,
              marginTop: 30,
            }}
          />
        )}
        <Button
          mode="contained"
          color="#008f8a"
          onPress={() => {
            testAction(!status);
          }}
          style={{borderRadius: 20, marginTop: 30}}>
          Press to test Action
        </Button>

        <Button
          mode="contained"
          color="#008f8a"
          onPress={() => {
            testApi();
          }}
          style={{borderRadius: 20, marginTop: 30}}>
          Press to test Api Endpoint
        </Button>

        <TouchableOpacity
          onPress={() => {
            navigateToLogin();
          }}>
          <Text style={{fontSize: 15, marginTop: 20, fontWeight: 'bold'}}>
            Go To Login Screen
          </Text>
        </TouchableOpacity>

        <View
          style={{
            padding: 20,
            marginTop: 30,
            backgroundColor: '#efefef',
            borderRadius: 20,
          }}>
          {data &&
            data.map((a, i) => (
              <View key={i}>
                <Text>{a.Category}</Text>
                <Text>{a.Description}</Text>
                <Text>{a.Link}</Text>
              </View>
            ))}
        </View>
      </View>
    </View>
  );
};

export default Home;

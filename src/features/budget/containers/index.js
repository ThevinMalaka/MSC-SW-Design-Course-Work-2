import React, {useEffect, useCallback, Fragment} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {View, Text, StatusBar} from 'react-native';
import {Button} from 'react-native-paper';
import * as Progress from 'react-native-progress';

import {testRequest, chnageActionStatus} from '../actions';
import {getTestFunctionStatus, getTestApiEndpointData} from '../selectors';
import {navigateToLogin} from '../../../navigation/NavigationHelpers';

const Budget = () => {
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
    <Fragment>
      <StatusBar backgroundColor="#1565c0" barStyle="light-content" />
      <View
        style={{marginTop: 50, alignContent: 'center', alignItems: 'center'}}>
        <View style={{flexDirection: 'row', marginLeft: 10, marginRight: 10}}>
          <View
            style={{
              flex: 1,
              backgroundColor: '#e3e3e3',
              padding: 10,
              margin: 3,
            }}>
            <View style={{flexDirection: 'row'}}>
              <View style={{flex: 3}}>
                <Progress.Bar progress={0.4} width={200} height={20} />
                <Text style={{fontWeight: 'bold', fontSize: 14}}>Food</Text>
              </View>
              <View style={{flex: 3, alignItems: 'flex-end'}}>
                <Text style={{fontSize: 12}}>Budget LKR 50,000</Text>
                <Text style={{fontSize: 12, marginTop: 5}}>
                  Remaining LKR 30,000
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={{flexDirection: 'row', marginLeft: 10, marginRight: 10}}>
          <View
            style={{
              flex: 1,
              backgroundColor: '#e3e3e3',
              padding: 10,
              margin: 3,
            }}>
            <View style={{flexDirection: 'row'}}>
              <View style={{flex: 3}}>
                <Progress.Bar
                  progress={0.9}
                  width={200}
                  height={20}
                  color={'#f56c6c'}
                />
                <Text style={{fontWeight: 'bold', fontSize: 14}}>Fuel</Text>
              </View>
              <View style={{flex: 3, alignItems: 'flex-end'}}>
                <Text style={{fontSize: 12}}>Budget LKR 15,000</Text>
                <Text style={{fontSize: 12, marginTop: 5}}>
                  Remaining LKR 1500
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={{flexDirection: 'row', marginLeft: 10, marginRight: 10}}>
          <View
            style={{
              flex: 1,
              backgroundColor: '#e3e3e3',
              padding: 10,
              margin: 3,
            }}>
            <View style={{flexDirection: 'row'}}>
              <View style={{flex: 3}}>
                <Progress.Bar progress={0.6} width={200} height={20} />
                <Text style={{fontWeight: 'bold', fontSize: 14}}>Others</Text>
              </View>
              <View style={{flex: 3, alignItems: 'flex-end'}}>
                <Text style={{fontSize: 12}}>Budget LKR 25,000</Text>
                <Text style={{fontSize: 12, marginTop: 5}}>
                  Remaining LKR 10000
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={{flexDirection: 'row', marginTop: 30}}>
          <Button mode="contained" color="#1565c0" onPress={() => testApi()}>
            Change Budget
          </Button>
        </View>
      </View>
    </Fragment>
  );
};

export default Budget;

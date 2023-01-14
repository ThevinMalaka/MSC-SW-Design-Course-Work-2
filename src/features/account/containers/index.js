import React, {useEffect, useCallback, Fragment} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {View, Text, StatusBar} from 'react-native';
import {Button} from 'react-native-paper';

import {testRequest, chnageActionStatus} from '../actions';
import {getTestFunctionStatus, getTestApiEndpointData} from '../selectors';
import {navigateToLogin} from '../../../navigation/NavigationHelpers';

const Account = () => {
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
  const AccountItem = ({title, amount}) => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#e3e3e3',
          padding: 10,
          margin: 3,
        }}>
        <View style={{flexDirection: 'row'}}>
          <View style={{flex: 4}}>
            <Text style={{fontWeight: 'bold', fontSize: 16}}>{title}</Text>
          </View>
          <View style={{flex: 2, alignItems: 'flex-end'}}>
            <Text>LKR {amount}</Text>
          </View>
        </View>
      </View>
    );
  };
  return (
    <Fragment>
      <StatusBar backgroundColor="#1565c0" barStyle="light-content" />
      <View
        style={{marginTop: 50, alignContent: 'center', alignItems: 'center'}}>
        <View style={{flexDirection: 'row', marginLeft: 10, marginRight: 10}}>
          <AccountItem title="Account" amount="196,965" />
        </View>
        <View style={{flexDirection: 'row', marginLeft: 10, marginRight: 10}}>
          <AccountItem title="Cash" amount="23,678" />
        </View>
        <View style={{flexDirection: 'row', marginLeft: 10, marginRight: 10}}>
          <AccountItem title="Petty Cash" amount="2,437" />
        </View>
        <View style={{flexDirection: 'row', marginTop: 30}}>
          <Button mode="contained" color="#1565c0" onPress={() => testApi()}>
            Add new Account
          </Button>
        </View>
      </View>
    </Fragment>
  );
};

export default Account;

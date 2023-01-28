import React, {useEffect, useCallback, Fragment} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {View, Text, StatusBar} from 'react-native';
import {Button} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

import {getAccountRequest} from '../actions';
import {getAccountList} from '../selectors';
import {navigateToAddNewAccount} from '../../../navigation/NavigationHelpers';

const Account = () => {
  const accountList = useSelector(state => getAccountList(state));

  const dispatch = useDispatch();
  const navigation = useNavigation();

  const getAccountList = useCallback(
    info => {
      dispatch(getAccountRequest());
    },
    [dispatch],
  );
  navigation.addListener('focus', () => {
    getAccountList();
  });

  useEffect(() => {
    getAccountList();
  }, []);

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
        {/* <View style={{flexDirection: 'row', marginLeft: 10, marginRight: 10}}>
          <AccountItem title="Cash" amount="23,678" />
        </View>
        <View style={{flexDirection: 'row', marginLeft: 10, marginRight: 10}}>
          <AccountItem title="Petty Cash" amount="2,437" />
        </View> */}
        <View style={{flexDirection: 'row', marginTop: 30}}>
          <Button
            mode="contained"
            color="#1565c0"
            onPress={() => {
              navigateToAddNewAccount();
            }}>
            Add new Account
          </Button>
        </View>
      </View>
    </Fragment>
  );
};

export default Account;

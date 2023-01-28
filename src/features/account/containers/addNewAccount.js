import React, {useEffect, useCallback, Fragment, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StatusBar,
} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
import {ButtonGroup} from 'react-native-elements';
import DatePicker from 'react-native-date-picker';
import DropDownPicker from 'react-native-dropdown-picker';

import {createAccountRequest} from '../actions';
import {getTestFunctionStatus, getTestApiEndpointData} from '../selectors';
import {navigateToLogin} from '../../../navigation/NavigationHelpers';
import {ScrollView} from 'react-native-gesture-handler';

const AddExpenses = () => {
  const [name, setName] = useState('');
  const [balance, setBalance] = useState('');
  const [description, setDescription] = useState('');

  const dispatch = useDispatch();

  const createAccount = useCallback(
    info => {
      dispatch(createAccountRequest(info));
    },
    [dispatch],
  );

  const submit = () => {
    console.log(name, balance, description);
    createAccount({name, balance, description});
  };

  return (
    <Fragment>
      <StatusBar backgroundColor="#1565c0" barStyle="light-content" />
      <ScrollView>
        <View style={{marginTop: 20}}>
          <View style={{marginTop: 20}}>
            <View style={{marginLeft: 20, marginRight: 20, marginBottom: 20}}>
              <View style={{marginTop: 10}}>
                <TextInput
                  label="Account Name"
                  mode="outlined"
                  value={name}
                  keyboardType={'default'}
                  onChangeText={text => setName(text)}
                />
              </View>
              <View style={{marginTop: 10}}>
                <TextInput
                  label="Balance"
                  mode="outlined"
                  value={balance}
                  keyboardType={'numeric'}
                  onChangeText={text => setBalance(text)}
                />
              </View>
              <View style={{marginTop: 10}}>
                <TextInput
                  label="Description"
                  mode="outlined"
                  value={description}
                  onChangeText={text => setDescription(text)}
                  multiline={true}
                  numberOfLines={5}
                />
              </View>
              <View style={{flexDirection: 'row', marginTop: 30}}>
                <Button
                  mode="contained"
                  color="#1565c0"
                  style={{width: '100%', marginRight: 10}}
                  onPress={() => submit()}>
                  Save
                </Button>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </Fragment>
  );
};

export default AddExpenses;
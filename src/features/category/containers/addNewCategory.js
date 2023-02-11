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

import {createCategoryRequest} from '../actions';
import {getTestFunctionStatus, getTestApiEndpointData} from '../selectors';
import {navigateToLogin} from '../../../navigation/NavigationHelpers';
import {ScrollView} from 'react-native-gesture-handler';

const AddNewCategory = () => {
  const [name, setName] = useState('');
  const [balance, setBalance] = useState('');
  const [description, setDescription] = useState('');
  const [expensesType, setExpensesType] = useState('INCOME');
  const expensesSelector = {
    INCOME: 0,
    EXPENSE: 1,
  };

  const dispatch = useDispatch();

  const createCategory = useCallback(
    info => {
      dispatch(createCategoryRequest(info));
    },
    [dispatch],
  );

  const submit = () => {
    createCategory({
      name,
      description,
      type: expensesType === 'INCOME' ? 1 : 2,
    });
  };

  return (
    <Fragment>
      <StatusBar backgroundColor="#1565c0" barStyle="light-content" />
      <ScrollView>
        <View style={{marginTop: 20}}>
          <View style={{marginTop: 20}}>
            <View style={{marginLeft: 20, marginRight: 20, marginBottom: 20}}>
              <View style={{alignContent: 'center', alignItems: 'center'}}>
                <ButtonGroup
                  accessibilityLabel="6"
                  buttons={['INCOME', 'EXPENSE']}
                  containerStyle={{
                    height: 40,
                    width: Dimensions.get('window').width - 40,
                    backgroundColor: '#b7cee8',
                    color: '#fff',
                  }}
                  selectedButtonStyle={{ backgroundColor: '#1565c0', color: '#fff' }}
                  selectedIndex={expensesSelector[expensesType]}
                  onPress={value => {
                    setExpensesType(Object.keys(expensesSelector)[value]);
                  }}
                />
              </View>
              <View style={{marginTop: 10}}>
                <TextInput
                  label="Category Name"
                  mode="outlined"
                  value={name}
                  keyboardType={'default'}
                  onChangeText={text => setName(text)}
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
                  Add
                </Button>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </Fragment>
  );
};

export default AddNewCategory;

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

import {testRequest, chnageActionStatus} from '../actions';
import {getTestFunctionStatus, getTestApiEndpointData} from '../selectors';
import {navigateToLogin} from '../../../navigation/NavigationHelpers';
import {ScrollView} from 'react-native-gesture-handler';

const AddExpenses = () => {
  const [expensesType, setExpensesType] = useState('EXPENSES');
  const expensesSelector = {
    INCOME: 0,
    EXPENSE: 1,
    TRANSFER: 2,
  };
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [text, setText] = useState('');

  const [accountOpen, setAccountOpen] = useState(false);
  const [accountValue, setAccountValue] = useState(null);
  const [accountItems, setAccountItems] = useState([
    {label: 'Cash', value: 'CASH'},
    {label: 'Account', value: 'ACCOUNT'},
    {label: 'Card', value: 'CARD'},
  ]);

  const [categoryOpen, setCategoryOpen] = useState(false);
  const [categoryValue, setCategoryValue] = useState(null);
  const [categoryItems, setCategoryItems] = useState([
    {label: 'Food', value: 'FOOD'},
    {label: 'Social Life', value: 'SOCIALLIFE'},
    {label: 'Fuel', value: 'FUEL'},
  ]);

  return (
    <Fragment>
      <StatusBar backgroundColor="#1565c0" barStyle="light-content" />
      <ScrollView>
        <View style={{marginTop: 20}}>
          <View style={{alignContent:'center', alignItems:'center'}}>
            <ButtonGroup
              accessibilityLabel="6"
              buttons={['INCOME', 'EXPENSE', 'TRANSFER']}
              containerStyle={{
                height: 40,
                width: Dimensions.get('window').width - 40,
                backgroundColor: '#b7cee8',
                color: '#fff',
              }}
              selectedButtonStyle={{backgroundColor: '#1565c0', color: '#fff'}}
              selectedIndex={expensesSelector[expensesType]}
              onPress={value => {
                setExpensesType(Object.keys(expensesSelector)[value]);
              }}
            />
          </View>
          <View style={{marginTop: 20}}>
            <View style={{marginLeft: 20, marginRight: 20, marginBottom: 20}}>
              <Button
                mode="contained"
                color="#fff"
                style={{borderColor: '#000', borderWidth: 1}}
                onPress={() => setOpen(true)}>
                Date - {date.toLocaleDateString()}
              </Button>
              <DatePicker
                modal
                open={open}
                date={date}
                onConfirm={date => {
                  setOpen(false);
                  setDate(date);
                }}
                onCancel={() => {
                  setOpen(false);
                }}
              />
              <View style={{marginTop: 15}}>
                <DropDownPicker
                  open={accountOpen}
                  value={accountValue}
                  items={accountItems}
                  setOpen={setAccountOpen}
                  setValue={setAccountValue}
                  setItems={setAccountItems}
                  placeholder="Select the Account"
                />
              </View>
              <View style={{marginTop: 15}}>
                <DropDownPicker
                  open={categoryOpen}
                  value={categoryValue}
                  items={categoryItems}
                  setOpen={setCategoryOpen}
                  setValue={setCategoryValue}
                  setItems={setCategoryItems}
                  placeholder="Select the Category"
                />
              </View>
              <View style={{marginTop: 10}}>
                <TextInput
                  label="Amount"
                  mode="outlined"
                  value={Number}
                  onChangeText={text => setText(text)}
                />
              </View>
              <View style={{marginTop: 10}}>
                <TextInput
                  label="Note"
                  mode="outlined"
                  value={Number}
                  onChangeText={text => setText(text)}
                  multiline={true}
                  numberOfLines={5}
                />
              </View>
              <View style={{flexDirection: 'row', marginTop: 30}}>
                <Button
                  mode="contained"
                  color="#1565c0"
                  style={{width: '100%', marginRight: 10}}
                  onPress={() => testApi()}>
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

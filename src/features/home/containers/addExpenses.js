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

import {addTransactionRequest} from '../actions';
import {getTestFunctionStatus, getTestApiEndpointData} from '../selectors';
import {navigateToLogin} from '../../../navigation/NavigationHelpers';
import {ScrollView} from 'react-native-gesture-handler';
import {getAccountRequest} from '../../account/actions';
import {getAccountList} from '../../account/selectors';
import {getCategoryListRequest} from '../../category/actions';
import {getCategoryList} from '../../category/selectors';

const AddExpenses = () => {
  const dispatch = useDispatch();
  const [expensesType, setExpensesType] = useState('EXPENSE');
  const expensesSelector = {
    INCOME: 0,
    EXPENSE: 1,
    TRANSFER: 2,
  };
  const [date, setDate] = useState(new Date());
  const [submitedDate, setSubmitedDate] = useState('');
  const [open, setOpen] = useState(false);
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');
  const [note, setNote] = useState('');

  const [accountOpen, setAccountOpen] = useState(false);
  const [accountValue, setAccountValue] = useState(null);
  const [accountItems, setAccountItems] = useState([{label: '', value: ''}]);

  const [categoryOpen, setCategoryOpen] = useState(false);
  const [categoryValue, setCategoryValue] = useState(null);
  const [categoryItems, setCategoryItems] = useState([{label: '', value: ''}]);

  const accountList = useSelector(state => getAccountList(state));
  const categoryies = useSelector(state => getCategoryList(state));
  const getAccounts = useCallback(
    info => {
      dispatch(getAccountRequest());
    },
    [dispatch],
  );

  const getCategory = useCallback(
    info => {
      dispatch(getCategoryListRequest(info));
    },
    [dispatch],
  );

  const addTransaction = useCallback(
    info => {
      dispatch(addTransactionRequest(info));
    },
    [dispatch],
  );

  useEffect(() => {
    getAccounts();
    getCategory();
  }, []);

  useEffect(() => {
    if (accountList) {
      let accountItems = [];
      accountList.map(item => {
        accountItems.push({label: item.name, value: item.id});
      });
      setAccountItems(accountItems);
    }
  }, [accountList]);

  useEffect(() => {
    if (categoryies) {
      let categoryItems = [];
      categoryies.map(item => {
        console.log('item', item);
        if (expensesType === 'INCOME' && item.type === 1) {
          categoryItems.push({label: item.name, value: item.id});
        }
        if (expensesType === 'EXPENSE' && item.type === 2) {
          categoryItems.push({label: item.name, value: item.id});
        }
      });
      setCategoryItems(categoryItems);
    }
  }, [categoryies, expensesType]);

  console.log('accountList', accountList);
  console.log('categoryies', categoryies);

  return (
    <Fragment>
      <StatusBar backgroundColor="#1565c0" barStyle="light-content" />
      <ScrollView>
        <View style={{marginTop: 20}}>
          <View style={{alignContent: 'center', alignItems: 'center'}}>
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

                  const today = new Date();
                  const yyyy = date.getFullYear();
                  let mm = date.getMonth() + 1;
                  let dd = date.getDate();

                  if (dd < 10) dd = '0' + dd;
                  if (mm < 10) mm = '0' + mm;

                  const formattedToday =
                    yyyy + '-' + mm + '-' + dd + 'T00:00:00.000Z';
                  // format date to dd/mm/yyyy

                  // console.log('date', date);

                  // console.log('date', date.toLocaleDateString());

                  setDate(date);
                  setSubmitedDate(formattedToday);
                  console.log('date', formattedToday);
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
                  style={{zIndex: 1000}}
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
                  style={{zIndex: 900}}
                />
              </View>
              <View style={{marginTop: 10}}>
                <TextInput
                  label="Amount"
                  mode="outlined"
                  value={amount}
                  onChangeText={text => setAmount(text)}
                />
              </View>
              <View style={{marginTop: 10}}>
                <TextInput
                  label="Note"
                  mode="outlined"
                  value={note}
                  onChangeText={text => setNote(text)}
                  multiline={true}
                  numberOfLines={5}
                />
              </View>
              <View style={{flexDirection: 'row', marginTop: 30}}>
                <Button
                  mode="contained"
                  color="#1565c0"
                  style={{width: '100%', marginRight: 10}}
                  onPress={() => {
                    console.log('aaaaa', {
                      amout: amount,
                      note: note,
                      date: submitedDate,
                      type: expensesType,
                      categoryId: categoryValue,
                      accountId: accountValue,
                      transferAccountId: null,
                    });
                    addTransaction({
                      amout: Number(amount),
                      note: note,
                      date: submitedDate,
                      type: expensesType === 'INCOME' ? 1 : 2,
                      categoryId: categoryValue,
                      accountId: accountValue,
                      transferAccountId: null,
                      userid: 1,
                    });
                  }}>
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

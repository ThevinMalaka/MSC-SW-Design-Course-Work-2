import React, {useEffect, useCallback, Fragment} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StatusBar,
} from 'react-native';
import {List, FAB} from 'react-native-paper';

import {getTransactionRequest, chnageActionStatus} from '../actions';
import {
  getTestFunctionStatus,
  getTestApiEndpointData,
  getTransactionList,
} from '../selectors';
import {navigateToAddExpenses} from '../../../navigation/NavigationHelpers';
import {ScrollView} from 'react-native-gesture-handler';
import {getAccountRequest} from '../../account/actions';
import {getAccountList} from '../../account/selectors';
import {getCategoryListRequest} from '../../category/actions';
import {getCategoryList} from '../../category/selectors';

const Home = () => {
  const status = useSelector(state => getTestFunctionStatus(state));
  const data = useSelector(state => getTestApiEndpointData(state));
  const transactionList = useSelector(state => getTransactionList(state));

  const dispatch = useDispatch();
  const navigation = useNavigation();

  const accountList = useSelector(state => getAccountList(state));
  const categoryies = useSelector(state => getCategoryList(state));

  console.log('accountList', accountList);
  console.log('accountList', categoryies);

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

  const getTransaction = useCallback(
    info => {
      dispatch(getTransactionRequest(info));
    },
    [dispatch],
  );

  const testAction = useCallback(
    info => {
      dispatch(chnageActionStatus(info));
    },
    [dispatch],
  );

  navigation.addListener('focus', () => {
    getTransaction();
    getAccounts();
    getCategory();
  });

  useEffect(() => {
    getTransaction();
    getAccounts();
    getCategory();
  }, []);

  const filterPasseIdNamefromCategory = id => {
    let result = categoryies.filter(item => item.id === id);
    return result[0].name;
  };

  const filterPasseIdNamefromAccount = id => {
    let result = accountList.filter(item => item.id === id);
    return result[0].name;
  };

  console.log('transactionList', transactionList);
  let sampleObj = [
    {
      title: 'Expenses 1',
      description: 'Expenses description 1',
      date: '2023-Jan-01',
      amount: 100,
      category: 'Food',
      account: 'Cash',
      income: false,
    },
    {
      title: 'Expenses 2',
      description: 'Expenses description 2',
      date: '2023-Jan-03',
      amount: 100,
      category: 'Food',
      account: 'Cash',
      income: false,
    },
    {
      title: 'Expenses 3',
      description: 'Expenses description 3',
      date: '2023-Jan-05',
      amount: 100,
      category: 'Food',
      account: 'Cash',
      income: false,
    },
    {
      title: 'Income',
      description: 'Salary',
      date: '2023-Jan-06',
      amount: 10000,
      category: 'Salary',
      account: 'Account',
      income: true,
    },
  ];

  console.log('aaaaaaa', filterPasseIdNamefromCategory(1));

  const ListComponent = data => (
    <View>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: '#e3e3e3',
          borderRadius: 10,
          padding: 10,
          margin: 5,
          marginLeft: 15,
          marginRight: 15,
        }}>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <Text style={{fontSize: 12}}>
            {filterPasseIdNamefromCategory(data.data.categoryid)}
          </Text>
        </View>
        <View style={{flex: 3}}>
          <Text style={{fontSize: 16, fontWeight: 'bold'}}>
            {data.data.note}
          </Text>
          <Text style={{fontSize: 12}}>
            {filterPasseIdNamefromAccount(data.data.accountid)}
          </Text>
          <Text style={{fontSize: 12}}>{data.data.date.split('T')[0]}</Text>
        </View>
        <View
          style={{flex: 2, justifyContent: 'center', alignItems: 'flex-end'}}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              color: data.data.type == 1 ? '#617859' : '#f56c6c',
            }}>
            LKR {data.data.amout}
          </Text>
        </View>
      </View>
      {/* <View
        style={{
          width: Dimensions.get('screen').width - 40,
          backgroundColor: '#8c8c8c',
          height: 1,
        }}
      /> */}
    </View>
  );

  return (
    <Fragment>
      <StatusBar backgroundColor="#1565c0" barStyle="light-content" />
      <ScrollView>
        <View style={{marginTop: 10}}>
          {transactionList.map((item, index) => (
            <ListComponent key={index} data={item} />
          ))}
        </View>
      </ScrollView>

      <FAB
        style={{
          position: 'absolute',
          margin: 16,
          right: 0,
          bottom: 0,
          backgroundColor: '#1565c0',
          color: '#fff',
        }}
        large
        icon="plus"
        onPress={() => {
          navigateToAddExpenses();
        }}
      />
    </Fragment>
  );
};

export default Home;

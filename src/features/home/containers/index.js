import React, {useEffect, useCallback, Fragment} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StatusBar,
} from 'react-native';
import {List, FAB} from 'react-native-paper';

import {testRequest, chnageActionStatus} from '../actions';
import {getTestFunctionStatus, getTestApiEndpointData} from '../selectors';
import {navigateToAddExpenses} from '../../../navigation/NavigationHelpers';
import {ScrollView} from 'react-native-gesture-handler';

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
          <Text style={{fontSize: 12}}>{data.data.category}</Text>
        </View>
        <View style={{flex: 3}}>
          <Text style={{fontSize: 16, fontWeight: 'bold'}}>
            {data.data.title}
          </Text>
          <Text style={{fontSize: 12}}>{data.data.account}</Text>
          <Text style={{fontSize: 12}}>{data.data.date}</Text>
        </View>
        <View
          style={{flex: 2, justifyContent: 'center', alignItems: 'flex-end'}}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              color: data.data.income ? '#617859' : '#f56c6c',
            }}>
            LKR {data.data.amount}
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
          {sampleObj.map((item, index) => (
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

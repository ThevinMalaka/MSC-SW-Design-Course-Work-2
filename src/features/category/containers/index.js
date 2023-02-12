import React, {useEffect, useCallback, Fragment, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {View, Text, StatusBar, useWindowDimensions} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Button} from 'react-native-paper';
import {ScrollView} from 'react-native-gesture-handler';

import {getCategoryListRequest} from '../actions';
import {getCategoryList} from '../selectors';
import {navigateToAddNewCategory} from '../../../navigation/NavigationHelpers';

const Category = () => {
  const categoryies = useSelector(state => getCategoryList(state));

  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [expensesCategoryList, setExpensesCategoryList] = useState([]);
  const [incomeCategoryList, setIncomeCategoryList] = useState([]);

  const getCategory = useCallback(
    info => {
      dispatch(getCategoryListRequest(info));
    },
    [dispatch],
  );

  navigation.addListener('focus', () => {
    getCategory();
  });

  useEffect(() => {
    getCategory();
  }, []);

  useEffect(() => {
    const expensesCategory = categoryies.filter(item => item.type === 2);
    const incomeCategory = categoryies.filter(item => item.type === 1);
    setExpensesCategoryList(expensesCategory);
    setIncomeCategoryList(incomeCategory);
  }, [categoryies]);

  const CategoryItem = ({title, type}) => {
    return (
      <View style={{flexDirection: 'row', marginLeft: 10, marginRight: 10}}>
        <View
          style={{
            flex: 1,
            alignContent: 'center',
            alignItems: 'center',
            backgroundColor: type == 'EXPENSES' ? '#ffc7c7' : '#bbecfc',
            padding: 10,
            margin: 3,
          }}>
          <Text>{title}</Text>
        </View>
      </View>
    );
  };

  return (
    <ScrollView>
      <Fragment>
        <StatusBar backgroundColor="#1565c0" barStyle="light-content" />
        <View
          style={{marginTop: 50, alignContent: 'center', alignItems: 'center'}}>
          <View style={{marginBottom: 20}}>
            <Text style={{fontWeight: 'bold', fontSize: 16}}>
              Expenses Category List
            </Text>
          </View>
          {expensesCategoryList.length != 0 &&
            expensesCategoryList.map((item, index) => {
              return (
                <CategoryItem title={item.name} key={index} type={'EXPENSES'} />
              );
            })}

          <View style={{marginBottom: 20, marginTop: 20}}>
            <Text style={{fontWeight: 'bold', fontSize: 16}}>
              Income Category List
            </Text>
          </View>
          {incomeCategoryList.length != 0 &&
            incomeCategoryList.map((item, index) => {
              return (
                <CategoryItem title={item.name} key={index} type={'INCOME'} />
              );
            })}

          <View style={{flexDirection: 'row', marginTop: 30, marginBottom: 70}}>
            <Button
              mode="contained"
              color="#1565c0"
              onPress={() => navigateToAddNewCategory()}>
              Add new category
            </Button>
          </View>
        </View>
      </Fragment>
    </ScrollView>
  );
};

export default Category;

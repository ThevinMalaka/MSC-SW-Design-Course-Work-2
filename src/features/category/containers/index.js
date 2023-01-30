import React, {useEffect, useCallback, Fragment} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {View, Text, StatusBar} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Button} from 'react-native-paper';

import {getCategoryListRequest} from '../actions';
import {} from '../selectors';
import {navigateToAddNewCategory} from '../../../navigation/NavigationHelpers';

const Category = () => {
  // const status = useSelector(state => getTestFunctionStatus(state));

  const dispatch = useDispatch();
  const navigation = useNavigation();

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

  const CategoryItem = ({title}) => {
    return (
      <View style={{flexDirection: 'row', marginLeft: 10, marginRight: 10}}>
        <View
          style={{
            flex: 1,
            alignContent: 'center',
            alignItems: 'center',
            backgroundColor: '#e3e3e3',
            padding: 10,
            margin: 3,
          }}>
          <Text>{title}</Text>
        </View>
      </View>
    );
  };

  return (
    <Fragment>
      <StatusBar backgroundColor="#1565c0" barStyle="light-content" />
      <View
        style={{marginTop: 50, alignContent: 'center', alignItems: 'center'}}>
        <CategoryItem title="Food" />
        <CategoryItem title="Social Life" />
        <CategoryItem title="Fuel" />
        <CategoryItem title="Business" />
        <CategoryItem title="Beauty" />
        <CategoryItem title="House" />
        <CategoryItem title="Gift" />
        <CategoryItem title="Insurance" />
        <CategoryItem title="Others" />

        <View style={{flexDirection: 'row', marginTop: 30}}>
          <Button
            mode="contained"
            color="#1565c0"
            onPress={() => navigateToAddNewCategory()}>
            Add new category
          </Button>
        </View>
      </View>
    </Fragment>
  );
};

export default Category;

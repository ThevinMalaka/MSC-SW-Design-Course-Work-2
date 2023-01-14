import React, {useEffect, useCallback, Fragment} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {View, Text, StatusBar} from 'react-native';
import {Button} from 'react-native-paper';

import {testRequest, chnageActionStatus} from '../actions';
import {getTestFunctionStatus, getTestApiEndpointData} from '../selectors';
import {navigateToLogin} from '../../../navigation/NavigationHelpers';

const Category = () => {
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

  const CategoryItem = ({title}) => {
    return (
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
    );
  };

  return (
    <Fragment>
      <StatusBar backgroundColor="#1565c0" barStyle="light-content" />
      <View
        style={{marginTop: 50, alignContent: 'center', alignItems: 'center'}}>
        <View style={{flexDirection: 'row', marginLeft: 10, marginRight: 10}}>
          <CategoryItem title="Food" />
          <CategoryItem title="Social Life" />
          <CategoryItem title="Fuel" />
          <CategoryItem title="Business" />
        </View>

        <View style={{flexDirection: 'row', marginLeft: 10, marginRight: 10}}>
          <CategoryItem title="Beauty" />
          <CategoryItem title="House" />
          <CategoryItem title="Gift" />
          <CategoryItem title="Insurance" />
        </View>

        <View style={{flexDirection: 'row', marginTop: 30}}>
          <Button mode="contained" color="#1565c0" onPress={() => testApi()}>
            Add new category
          </Button>
        </View>
      </View>
    </Fragment>
  );
};

export default Category;

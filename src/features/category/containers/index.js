import React, {useEffect, useCallback, Fragment} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {View, Text, StatusBar} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Button} from 'react-native-paper';

import {getCategoryListRequest} from '../actions';
import {getCategoryList} from '../selectors';
import {navigateToAddNewCategory} from '../../../navigation/NavigationHelpers';
import {ScrollView} from 'react-native-gesture-handler';

const Category = () => {
  const categoryies = useSelector(state => getCategoryList(state));

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
    <ScrollView>
      <Fragment>
        <StatusBar backgroundColor="#1565c0" barStyle="light-content" />
        <View
          style={{marginTop: 50, alignContent: 'center', alignItems: 'center'}}>
          {categoryies.length != 0 &&
            categoryies.map((item, index) => {
              return <CategoryItem title={item.name} key={index} />;
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

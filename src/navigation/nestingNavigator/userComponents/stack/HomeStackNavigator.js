import React, {useMemo} from 'react';
import {Text} from 'react-native';
import {useSelector} from 'react-redux';
import {createStackNavigator} from '@react-navigation/stack';

import ProfileAvatar from '../../../../components/Header/ProfileAvatar';
import globalStyles from '../../../../config/globalStyles';
import Home from '../../../../features/home/containers';

const HomeStack = createStackNavigator();

const HomeStackNav = props => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerMode: 'screen',
      }}>
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={({route}) => ({
          title: 'ssssss',
          headerStyle: {
            backgroundColor: '#008f8a',
          },
          headerLeft: () => <ProfileAvatar />,
          // headerRight: () => '',
          headerTitle: () => <Text style={globalStyles.header}>WELCOME</Text>,
        })}
      />
    </HomeStack.Navigator>
  );
};

export default HomeStackNav;

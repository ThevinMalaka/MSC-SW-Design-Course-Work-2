import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector} from 'react-redux';

import NavigationStack from './NavigationStack';

const RootNavigation = props => {
  const RootStack = createStackNavigator();

  return (
    <RootStack.Navigator mode="modal">
      <RootStack.Screen
        name="Main"
        component={NavigationStack}
        options={{headerShown: false}}
      />
    </RootStack.Navigator>
  );
};

export default RootNavigation;

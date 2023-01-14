import * as React from 'react';
import {View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeStackNav from './userComponents/stack/HomeStackNavigator';
import DrawerContent from './userComponents/drawer/DrawerContent';

const Drawer = createDrawerNavigator();

const DrawerNavigator = props => {
  return (
    <Drawer.Navigator drawerContent={() => <DrawerContent />} drawerType="back">
      <Drawer.Screen
        name="HomeStackNav"
        component={HomeStackNav}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;

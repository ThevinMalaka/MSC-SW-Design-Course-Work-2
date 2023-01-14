import React, {useCallback, useEffect} from 'react';
import {View, StyleSheet, TouchableOpacity, Platform} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {DrawerItem, DrawerContentScrollView} from '@react-navigation/drawer';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Drawer} from 'react-native-paper';

export default function DrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.drawerContent}>
        <View style={styles.userInfoSection}>
          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              accessibilityLabel="about-us"
              icon={({color, size}) => (
                <AntDesign name="staro" color={'#000'} size={26} />
              )}
              label="Item One"
              onPress={() => {}}
            />
            <DrawerItem
              accessibilityLabel="about-us"
              icon={({color, size}) => (
                <AntDesign name="staro" color={'#000'} size={26} />
              )}
              label="Item Two"
              onPress={() => {}}
            />
            <DrawerItem
              accessibilityLabel="about-us"
              icon={({color, size}) => (
                <AntDesign name="staro" color={'#000'} size={26} />
              )}
              label="Item Three"
              onPress={() => {}}
            />
          </Drawer.Section>
        </View>
      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    marginTop: 20,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});

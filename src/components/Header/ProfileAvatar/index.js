import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Avatar} from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';

const ProfileAvatar = props => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      accessibilityLabel="profile-avatar"
      onPress={() => navigation.openDrawer()}>
      <View
        style={{paddingLeft: 10, flexDirection: 'row', alignItems: 'center'}}>
        <AntDesign
          accessibilityLabel="icon1"
          name="menu-unfold"
          size={35}
          color={'#fff'}
        />
      </View>
    </TouchableOpacity>
  );
};

export default ProfileAvatar;

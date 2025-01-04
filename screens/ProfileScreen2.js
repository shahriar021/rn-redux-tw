import React from 'react';
import {View, Text} from 'react-native';
import {useSelector} from 'react-redux';

const ProfileScreen2 = () => {
  const profileShow = useSelector(state => state.profile.info[0]);
  return (
    <View>
      <Text>{profileShow?.person}</Text>
      <Text>{profileShow?.allowance}</Text>
    </View>
  );
};

export default ProfileScreen2;

import React from 'react';
import {View, Text, Button} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {login, logout} from '../src/redux/features/userSlice';

const UserScreen = () => {
  const isAuthenticated = useSelector(state => state.autha.isAuthenticated);
  const dispatch = useDispatch();

  return (
    <View>
      <Text>Auth: {isAuthenticated ? 'Logged In' : 'Logged Out'}</Text>
      <Button title="login" onPress={() => dispatch(login())} />
      <Button title="logout" onPress={() => dispatch(logout())} />
    </View>
  );
};

export default UserScreen;

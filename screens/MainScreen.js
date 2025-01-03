import React from 'react';
import {View, Text} from 'react-native';
import UserScreen from './UserScreen';
import {useSelector} from 'react-redux';
import ProductScreen from './ProductScreen';

const MainScreen = () => {
  const isAuthenticated = useSelector(state => state.autha.isAuthenticated);
  return (
    <View>
      {isAuthenticated && <Text>Shahriar</Text>}

      <ProductScreen />
    </View>
  );
};

export default MainScreen;

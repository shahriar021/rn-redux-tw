import React from 'react';
import {View, Text} from 'react-native';
import {Provider, useSelector} from 'react-redux';
import {store} from './src/redux/store';
import UserScreen from './screens/UserScreen';
import MainScreen from './screens/MainScreen';

const App = () => {
  
  return (
    <Provider store={store}>
      <MainScreen />
    </Provider>
  );
};

export default App;

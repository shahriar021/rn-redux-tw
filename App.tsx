import React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import MainScreen from './screens/MainScreen';
import {NavigationContainer} from '@react-navigation/native';
import {ApiProvider} from '@reduxjs/toolkit/query/react';
import {api} from './src/redux/api/apiSlice';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainScreen />
      </NavigationContainer>
    </Provider>
  );
};

export default App;

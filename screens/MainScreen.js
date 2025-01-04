import React from 'react';
import {View, Text} from 'react-native';
import {useSelector} from 'react-redux';
import ProductScreen from './ProductScreen';
import OrderScreen from './OrderScreen';
import {createStackNavigator} from '@react-navigation/stack';
import ProfileScreen2 from './ProfileScreen2';
import ProfileScreen from './ProfileScreen';
import PostLists from './PostLists';
import UserList from './UserList';
import CreateUser from './UserCreate';

const Stack = createStackNavigator();

const MainScreen = () => {
  const isAuthenticated = useSelector(state => state.autha.isAuthenticated);

  return (
    <View style={{flex: 1}}>
      {isAuthenticated && <Text>Shahriar</Text>}
      <Stack.Navigator initialRouteName="CreateUser">
        {/* <Stack.Screen name="ProductScreen" component={ProductScreen} />
        <Stack.Screen name="OrderScreen" component={OrderScreen} /> */}
        {/* <Stack.Screen name="ProfileCreate" component={ProfileScreen} />
        <Stack.Screen name="ProfileShow" component={ProfileScreen2} /> */}
        {/* <Stack.Screen name="apiScreen" component={PostLists} /> */}
        {/* <Stack.Screen name="userApiScreen" component={UserList} /> */}
        <Stack.Screen name="CreateUser" component={CreateUser} />
      </Stack.Navigator>
    </View>
  );
};

export default MainScreen;

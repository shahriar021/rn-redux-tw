import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {useGetUsersQuery} from '../src/redux/api/secondApiSlice';

const UserList = () => {
  const {data: users, error, isLoading} = useGetUsersQuery();
  return (
    <FlatList
      data={users}
      keyExtractor={item => item.id.toString()}
      renderItem={({item}) => {
        return (
          <View>
            <Text style={{fontSize: 30}}>{item.name}</Text>
            <Text style={{fontSize: 15}}>{item.email}</Text>
          </View>
        );
      }}
    />
  );
};

export default UserList;

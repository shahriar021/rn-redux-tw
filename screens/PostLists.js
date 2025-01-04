import React from 'react';
import {View, Text, FlatList, ActivityIndicator} from 'react-native';
import {useGetPostsQuery} from '../src/redux/api/apiSlice';

const PostList = () => {
  const {data: posts, error, isLoading} = useGetPostsQuery();

  if (isLoading) return <ActivityIndicator />;
  if (error) return <Text>Error fetching posts!</Text>;

  return (
    <FlatList
      data={posts}
      keyExtractor={item => item.id.toString()}
      renderItem={({item}) => (
        <View>
          <Text style={{fontSize: 20}}>{item.title}</Text>
          <Text>{item.body}</Text>
        </View>
      )}
    />
  );
};

export default PostList;

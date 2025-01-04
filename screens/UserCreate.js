import React, {useState} from 'react';
import {Button, TextInput, View, Text} from 'react-native';
import {
  useCreateUserMutation,
  useGetUsersQuery,
} from '../src/redux/api/secondApiSlice';

const CreateUser = () => {
  const [name, setName] = useState('');
  const [createUser, {isLoading, error}] = useCreateUserMutation();
  const {data: users, refetch} = useGetUsersQuery(); // To fetch users list
  const [newUser, setNewUser] = useState(null); // To store the newly created user

  const handleSubmit = async () => {
    try {
      const response = await createUser({name}).unwrap(); // Create the new user
      setNewUser(response); // Store the new user data
      refetch(); // Trigger refetch to get the updated list of users
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  if (isLoading) return <Text>Loading...</Text>;
  if (error) return <Text>Error creating user</Text>;

  return (
    <View>
      <TextInput
        value={name}
        onChangeText={setName}
        placeholder="Enter User Name"
      />
      <Button title="Create User" onPress={handleSubmit} />

      {newUser && <Text>New User Created: {newUser.name}</Text>}

      {/* Optionally, display the list of users */}
      {users && (
        <View>
          <Text>All Users:</Text>
          {users.map(user => (
            <Text key={user.id}>{user.name}</Text>
          ))}
        </View>
      )}
    </View>
  );
};

export default CreateUser;

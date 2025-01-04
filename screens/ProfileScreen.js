import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet, Button} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {saveInfo} from '../src/redux/features/profileSlice';
import {useNavigation} from '@react-navigation/core';

const ProfileScreen = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [salary, setSalary] = useState('');

  const dispatch = useDispatch();
  const newInfo = {
    person: name,
    allowance: salary,
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
      />
      <Text style={styles.label}>Salary</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your salary"
        value={salary}
        onChangeText={setSalary}
        keyboardType="numeric" // To allow only numbers for salary
      />
      <Button title="save" onPress={() => dispatch(saveInfo(newInfo))} />
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('ProfileShow')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
  },
});

export default ProfileScreen;

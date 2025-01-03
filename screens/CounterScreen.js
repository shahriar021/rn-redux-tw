import React from 'react';
import {View, Text, Button} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {decrement, increment, reset} from '../src/redux/features/counterSlice';

const CounterScreen = () => {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  return (
    <View style={{marginTop: 50, alignItems: 'center'}}>
      <Text style={{fontSize: 24}}>Count: {count}</Text>
      <Button title="Increment" onPress={() => dispatch(increment())} />
      <Button title="Decrement" onPress={() => dispatch(decrement())} />
      <Button title="reset" onPress={() => dispatch(reset())} />
    </View>
  );
};

export default CounterScreen;

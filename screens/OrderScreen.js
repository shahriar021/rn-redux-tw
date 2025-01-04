import React from 'react';
import {View, Text, FlatList, Button} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {cancelOrder} from '../src/redux/features/orderSlice';

const OrderScreen = () => {
  const orders = useSelector(state => state.order.items);
  const dispatch = useDispatch();

  return (
    <View>
      <FlatList
        data={orders}
        keyExtractor={orders.id}
        renderItem={({item}) => (
          <View style={{marginVertical: 10}}>
            <Text>
              {item.name} - ${item.total?.toString()}
            </Text>

            <Button
              title="Remove"
              onPress={() => dispatch(cancelOrder(item.id))}
            />
          </View>
        )}
      />
    </View>
  );
};

export default OrderScreen;

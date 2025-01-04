import React from 'react';
import {View, Text, FlatList, Button} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {addProduct, removeProduct} from '../src/redux/features/productSlice';
import {useNavigation} from '@react-navigation/native';
import {placeOrder} from '../src/redux/features/orderSlice';
const ProductScreen = () => {
  const products = useSelector(state => state.product.items);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const newProduct = {
    id: Math.random().toString(),
    name: 'New Product',
    price: 100,
  };
  const handleOrder = product => {
    const order = {
      id: Math.random().toString(),
      name: product.name,
      total: product.price,
    };

    dispatch(placeOrder(order));
  };
  return (
    <View>
      <Text style={{fontSize: 24, fontWeight: 'bold'}}>Product List</Text>

      <FlatList
        data={products}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={{marginVertical: 10}}>
            <View style={{display: 'flex', flexDirection: 'row'}}>
              <Text>
                {item.name} - ${item.price}
              </Text>
              <Button title="order" onPress={() => handleOrder(item)} />
            </View>

            <Button
              title="Remove"
              onPress={() => dispatch(removeProduct(item.id))}
            />
          </View>
        )}
      />

      <Button
        title="Add Product"
        onPress={() => dispatch(addProduct(newProduct))}
      />
      <Button
        title="Go to Orders"
        onPress={() => navigation.navigate('OrderScreen')}
      />
    </View>
  );
};

export default ProductScreen;

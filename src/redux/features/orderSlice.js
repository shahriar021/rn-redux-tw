import {createSlice} from '@reduxjs/toolkit';
import reducer from './counterSlice';
import {act} from 'react';

const initialState = {
  items: [],
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    placeOrder: (state, action) => {
      state.items.push(action.payload);
    },
    cancelOrder: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
  },
});

export const {placeOrder, cancelOrder} = orderSlice.actions;
export default orderSlice.reducer;

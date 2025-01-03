import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.items.push(action.payload);
    },
    removeProduct: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
  },
});

export const {addProduct, removeProduct} = productSlice.actions;
export default productSlice.reducer;

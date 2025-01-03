import {configureStore} from '@reduxjs/toolkit';
import counterReducer from './features/counterSlice';
import userReducer from './features/userSlice'; // Renamed to userReducer
import productReducer from './features/productSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    autha: userReducer, // Ensure consistency here with the key name
    product: productReducer,
  },
});

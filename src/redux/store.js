import {configureStore} from '@reduxjs/toolkit';
import counterReducer from './features/counterSlice';
import userReducer from './features/userSlice'; // Renamed to userReducer
import productReducer from './features/productSlice';
import orderReducer from './features/orderSlice';
import profileReducer from './features/profileSlice';
import {api} from './api/apiSlice';
import {secondApi} from './api/secondApiSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    autha: userReducer, // Ensure consistency here with the key name
    product: productReducer,
    order: orderReducer,
    profile: profileReducer,
    [api.reducerPath]: api.reducer,
    [secondApi.reducerPath]: secondApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(api.middleware).concat(secondApi.middleware),
});

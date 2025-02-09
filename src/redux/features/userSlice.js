import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false,
};

const userSlice = createSlice({
  // Renamed to userSlice for clarity
  name: 'autha',
  initialState,
  reducers: {
    login: state => {
      state.isAuthenticated = true;
    },
    logout: state => {
      state.isAuthenticated = false;
    },
  },
});

export const {login, logout} = userSlice.actions;
export default userSlice.reducer;

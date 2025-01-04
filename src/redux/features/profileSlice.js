import {createSlice} from '@reduxjs/toolkit';
import {act} from 'react';

const initialState = {
  info: [],
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    saveInfo: (state, action) => {
      state.info.push(action.payload);
    },
  },
});

export const {saveInfo} = profileSlice.actions;
export default profileSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: '',
};

export const headSearchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    pushValue: (state, action) => {
      state.value = action.payload;
    },
    removeValue: (state) => {
      state.value = '';
    },
  },
});

export const { pushValue, removeValue } = headSearchSlice.actions;

export default headSearchSlice.reducer;

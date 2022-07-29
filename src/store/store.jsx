import { configureStore } from '@reduxjs/toolkit';
import search from './Slices/headSearchSlice';
import cart from './Slices/cartSlice';
export const store = configureStore({
  reducer: {
    search,
    cart,
  },
});

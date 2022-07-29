import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    pushItem: (state, action) => {
      const foundItem = state.cartItems.find((el) => el.imageUrl === action.payload.imageUrl);
      if (foundItem) {
        console.log();
        state.cartItems = [...state.cartItems];
        state.totalPrice -= action.payload.price;
      } else {
        state.cartItems = [...state.cartItems, action.payload];
      }
    },
    setTotalPrice: (state, action) => {
      state.totalPrice += action.payload;
    },
    deleteItems: (state) => {
      state.cartItems = [];
      state.totalPrice = 0;
    },
    deleteCartItem: (state, action) => {
      state.cartItems = state.cartItems.filter((val) => val.imageUrl !== action.payload.imageUrl);
      state.totalPrice -= action.payload.price;
    },
  },
});

export const { pushItem, setTotalPrice, deleteItems, deleteCartItem } = cartSlice.actions;

export default cartSlice.reducer;


import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../Slices/product.slice'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
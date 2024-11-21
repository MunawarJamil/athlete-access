
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../Slices/product.slice'

export const makeStore = ()=>{
  return configureStore({
    reducer: {
      cart: cartReducer,
    },
  });

}

export default makeStore;
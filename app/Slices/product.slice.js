 
import { createSlice } from '@reduxjs/toolkit';
import { product_sec_row, products } from '../data/product-data';


const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    products: [...product_sec_row, ...products],
  },
  reducers: {
    


    addItemToCart: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1; // Or any quantity logic
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
                      

    removeItemFromCart: (state, action) => {
        const { id } = action.payload;
        // Filter out the item with the matching id
        state.items = state.items.filter((item) => item.id !== id);
      },

      updateQuantity: (state, action) => {
        const { id, quantity } = action.payload;
        if (quantity < 1) return; // Prevent invalid quantity
        const item = state.items.find((item) => item.id === id);
        if (item) {
          item.quantity = quantity;
        }
    },
    // Additional actions like removeItem, clearCart, etc., can go here
  },
});

export const { addItemToCart , updateQuantity,removeItemFromCart} = cartSlice.actions;
export default cartSlice.reducer;

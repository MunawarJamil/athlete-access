 'use client';
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addItemToCart: (state, action) => {
      state.items.push(action.payload);
    },
    removeItemFromCart: (state, action) => {
        const { id } = action.payload;
        // Filter out the item with the matching id
        state.items = state.items.filter((item) => item.id !== id);
      },

    updateQuantity: (state, action) => {
        const { id, quantity } = action.payload;
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

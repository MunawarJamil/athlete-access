import { createSlice } from "@reduxjs/toolkit";  
import { productsData } from "../data/featuredProduct";

const proteinSlice = createSlice({
    name: 'proteinCart',
 
    initialState:{
        proteinItems: [],
     availabelProtein: [...productsData]} , 

     reducers: {
        addProteinToCart: (state, action) => {
            const existingItem = state.proteinItems.find(item => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity += 1;  
            } else {
                state.proteinItems.push({ ...action.payload, quantity: 1 });
            }
        },
        removeItemFromCart: (state, action) => {
            state.proteinItems = state.proteinItems.filter(item => item.id !== action.payload.id);
        },
        updateQuantity: (state, action) => {
            const item = state.proteinItems.find(item => item.id === action.payload.id);
            if (item) {
                item.quantity = action.payload.quantity;
            }
        },
    }
})


export const { addProteinToCart, removeItemFromCart, updateQuantity } = proteinSlice.actions;

export default proteinSlice.reducer
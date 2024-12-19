import { createSlice } from "@reduxjs/toolkit";
import { trainers } from "../data/featuredProduct";

const workPlanSlice = createSlice({
    name: "workplanCart",
    initialState: {
       selectedPlans: [],
       availablePlans: [...trainers]
    },
    reducers: {
        addPlanToCart: (state, action) => {
            state.selectedPlans.push(...action.payload);  // Corrected here
        }
    }
});

export const { addPlanToCart } = workPlanSlice.actions;
export default workPlanSlice.reducer;

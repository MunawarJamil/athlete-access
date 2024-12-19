
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../Slices/product.slice'
import proteinReducer from '../Slices/protein.slice'
import workPlanReducer from "../Slices/workplan.slice"

export const makeStore = ()=>{
  return configureStore({
    reducer: {
      cart: cartReducer,
      proteinCart: proteinReducer,
      workplanCart: workPlanReducer,
    },
  });

}

export default makeStore;
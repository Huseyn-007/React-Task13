import {configureStore} from '@reduxjs/toolkit'
import counterReducer from "../src/features/counterSlice"
import calculateSlice from './features/calculateSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    
  },
});

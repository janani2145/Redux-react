import {configureStore} from "@reduxjs/toolkit";
import customerReducer from './slices/customerSlice';
import counterReducer from './slices/counterSlice';

export const store = configureStore(
    {
        devTools:true,
        reducer : {
            customers: customerReducer,
            counter : counterReducer
        }
    }
)
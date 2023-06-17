import { configureStore } from "@reduxjs/toolkit";
import { customReducer } from "./Reducers";


const store = configureStore({
    reducer : {
        user : customReducer
    }
});


export default store;
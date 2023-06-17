import { createReducer } from "@reduxjs/toolkit";

export const customReducer = createReducer({ user: {} }, {

    setUser : (state,action) => {
        state.user = action.payload;
    }

});

// src/userSlice.js
import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
   
    initialState: null, // Set the initial state for the user slice to null


    reducers: {
        addUser: (state, action) => {
            // When `addUser` is called, it replaces the entire user state with the payload.
            return action.payload;
        },
        removeUser: (state, action) => {
            // When `removeUser` is called, it sets the user state back to null.
            return null;
        },
    },
});

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
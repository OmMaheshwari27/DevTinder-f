// src/userSlice.js
import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "connections",
    initialState: null, // Set the initial state for the user slice to null
    reducers: {
        addConnections: (state, action) => {
            return action.payload;
        },
        removeConnetions: () => {
            return null;
        },
    },
});

export const { addConnections, removeConnetions } = userSlice.actions;
export default userSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isUpdating: false
};

export const articleUpdatingSlice = createSlice({
    name: 'articleUpdating',
    initialState,
    reducers: {
        toggleUpdating: (state) => {
            state.isUpdating = !state.isUpdating;
        }
    }
})

export const { toggleUpdating } = articleUpdatingSlice.actions;

export default articleUpdatingSlice.reducer;
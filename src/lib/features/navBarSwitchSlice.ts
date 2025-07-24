import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    primarySelected: true,
};

export const navBarSwitchSlice = createSlice({
    name: 'navBarSwitch',
    initialState,
    reducers: {
        toggleSwitch: (state) => {
            state.primarySelected = !state.primarySelected;
        }
    }
})

export const { toggleSwitch } = navBarSwitchSlice.actions;

export default navBarSwitchSlice.reducer;
import { LogoSize } from "@/components/atoms/MainLogo/MainLogo";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isResizing: LogoSize.Large, // Default size for the header
};

export const headerResizeSlice = createSlice({
    name: 'headerResize',
    initialState,
    reducers: {
        sizeLarge: (state) => {
            state.isResizing = LogoSize.Large;
        },
        sizeMedium: (state) => {
            state.isResizing = LogoSize.Medium;
        }
    }
})

export const { sizeLarge, sizeMedium } = headerResizeSlice.actions;

export default headerResizeSlice.reducer;
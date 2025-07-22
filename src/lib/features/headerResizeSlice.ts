import { LogoSize } from "@/components/atoms/MainLogo/MainLogo";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isResizing: LogoSize.Large, // Default size for the header
};

export const headerResizeSlice = createSlice({
    name: 'headerResize',
    initialState,
    reducers: {
        toggleResize: (state) => {
            if (state.isResizing === LogoSize.Large) {
                state.isResizing = LogoSize.Medium; // Change to medium size
            } else {
                state.isResizing = LogoSize.Large; // Change back to large size
            }
        }
    }
})

export const { toggleResize } = headerResizeSlice.actions;

export default headerResizeSlice.reducer;
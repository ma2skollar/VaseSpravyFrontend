import { LogoSize } from "@/components/atoms/MainLogo/MainLogo";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    navMenuOpen: false,
    subscribePopupOpen: false,
    headerSize: LogoSize.Large, // Default size for the header
};

export const headerSlice = createSlice({
    name: 'header',
    initialState,
    reducers: {
        resizeLarge: (state) => {
            state.headerSize = LogoSize.Large;
        },
        resizeMedium: (state) => {
            state.headerSize = LogoSize.Medium;
        },
        openNavMenu: (state) => {
            state.navMenuOpen = true;
            state.subscribePopupOpen = false;
        },
        closeNavMenu: (state) => {
            state.navMenuOpen = false;
        },
        openSubscribePopup: (state) => {
            state.subscribePopupOpen = true;
            state.navMenuOpen = false;
        },
        closeSubscribePopup: (state) => {
            state.subscribePopupOpen = false;
        }
    }
})

export const { resizeLarge, resizeMedium, openNavMenu, closeNavMenu, openSubscribePopup, closeSubscribePopup } = headerSlice.actions;

export default headerSlice.reducer;
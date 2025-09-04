import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    biasOptions: {
        liberalSelection: false,
        conservativeSelection: false,
        centerSelection: false,
    },
    orderOptions: {
        alphabetical: true,
        reverseAlphabetical: false,
        newest: false,
        oldest: false,
    },
};

export const sourcesFilterSlice = createSlice({
    name: "sourcesFilter",
    initialState,
    reducers: {
        toggleLiberal: (state) => {
            state.biasOptions.liberalSelection = !state.biasOptions.liberalSelection;
        },
        toggleConservative: (state) => {
            state.biasOptions.conservativeSelection = !state.biasOptions.conservativeSelection;
        },
        toggleCenter: (state) => {
            state.biasOptions.centerSelection = !state.biasOptions.centerSelection;
        },
        toggleAlphabeticalOrder: (state) => {
            if(state.orderOptions.alphabetical) return;
            else {
                state.orderOptions.alphabetical = true;
                state.orderOptions.reverseAlphabetical = false;
                state.orderOptions.newest = false;
                state.orderOptions.oldest = false;
            }
        },
        toggleReverseAlphabeticalOrder: (state) => {
            if(state.orderOptions.reverseAlphabetical) return;
            else {
                state.orderOptions.alphabetical = false;
                state.orderOptions.reverseAlphabetical = true;
                state.orderOptions.newest = false;
                state.orderOptions.oldest = false;
            }
        },
        toggleNewestOrder: (state) => {
            if(state.orderOptions.newest) return;
            else {
                state.orderOptions.alphabetical = false;
                state.orderOptions.reverseAlphabetical = false;
                state.orderOptions.newest = true;
                state.orderOptions.oldest = false;
            }
        },
        toggleOldestOrder: (state) => {
            if(state.orderOptions.oldest) return;
            else {
                state.orderOptions.alphabetical = false;
                state.orderOptions.reverseAlphabetical = false;
                state.orderOptions.newest = false;
                state.orderOptions.oldest = true;
            }
        },
        resetFilters: () => initialState,
    },
});

export const { toggleLiberal, toggleConservative, toggleCenter, toggleAlphabeticalOrder, toggleReverseAlphabeticalOrder, toggleNewestOrder, toggleOldestOrder, resetFilters } = sourcesFilterSlice.actions;

export default sourcesFilterSlice.reducer;

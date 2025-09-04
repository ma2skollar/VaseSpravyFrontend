import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SummarySwitchKey } from "@/types/singleArticle";

const initialState = {
    isUpdating: false,
    isDistributionDetailOpen: false,
    summarySwitch: {
        liberal: false,
        center: true,
        conservative: false,
        comparison: false,
    }
};

export const singleArticleSlice = createSlice({
    name: 'singleArticle',
    initialState,
    reducers: {
        toggleUpdating: (state) => {
            state.isUpdating = !state.isUpdating;
        },
        openDistributionDetail: (state) => {
            state.isDistributionDetailOpen = true;
        },
        closeDistributionDetail: (state) => {
            state.isDistributionDetailOpen = false;
        },
        switchSummary: (state, action: PayloadAction<{ summaryType: SummarySwitchKey }>) => {
            const selected = action.payload.summaryType;
            for (const key in state.summarySwitch) {
                state.summarySwitch[key as SummarySwitchKey] = key === selected;
            }
        },
    },
});

export const { toggleUpdating, switchSummary, openDistributionDetail, closeDistributionDetail } = singleArticleSlice.actions;
export default singleArticleSlice.reducer;

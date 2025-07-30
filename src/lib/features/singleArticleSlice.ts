import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SummarySwitchKey } from "@/types/singleArticle";

const initialState = {
    isUpdating: false,
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
        switchSummary: (state, action: PayloadAction<{ summaryType: SummarySwitchKey }>) => {
            const selected = action.payload.summaryType;
            for (const key in state.summarySwitch) {
                state.summarySwitch[key as SummarySwitchKey] = key === selected;
            }
        },
    },
});

export const { toggleUpdating, switchSummary } = singleArticleSlice.actions;
export default singleArticleSlice.reducer;

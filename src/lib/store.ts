import { configureStore } from '@reduxjs/toolkit'
import singleArticleReducer from './features/singleArticleSlice'
import headerResizeReducer from './features/headerResizeSlice'
import navBarSwitchReducer from './features/navBarSwitchSlice'

export const makeStore = () => {
    return configureStore({
        reducer: {
            singleArticleReducer,
            headerResizeReducer,
            navBarSwitchReducer,
        }
    })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
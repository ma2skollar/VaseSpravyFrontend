import { configureStore } from '@reduxjs/toolkit'
import headerReducer from './features/headerSlice'
import singleArticleReducer from './features/singleArticleSlice'
import navBarSwitchReducer from './features/navBarSwitchSlice'

export const makeStore = () => {
    return configureStore({
        reducer: {
            headerReducer,
            singleArticleReducer,
            navBarSwitchReducer,
        }
    })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
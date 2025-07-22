import { configureStore } from '@reduxjs/toolkit'
import articleUpdatingReducer from './features/articleUpdatingSlice'
import headerResizeReducer from './features/headerResizeSlice'

export const makeStore = () => {
    return configureStore({
        reducer: {
            articleUpdating: articleUpdatingReducer,
            headerResize: headerResizeReducer,
        }
    })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
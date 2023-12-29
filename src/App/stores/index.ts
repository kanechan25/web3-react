import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import reducers from './rootReducer'

const initialState = {}

export const store = configureStore({
  reducer: reducers,
  preloadedState: initialState,
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>

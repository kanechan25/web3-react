import { createSlice } from '@reduxjs/toolkit'
import { IWallet } from 'App/types'
import { RootState } from '..'
import { setConnectionType } from './actions'

const initialState: IWallet = {
  connectionType: null,
}

export const walletSlice = createSlice({
  name: 'wallet',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(setConnectionType, (state, action) => {
      state.connectionType = action.payload.connectionType
    })
  },
})

export const connectionType = (state: RootState) => state.wallet.connectionType

export default walletSlice.reducer

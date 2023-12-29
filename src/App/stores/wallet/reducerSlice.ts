import { createSlice } from '@reduxjs/toolkit'
import { IWallet } from 'App/types'
import { RootState } from '..'
import { setConnectionType, setOpenModal } from './actions'

const initialState: IWallet = {
  connectionType: null,
  isOpenModal: false,
}

export const walletSlice = createSlice({
  name: 'wallet',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(setConnectionType, (state, action) => {
      state.connectionType = action.payload.connectionType
    })
    builder.addCase(setOpenModal, (state, action) => {
      state.isOpenModal = action.payload.isOpenModal
    })
  },
})

export const connectionType = (state: RootState) => state.wallet.connectionType
export const isOpenModal = (state: RootState) => state.wallet.isOpenModal

export default walletSlice.reducer

import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { useMemo } from 'react'
import { bindActionCreators } from '@reduxjs/toolkit'
import type { RootState, AppDispatch } from 'App/stores'
import allActions from 'App/stores/rootAction'

export const useActions = () => {
  const dispatch = useDispatch()
  return useMemo(() => bindActionCreators(allActions, dispatch), [dispatch])
}

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

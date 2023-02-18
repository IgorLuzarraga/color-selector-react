import { configureStore } from '@reduxjs/toolkit';
import colorSelectorReducer from '../features/colorSelector/colorSelectorSlice'
import {loadState, saveState} from './localStorage'
import { initialState } from "../features/colorSelector/colorSelectorSlice";

const getInitialData = (initialState) => {
  const initialData = loadState()
  if (initialData === null) {
    return initialState
  } else {
    return initialData
  }
}

const initialData = getInitialData(initialState)

export const store =  configureStore({
  reducer: {
    colorSelector: colorSelectorReducer
  },
  preloadedState: initialData
})

store.subscribe( function () {
  saveState(store.getState())
})


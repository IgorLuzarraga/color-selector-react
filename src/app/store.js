import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import colorSelectorReducer from '../features/colorSelector/colorSelectorSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    colorSelector: colorSelectorReducer
  },
});

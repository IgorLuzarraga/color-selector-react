import { configureStore } from '@reduxjs/toolkit';
import colorSelectorReducer from '../features/colorSelector/colorSelectorSlice'

export const store = configureStore({
  reducer: {
    colorSelector: colorSelectorReducer
  },
});

import {createSlice} from '@reduxjs/toolkit'
import { CIRCLE_ACTIVE_NONE } from '../../types/colorSelectorTypes.js'
import { 
  ACTIVE_CIRCLE_COLOR_DEFAULT, 
  COLOR_SELECTION_NAME_NONE,
  initialColorSelection } from '../../types/colorSelectorTypes'

const initialState = {
    activeCircle: CIRCLE_ACTIVE_NONE,
    activeCircleColor: ACTIVE_CIRCLE_COLOR_DEFAULT,
    activeColorSelection: initialColorSelection,
    colorSelectionName: COLOR_SELECTION_NAME_NONE,
    colorSelectionSavedList: [],
    lastColorSelectorId: 0 
}

const colorSelectorSlice = createSlice({
    name: 'colorSelector',
    initialState,
    reducers: {
      setActiveCircle: (state, action) => {
        state.activeCircle = action.payload
      }
    }
  })

export default colorSelectorSlice.reducer
export const {
  setActiveCircle
} = colorSelectorSlice.actions

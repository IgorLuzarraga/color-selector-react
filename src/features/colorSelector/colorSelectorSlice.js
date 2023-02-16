import {createSlice} from '@reduxjs/toolkit'
import { CIRCLE_ACTIVE_NONE } from '../../types/colorSelectorTypes.js'
import { 
  ACTIVE_CIRCLE_COLOR_DEFAULT, 
  COLOR_SELECTION_NAME_NONE,
  ACS_INITIAL_STATE,
  initialColorSelection } from '../../types/colorSelectorTypes'

const initialState = {
    activeCircle: CIRCLE_ACTIVE_NONE,
    activeCircleColor: ACTIVE_CIRCLE_COLOR_DEFAULT,
    activeColorSelectionST: ACS_INITIAL_STATE,
    activeColorSelection: initialColorSelection,
    colorSelectionName: COLOR_SELECTION_NAME_NONE,
    colorSelectionSavedList: [],
    lastColorSelectionId: 0 
}

const colorSelectorSlice = createSlice({
    name: 'colorSelector',
    initialState,
    reducers: {
      setActiveCircle: (state, action) => {
        state.activeCircle = action.payload
      },
      changeActiveCircleColor: (state, action) => {
        state.activeCircleColor = action.payload
        state.activeColorSelection = 
          changeColorToActiveCircleInColorSelection(state, action.payload)
      },
      resetActiveCircle: (state) => {
        state.activeCircle = CIRCLE_ACTIVE_NONE
        state.activeCircleColor = ACTIVE_CIRCLE_COLOR_DEFAULT
      },
      changeACSstate: (state, action) => {
        state.activeColorSelectionST = action.payload
      },
      saveColorSelection: (state) => {
        state.lastColorSelectionId++
        state.colorSelectionSavedList.push(
          saveColorSelectionHelper(state)
        )
      },
      removeColorSelection: (state, action) => {
        state.colorSelectionSavedList = 
          removeColorSelectionHelper(
            state.colorSelectionSavedList, 
            action.payload
          )
      },
      restoreColorSelection: (state, action) => {
        // console.log("color selection: ", action.payload)
        state.activeColorSelection = action.payload
      },
    }
  })

const saveColorSelectionHelper = (state) => {
  return {
    colorSelection: state.activeColorSelection,
    id: state.lastColorSelectionId
  }
}

       
const removeColorSelectionHelper = (arr, id) =>
  arr.filter(item => item.id !== id)


const changeColorToActiveCircleInColorSelection = (state, color) => {
  const {activeColorSelection, activeCircle} = state
  return activeColorSelection.map(item => {
    if (item.id === activeCircle) {
      item.color = color
      return item
    } else {
      return item
    }
  })
}

export default colorSelectorSlice.reducer
export const {
  setActiveCircle,
  changeActiveCircleColor,
  resetActiveCircle,
  changeACSstate,
  removeColorSelection,
  restoreColorSelection,
  saveColorSelection
} = colorSelectorSlice.actions

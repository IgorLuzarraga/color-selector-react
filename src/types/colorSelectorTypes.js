const COLOR_SELECTED_NONE = "COLOR_SELECTED_NONE"
const ACTIVE_CIRCLE_COLOR_DEFAULT = "blue"
const COLOR_SELECTION_NAME_NONE = ""

// Active circle Types
const CIRCLE_ONE_ACTIVE = "CIRCLE_ONE_ACTIVE"
const CIRCLE_TWO_ACTIVE = "CIRCLE_TWO_ACTIVE"
const CIRCLE_THREE_ACTIVE = "CIRCLE_THREE_ACTIVE"
const CIRCLE_FOUR_ACTIVE = "CIRCLE_FOUR_ACTIVE"
const CIRCLE_FIVE_ACTIVE = "CIRCLE_FIVE_ACTIVE"
const CIRCLE_ACTIVE_NONE = "CIRCLE_ACTIVE_NONE"

// Default color for Circles
const CIRCLE_ONE_COLOR_DEFAULT = "red"
const CIRCLE_TWO_COLOR_DEFAULT = "orange"
const CIRCLE_THREE_COLOR_DEFAULT = "purple"
const CIRCLE_FOUR_COLOR_DEFAULT = "yellow"
const CIRCLE_FIVE_COLOR_DEFAULT = "black"
const CIRCLE_COLOR_DEFAULT = "white"

// Circle IDs
const CIRCLE_ONE_ID = "CIRCLE_ONE_ID"
const CIRCLE_TWO_ID = "CIRCLE_TWO_ID"
const CIRCLE_THREE_ID = "CIRCLE_THREE_ID"
const CIRCLE_FOUR_ID = "CIRCLE_FOUR_ID"
const CIRCLE_FIVE_ID = "CIRCLE_FIVE_ID"

// const initialColorSelection = [
//     {id: CIRCLE_ONE_ID, color: CIRCLE_ONE_COLOR_DEFAULT },
//     {id: CIRCLE_TWO_ID, color: CIRCLE_TWO_COLOR_DEFAULT },
//     {id: CIRCLE_THREE_ID, color: CIRCLE_THREE_COLOR_DEFAULT },
//     {id: CIRCLE_FOUR_ID, color: CIRCLE_FOUR_COLOR_DEFAULT },
//     {id: CIRCLE_FIVE_ID, color: CIRCLE_FIVE_COLOR_DEFAULT }
// ]

// Actice Color Selection (ACS) States
const ACS_INITIAL_STATE = "ACS_INITIAL_STATE"
const ACS_CLICK_ON_STATE = "ACS_CLICK_ON_STATE"
const ACS_COLOR_PICKING_STATE = "ACS_COLOR_PICKING_STATE"
const ACS_RESTORE_STATE = "ACS_RESTORE_STATE"

const initialColorSelection = [
    {id: CIRCLE_ONE_ID, color: CIRCLE_COLOR_DEFAULT },
    {id: CIRCLE_TWO_ID, color: CIRCLE_COLOR_DEFAULT },
    {id: CIRCLE_THREE_ID, color: CIRCLE_COLOR_DEFAULT },
    {id: CIRCLE_FOUR_ID, color: CIRCLE_COLOR_DEFAULT },
    {id: CIRCLE_FIVE_ID, color: CIRCLE_COLOR_DEFAULT }
]

export {
    ACTIVE_CIRCLE_COLOR_DEFAULT,
    CIRCLE_COLOR_DEFAULT,
    COLOR_SELECTION_NAME_NONE,
    CIRCLE_ONE_ACTIVE,
    CIRCLE_TWO_ACTIVE,
    CIRCLE_THREE_ACTIVE,
    CIRCLE_FOUR_ACTIVE,
    CIRCLE_FIVE_ACTIVE,
    CIRCLE_ACTIVE_NONE,
    ACS_INITIAL_STATE,
    ACS_COLOR_PICKING_STATE,
    ACS_CLICK_ON_STATE,
    ACS_RESTORE_STATE,
    initialColorSelection
}
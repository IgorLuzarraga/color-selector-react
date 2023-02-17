import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { faSquarePlus } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { setActiveCircle, changeACSstateToClickOnST } from '../../features/colorSelector/colorSelectorSlice'

import './style.css'
import { 
    ACS_CLICK_ON_STATE, 
    ACS_COLOR_PICKING_STATE, 
    ACS_INITIAL_STATE, 
    ACS_RESTORE_STATE,
    ACTIVE_CIRCLE_COLOR_DEFAULT
 } from '../../types/colorSelectorTypes';

//const ActiveColorSelection = ({pickerColor}) => {
const ActiveColorSelection = () => {
    const activeColorSelection = useSelector((state) => state.colorSelector.activeColorSelection)
    const activeCircleColor = useSelector((state) => state.colorSelector.activeCircleColor)

    return (
        <div>
            <ul 
                className='ulStyle'
            >
                {renderListItems(activeColorSelection, activeCircleColor)}
            </ul>
        </div>
    );
}


const changeIconStyle = (
    currentCircleId, 
    activeCircleId, 
    currenCircleColor, 
    activeCircleColor,
    activeColorSelectionST
    ) => {
    const {r, g, b} = activeCircleColor
    const {r2, g2, b2} = currenCircleColor

    const initialState = {
        'font-size': '25px',
        // background: CIRCLE_COLOR_DEFAULT 
        background: currenCircleColor
    }

    const clickOnStateActive = {
        'font-size': '35px',
        // bakckground: `rgb(${r}, ${g}, ${b})`
        background: ACTIVE_CIRCLE_COLOR_DEFAULT
    }

    const clickOnStateDesactive = {
        'font-size': '25px',
        // background: `rgb(${r2}, ${g2}, ${b2})`
        background: currenCircleColor
    }

    const colorPickingStateActive = {
        'font-size': '35px',
        background: `rgb(${r}, ${g}, ${b})`
        // background: activeCircleColor
    }

    const colorPickingStateDesactive = {
        'font-size': '25px',
        background: `rgb(${r2}, ${g2}, ${b2})`
    }

    const restoringState = {
        'font-size': '45px',
        // 'background-color': `rgb(${r2}, ${g2}, ${b2})`
        background:  currenCircleColor
    }

    switch (activeColorSelectionST) {
        case ACS_INITIAL_STATE:
            return initialState
        case ACS_CLICK_ON_STATE:
            return currentCircleId === activeCircleId ? clickOnStateActive : clickOnStateDesactive
        case ACS_COLOR_PICKING_STATE:
            return currentCircleId === activeCircleId ? colorPickingStateActive : colorPickingStateDesactive
        case ACS_RESTORE_STATE:
            return restoringState
        default:
            return -1
    }
   
}

const ListItem = ({circle, activeCircleColor}) => {
    const {color, id} = circle
    const dispatch = useDispatch()
    const activeCircleId = useSelector((state) => state.colorSelector.activeCircle)
    const activeColorSelectionST = useSelector((state) => state.colorSelector.activeColorSelectionST)

    return(
        <li>
            <button
                className='btnStyle'
                onClick={ () => { 
                        dispatch(setActiveCircle(id)) 
                        dispatch(changeACSstateToClickOnST())
                    }
                }
            > 
              <FontAwesomeIcon 
                icon={faSquarePlus} 
                style={changeIconStyle(
                    id, 
                    activeCircleId, 
                    color, 
                    activeCircleColor,
                    activeColorSelectionST
                    )} />
            </button>
        </li>
    )   
}

const renderListItems = (activeColorSelection, activeCircleColor) =>
    activeColorSelection.map((item, index) => <ListItem key={index} circle={item} activeCircleColor={activeCircleColor}/>)

export default ActiveColorSelection
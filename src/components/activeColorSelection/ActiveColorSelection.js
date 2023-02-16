import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { faSquarePlus } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { setActiveCircle } from '../../features/colorSelector/colorSelectorSlice'

import './style.css'

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

const changeIconStyle = (currentCircleId, activeCircleId, color, activeCircleColor) => {
    const {r, g, b} = activeCircleColor
    const {r2, g2, b2} = color

    console.log("changeIconStyle -> color: ", color)
    console.log("changeIconStyle -> currentCircleId: ", currentCircleId)
    console.log("changeIconStyle -> activeCircleId: ", activeCircleId)
    const iconActive = {
        'font-size': '35px',
        background: `rgb(${r}, ${g}, ${b})` 
    }

    const iconDesactive = {
        'font-size': '25px',
        background: `rgb(${r2}, ${g2}, ${b2})` 
    }

    // const iconDesactive = {
    //     'font-size': '25px',
    //     background: color
    // }

    return currentCircleId === activeCircleId ? iconActive : iconDesactive
}

const ListItem = ({circle, activeCircleColor}) => {
    const {color, id} = circle
    const dispatch = useDispatch()
    const activeCircleId = useSelector((state) => state.colorSelector.activeCircle)
    return(
        <li>
            <button
                className='btnStyle'
                onClick={ () => dispatch(setActiveCircle(id))}
            > 
              {/* <FontAwesomeIcon icon={faCircle} className={changeIconStyle(id, activeCircleId)} /> */}
              <FontAwesomeIcon icon={faSquarePlus} style={changeIconStyle(id, activeCircleId, color, activeCircleColor)} />
            </button>
        </li>
    )   
}

// const renderListItems = (list, pickerColor) =>
//     list.map((item, index) => <ListItem key={index} circle={item} pickerColor={pickerColor}/>)

const renderListItems = (activeColorSelection, activeCircleColor) =>
    activeColorSelection.map((item, index) => <ListItem key={index} circle={item} activeCircleColor={activeCircleColor}/>)

export default ActiveColorSelection
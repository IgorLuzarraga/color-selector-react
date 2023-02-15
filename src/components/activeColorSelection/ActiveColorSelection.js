import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { faSquarePlus } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { setActiveCircle } from '../../features/colorSelector/colorSelectorSlice'

import './style.css'

const ActiveColorSelection = ({pickerColor}) => {
    const list = useSelector((state) => state.colorSelector.activeColorSelection)
    
    return (
        <div>
            <ul 
                className='ulStyle'
            >
                {renderListItems(list, pickerColor)}
            </ul>
        </div>
    );
}

// const changeIconStyle = (currentCircleId, activeCircleId) => 
//     currentCircleId === activeCircleId ? 'iconActive' : 'iconDesactive'

const changeIconStyle = (currentCircleId, activeCircleId, color, pickerColor) => {
    const {r, g, b} = pickerColor

    const iconActive = {
        'font-size': '35px',
        background: `rgb(${r}, ${g}, ${b})` 
    }

    const iconDesactive = {
        'font-size': '25px',
        background: color
    }

    return currentCircleId === activeCircleId ? iconActive : iconDesactive
}

const ListItem = ({circle, pickerColor}) => {
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
              <FontAwesomeIcon icon={faSquarePlus} style={changeIconStyle(id, activeCircleId, color, pickerColor)} />
            </button>
        </li>
    )   
}

const renderListItems = (list, pickerColor) =>
    list.map((item, index) => <ListItem key={index} circle={item} pickerColor={pickerColor}/>)

export default ActiveColorSelection
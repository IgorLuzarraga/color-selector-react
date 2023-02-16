import React from 'react';
import { useDispatch } from 'react-redux';
// import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { faSquare } from "@fortawesome/free-regular-svg-icons";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './style.css'
import { 
    removeColorSelection,
    restoreColorSelection,
 } from '../../features/colorSelector/colorSelectorSlice';

const trashCanStyle = {
    float: 'right'
}

const SavedColorSelection = ({savedColorSelection}) => {
    const dispatch = useDispatch()
    const {colorSelection, id} = savedColorSelection
    
    return (
        <div>
            <button 
                className='btnStyle'
                onClick={ () => dispatch(removeColorSelection(id))}
            >  
              <FontAwesomeIcon icon={faTrashCan} />
            </button>

            <ul 
                className='ulStyle'
                onClick={ () => dispatch(restoreColorSelection(colorSelection))}
            >
                {renderListItems(colorSelection)}
            </ul>
        </div>
    );
}

const iconStyle = (color) => {
    const {r, g, b} = color
    return {
        'font-size': '25px',
        background: `rgb(${r}, ${g}, ${b})` 
    }
}

const ListItem = ({colorSelection}) => {
    const {id, color} = colorSelection
    return(
        <li>
            <button 
                className='btnStyle'
                // style={iconStyle(color)}
                // onClick={ () => dispatch(removeColorSelection(id))}
            >  
              {/* <FontAwesomeIcon icon={faCircle} className={changeIconStyle(id, activeCircleId)} /> */}
              {/* <FontAwesomeIcon icon={faSquare} style={changeIconStyle(id, activeCircleId, color)} /> */}
              <FontAwesomeIcon icon={faSquare} style={iconStyle(color)}/>
            </button>
        </li>
    )   
}

const renderListItems = (list) => 
    list.map((item, index) => <ListItem key={index} colorSelection={item}/>)

export default SavedColorSelection
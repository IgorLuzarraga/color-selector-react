import React from 'react';
import { useDispatch } from 'react-redux';
import { faSquare } from "@fortawesome/free-regular-svg-icons";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './style.css'
import { 
    changeACSstateToRestoreST,
    removeColorSelection,
    restoreColorSelection,
 } from '../../features/colorSelector/colorSelectorSlice';

const trashCanStyle = {
    float: 'right'
}

const SavedColorSelection = ({savedColorSelection}) => {
    const dispatch = useDispatch()
    const {colorSelection, id, name} = savedColorSelection
    
    return (
        <div>
            <div>
                {name}
                <button 
                    className='btnStyle'
                    onClick={ () => dispatch(removeColorSelection(id))}
                >  
                <FontAwesomeIcon icon={faTrashCan} />
                </button>
            </div>

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
    const {color} = colorSelection
    return(
        <li>
            <button 
                className='btnStyle'
                // style={iconStyle(color)}
                // onClick={ () => dispatch(removeColorSelection(id))}
            >  
              <FontAwesomeIcon icon={faSquare} style={iconStyle(color)}/>
            </button>
        </li>
    )   
}

const renderListItems = (list) => 
    list.map((item, index) => <ListItem key={index} colorSelection={item}/>)

export default SavedColorSelection
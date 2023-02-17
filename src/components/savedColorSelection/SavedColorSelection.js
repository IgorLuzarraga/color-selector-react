import React from 'react';
import { useDispatch } from 'react-redux';
import { faSquare } from "@fortawesome/free-regular-svg-icons";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './style.css'
import { 
    removeColorSelection,
    restoreColorSelection,
 } from '../../features/colorSelector/colorSelectorSlice';

const SavedColorSelection = ({savedColorSelection}) => {
    const dispatch = useDispatch()
    const {colorSelection, id, name} = savedColorSelection
    
    return (
        <div>
            <div>
                {name}
                <button 
                    className='trash-can-btnStyle'
                    onClick={ () => dispatch(removeColorSelection(id))}
                >  
                <FontAwesomeIcon icon={faTrashCan} className='trash-can' />
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

const savedColorStyle = (color) => {
    const {r, g, b} = color
    return {
        width: '6vh',
        height: '6vh',
        background: `rgb(${r}, ${g}, ${b})`,
        'margin-right': '5px',
        border: 'solid 2px white'
    }
}

const ListItem = ({colorSelection}) => {
    const {color} = colorSelection
    return(
        <li>
            {/* <button 
                className='saved-colors-btnStyle'
                // style={iconStyle(color)}
                // onClick={ () => dispatch(removeColorSelection(id))}
            >  
              <FontAwesomeIcon icon={faSquare} style={iconStyle(color)}/>
            </button> */}
            <button style={savedColorStyle(color)}></button>
        </li>
    )   
}

const renderListItems = (list) => 
    list.map((item, index) => <ListItem key={index} colorSelection={item}/>)

export default SavedColorSelection
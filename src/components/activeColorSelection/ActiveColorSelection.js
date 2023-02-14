import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { setActiveCircle } from '../../features/colorSelector/colorSelectorSlice'

import './style.css'


const ActiveColorSelection = () => {
    const list = useSelector((state) => state.colorSelector.activeColorSelection)
    
    return (
        <div>
            <ul 
                className='ulStyle'
            >
                {renderListItems(list)}
            </ul>
        </div>
    );
}

const changeIconStyle = (currentCircleId, activeCircleId) => 
    currentCircleId === activeCircleId ? 'iconActive' : 'iconDesactive'

    

const ListItem = ({circle}) => {
    const {color, id} = circle
    const dispatch = useDispatch()
    const activeCircleId = useSelector((state) => state.colorSelector.activeCircle)
    
    return(
        <li>
            <button
                className='btnStyle'
                onClick={ () => dispatch(setActiveCircle(id))}
            > 
              <FontAwesomeIcon icon={faCircle} className={changeIconStyle(id, activeCircleId)} />
            </button>
        </li>
    )   
}

const renderListItems = (list) =>
    list.map((item, index) => <ListItem key={index} circle={item} />)

export default ActiveColorSelection
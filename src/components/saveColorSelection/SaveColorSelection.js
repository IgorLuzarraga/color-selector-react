import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeACSstateToInitialST, saveColorSelection } from '../../features/colorSelector/colorSelectorSlice';
import { COLOR_SELECTION_NAME_NONE } from '../../types/colorSelectorTypes';
import './saveColorSelection.css'

const SaveColorSelection = () => {
    const dispatch = useDispatch()
    const colorSelectionName = useSelector((state) => state.colorSelector.colorSelectionName)

    return(
        <div>
            <button
                onClick={ () => { 
                            dispatch(saveColorSelection())
                            dispatch(changeACSstateToInitialST())
                    }
                }
                className='saveBtnStyle'
                disabled={conditionalDisabledBtn(colorSelectionName)}
            >
                +
            </button>
        </div>
    )
}

const conditionalDisabledBtn = (colorSelectionName) =>
    colorSelectionName === COLOR_SELECTION_NAME_NONE ? true : false


export default SaveColorSelection
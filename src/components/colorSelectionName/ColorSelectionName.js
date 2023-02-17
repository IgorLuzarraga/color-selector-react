import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import {setColorSelectionName} from '../../features/colorSelector/colorSelectorSlice'
import './colorSelectionName.css'

const ColorSelectionName = () => {
    const dispatch = useDispatch()
    const colorSelectionName = useSelector((state) => state.colorSelector.colorSelectionName)

    return(
        <div>
            <label 
                for="color-selection-name-id"
                className='labelStyle'
            >
                name:
                {/* {fromUnitType} */}
            </label>
            <input
                onChange={(e) => {
                        dispatch(setColorSelectionName(e.target.value))
                    }
                }
                className='inputStyle'
                type="text"
                id="color-selection-name-id"
                autoComplete="off"
                placeholder=""
                value={colorSelectionName}
                autoFocus
            />
        </div>
    )
}

export default ColorSelectionName
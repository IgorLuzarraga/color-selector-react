import React from 'react';
import ActiveColorSelection from '../activeColorSelection/ActiveColorSelection';
import ColorPicker from '../colorPicker/ColorPicker';
import ColorSelectionName from '../colorSelectionName/ColorSelectionName';
import SaveColorSelection from '../saveColorSelection/SaveColorSelection';
import ColorSelectionSavedList from '../colorSelectionSavedList/ColorSelectionSavedList';

import './colorPaletteGenerator.css'

const ColorPaletteGenerator = () => {
    return(
        <div className='col-main'>
            <div className='row-1'>
                <ActiveColorSelection />
            </div> {/* className='row-1' */}

            <div className='row-2'>
                <ColorPicker />
                <ColorSelectionName />
                <SaveColorSelection />
            </div> {/* className='row-2' */}

            <div className='row-3'>
                <ColorSelectionSavedList />
            </div> {/* className='row-3' */}
        </div> // className='col-main'
    )  
}

export default ColorPaletteGenerator
import React from 'react';
import { useDispatch } from 'react-redux';
import { resetActiveCircle, saveColorSelection } from '../../features/colorSelector/colorSelectorSlice';

const SaveColorSelection = () => {
    const dispatch = useDispatch()

    return(
        <div>
            <button
                onClick={ () => { 
                            dispatch(saveColorSelection())
                            dispatch(resetActiveCircle())
                    }
                }
            >
                +
            </button>
        </div>
    )
}

export default SaveColorSelection
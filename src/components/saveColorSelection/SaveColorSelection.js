import React from 'react';
import { useDispatch } from 'react-redux';
import { changeACSstateToInitialST, saveColorSelection } from '../../features/colorSelector/colorSelectorSlice';

const SaveColorSelection = () => {
    const dispatch = useDispatch()

    return(
        <div>
            <button
                onClick={ () => { 
                            dispatch(saveColorSelection())
                            dispatch(changeACSstateToInitialST())
                            // dispatch(resetActiveCircle())
                            // dispatch(changeACSstate(ACS_INITIAL_STATE))
                    }
                }
            >
                +
            </button>
        </div>
    )
}

export default SaveColorSelection
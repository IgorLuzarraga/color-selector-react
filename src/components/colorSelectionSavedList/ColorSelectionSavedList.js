import React from 'react';
import { useSelector } from 'react-redux';
import SavedColorSelection from '../savedColorSelection/SavedColorSelection';

const ulStyle = {
    'list-style-type': 'none',
    padding: '0',
    margin: '0'
}

const btnStyle = {
    'font-size': '24px',
    border: '0px',
    cursor: 'pointer',
    background: 'lightgrey',
    'margin-right': '1px'
}

const ColorSelectionSavedList = () => {
    const list = useSelector((state) => state.colorSelector.colorSelectionSavedList)

    return (
        <div>
            {renderSavedText(list.length)}
            <ul
                style={ulStyle}
            >
                {renderListItems(list)}
            </ul>
        </div>
    );
}

const ListItem = ({item}) => {
    return(
        <li>
           <SavedColorSelection savedColorSelection={item}/>
        </li>
    )   
}

const renderSavedText = (length) => 
    length > 0 ? <h2>Saved pallettes</h2> : <h2> </h2>

const renderListItems = (list) =>
    list.map((item, index) => <ListItem key={index} item={item}/>)

export default ColorSelectionSavedList
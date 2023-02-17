import React from 'react';
import { faPalette } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './header.css'

const Header = () => {
    return(
        <header className='header'>
            <FontAwesomeIcon 
                icon={faPalette} 
                className='palette fa-rotate-180'
            />
            <h4>Color palette generator</h4>
        </header>
    )
}

export default Header;
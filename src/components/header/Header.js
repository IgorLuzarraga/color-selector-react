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
            <h2>Color palette generator</h2>
        </header>
    )
}

export default Header;
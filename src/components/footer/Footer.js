import React from 'react';
import { faPalette } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './footer.css'

const componentStyle = {
    position: 'fixed',
    bottom: '0px',
    width: '100%',
    height: '10vh',
    display: 'flex',
    'flex-direction': 'row',
    'flex-basis': '100%',
    color: 'white',
    'text-align': 'center',
    background: 'black',
    'justify-content': 'left',
    'align-items': 'center',
    gap: '25px'
}

const Footer = () => {
    return(
        <footer style={componentStyle}>
            <FontAwesomeIcon 
                icon={faPalette} 
                className='palette fa-rotate-180'
            />
            <h4>Color palette generator</h4>
            <p>Terms of service</p>
            <p>Privacy policy</p>
        </footer>
    )
}

export default Footer;
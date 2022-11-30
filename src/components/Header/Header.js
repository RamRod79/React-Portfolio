import Navigation from '../Navigation/Navigation';
import React, { useContext } from 'react'
import './Header.css'

function Header ({ setCurrentPage }) {
    return (
        <header className='header'>
            <h1>Armando Rodriguez</h1>
            <h1><Navigation setCurrentPage={setCurrentPage} /></h1>
            
        </header>
    );
}

export default Header;
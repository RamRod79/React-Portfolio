import Navigation from '../Navigation/Navigation';
import React, { useContext } from 'react'
import './Header.css'
import space from './Assets/space.jpg'



function Header ({ setCurrentPage }) {
    return (
        <header className='header'>
            <h1>Armando Rodriguez</h1>
            <img className="space" src={space} alt="space"/>
            <h1><Navigation setCurrentPage={setCurrentPage} /></h1>
            
        </header>
    );
}

export default Header;
import React, { useContext } from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Footer() {
    return (
        <footer className='footer'>
            <nav className='nav'>
                <div className="container d-flex justify-content-center">
                        <ul className="navbar-nav me-auto ms-auto mb-3 flex-row  mb-lg-0 ">
                            <li className="navItem">
                                <a className="navItemLink" href="https://github.com/RamRod79/react-portfolio" target="_blank" ><i className="fab fa-github fa-xl"></i></a>
                            </li>
                            <li className="navItem">
                                <a className="navItemLink" href="https://www.linkedin.com/in/armando-r-rodriguez/" target="_blank" ><i className="fab fa-linkedin fa-xl"></i></a>
                            </li>
                            <li className="navItem">
                                <a className="navItemLink" href="https://twitter.com/ArmandoRod79" target="_blank" ><i className="fab fa-twitter"></i></a>
                            </li>
                        </ul>
                </div>
            </nav>
        </footer>
    );
}



export default Footer;
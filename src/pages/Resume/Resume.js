import React, { useContext } from 'react'
import "./Resume.css"
import resDoc0 from './Assets/Resume0.jpg'
import resDoc1 from './Assets/Resume1.jpg'
import resDoc2 from './Assets/Resume2.jpg'

function Resume() {
    return (
        <section className='resume'>
            <div className="card mt-4">
                <h2>My Resume </h2>                
                <div className='card-body'>
            
            Full Stack Web Developer!. Recent graduate of UCLA Extension Coding Bootcamp. 
            <p><img className="resDoc" src={resDoc0} alt="Resume"/> </p>
            <p><img className="resDoc" src={resDoc1} alt="Resume"/> </p>
            <p><img className="resDoc" src={resDoc2} alt="Resume"/> </p>
                </div>
            </div>
            

        </section>
    );
}

export default Resume;
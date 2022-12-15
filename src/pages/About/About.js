import React, { useContext } from 'react'
import "./About.css"
import circle from './Assets/circle.jpg'

function About() {
    return (
        <section className='about'>
            <div className="card mt-4">
                <h2>About Me </h2>                
                <div className='card-body'>
            <p>
            Full Stack Web Developer!. Recent graduate of UCLA Extension Coding Bootcamp. Excellent reputation for resolving problems, improving customer satisfaction, and driving overall operational improvements. Consistently saved costs while increasing efficiency and effectiveness. Eager to contribute to team success through hard work, attention to detail and excellent organizational skills. Motivated to learn, grow, and excel!!
            <img className="circle" src={circle} alt="circle"/> </p>
                </div>
            </div>
            

        </section>
    );
}

export default About;
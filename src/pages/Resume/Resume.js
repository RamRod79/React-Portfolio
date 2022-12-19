import React, { useContext } from 'react'
import "./Resume.css"
import resDoc0 from './Assets/Resume0.jpg'
import resDoc1 from './Assets/Resume1.jpg'
import resDoc2 from './Assets/Resume2.jpg'

function downloadPDF() {
    const link = document.createElement('a');
    link.href = '/path/to/your-file.pdf';
    link.download = 'your-file.pdf';
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

function Resume() {
    return (
        <section className='resume'>
            <div className="card mt-4">
                <h2>My Resume </h2>                
                <div className='card-body'>
            
            Full Stack Web Developer! UCLA Extension Coding Bootcamp GradUATE
            <a className="navItemLink" href="/Assets/Resume.pdf" download><i className="fas fa-file-pdf"></i>Download PDF</a>
            <p><img className="resDoc" src={resDoc0} alt="Resume"/> </p>
            <p><img className="resDoc" src={resDoc1} alt="Resume"/> </p>
            <p><img className="resDoc" src={resDoc2} alt="Resume"/> </p>
                </div>
            </div>
            

        </section>
    );
}

export default Resume;
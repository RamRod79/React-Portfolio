import TFTLogo from './assets/TFTLogo.jpg';
import NAGLogo from './assets/NetflixAndGrill.jpg';
import SEMILogo from './assets/SEMI.jpg';
import WDSLogo from './assets/WDS.jpg';
import PGLogo from './assets/PGLogo.jpg';
import WLogo from './assets/Weather.jpg';

import Project from '../../components/Project/Project';
import './Index.css'

function Portfolio() {
   
    const data = [
        {
            name: 'Netflix & Grill',
            description: 'A simple application which will remove the headache of how to determine the movie and restaurant for a date night or hangout with a friend. It populates a list of the top movie releases and local restaurants and allows the users to come to a consensus based upon their mutual “likes”.',
            imageUrl: NAGLogo,
            deployedUrl: 'https://joejhansen.github.io/netflix-and-grill/',
            githubUrl: 'https://github.com/joejhansen/netflix-and-grill.git'
        },
        {
            name: 'SEMI',
            description: 'Simple medical informational application - allows users to view prescriptions and obtain applicable data. After the user creates a profile or loggs in they can search the database for the desired medication.  It will populate with data like side effects, cost, and efficacy information. Links will be provided for the alternative medication and applicable data.',
            imageUrl: SEMILogo,
            deployedUrl: 'https://semi2.herokuapp.com/',
            githubUrl: 'https://github.com/RamRod79/semi2.git'
        },
        {
            name: 'Farmer To-Do (Full Stack App)',
            description: 'A simple application which allow Farmers to manage their daily tasks and improve their efficiency!',
            imageUrl: TFTLogo,
            deployedUrl: 'https://infinite-cliffs-46127.herokuapp.com/',
            githubUrl: 'https://github.com/Conklinj09/farmer-to-do',
        },
        {
            name: 'Work-DayScheduler',
            description: 'A simple application calendar application that allows a user to save events for each hour of the day. This app runs in the browser and features dynamically updated HTML and CSS powered by jQuery.',
            imageUrl: WDSLogo,
            deployedUrl: 'https://ramrod79.github.io/Work-Day-Scheduler/',
            githubUrl: 'https://github.com/RamRod79/Work-Day-Scheduler'
        },
        {
            name: 'Password Generator',
            description: 'Simple application that an employee can use to generate a random password based on selected criteria. This app runs in the browser, and features dynamically updated HTML and CSS powered by JavaScript code that I have written. The password range is a min of 8 characters and upto 128.',
            imageUrl: PGLogo,
            deployedUrl: 'https://ramrod79.github.io/password-challenge-3/',
            githubUrl: 'https://github.com/RamRod79/password-challenge-3.git'
        },
        {
            name: '5-Day Weather Forecast Dashboard',
            description: 'Using third-party APIs to access their data and functionality by making requests with specific parameters to a URL. By retrieving data from another API and using it in this weather applicaiton. I built a weather dashboard that will run in the browser and feature dynamically updated HTML and CSS.',
            imageUrl: WLogo,
            deployedUrl: 'https://ramrod79.github.io/Weather-DashBoard/',
            githubUrl: 'https://github.com/RamRod79/Weather-DashBoard',
        },
    ];

    return (
        <section className='index'>
             <div className="card mt-4">
            <h2>Portfolio</h2>

            {data.map(project => {
                return (
                    <Project
                    data={project}
                    />
                )
            })}

            </div>
        </section>
        
    );
    
}

export default Portfolio;
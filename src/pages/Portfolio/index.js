import NAGLogo from './assets/NetflixAndGrill.jpg';
import SEMILogo from './assets/SEMI.jpg';

import Project from '../../components/Project';
import './Index.css'

function Portfolio() {
   
    const data = [
        {
            name: 'Netflix & Grill',
            description: 'A simple application which will remove the headache of how to determine the movie and restaurant for a date night or hangout with a friend. It populates a list of the top movie releases and local restaurants and allows the users to come to a consensus based upon their mutual “likes”.',
            imageUrl: NAGLogo,
            deployedUrl: 'https://joejhansen.github.io/netflix-and-grill/'
        },
        {
            name: 'SEMI',
            description: 'Simple medical informational application - allows users to view prescriptions and obtain applicable data. After the user creates a profile or loggs in they can search the database for the desired medication.  It will populate with data like side effects, cost, and efficacy information. Links will be provided for the alternative medication and applicable data.',
            imageUrl: SEMILogo,
            deployedUrl: 'https://github.com/RamRod79/semi2.git'
        },
        {
            name: 'Netflix & Grill',
            description: 'A simple application which will remove the headache of how to determine the movie and restaurant for a date night or hangout with a friend. It populates a list of the top movie releases and local restaurants and allows the users to come to a consensus based upon their mutual “likes”.',
            imageUrl: NAGLogo,
            deployedUrl: 'https://joejhansen.github.io/netflix-and-grill/'
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
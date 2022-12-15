import './Project.css'

function Project ({ data }) {
    return (
        <div>
            <h2>{data.name}</h2>
            <p>{data.description}</p>
            <img className="image" src={data.imageUrl} alt={data.description}/>
            <a className='learn' href={data.deployedUrl} target="_blank" rel="noreferrer">Learn More</a>
        </div>
    );
}

export default Project;
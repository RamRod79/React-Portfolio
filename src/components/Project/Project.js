import './Project.css'

function Project ({ data }) {
    return (
        <div>
            <h2>{data.name}</h2>
            <p>{data.description}</p>
            <img className="image" src={data.imageUrl} alt={data.description}/>
            <a className='link' href={data.deployedUrl} target="_blank" rel="noreferrer">Deployed Url</a>
            <a className='link' href={data.githubUrl} target="_blank" rel="noreferrer">Github Repo</a>
        </div>
    );
}

export default Project;
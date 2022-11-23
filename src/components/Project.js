function Project ({ data }) {
    return (
        <div>
            <h2>{data.name}</h2>
            <p>{data.description}</p>
            <img src={data.imageUrl} alt={data.description}/>
            <a href={data.deployedUrl} target="_blank" rel="noreferrer">Learn More</a>
        </div>
    );
}

export default Project;
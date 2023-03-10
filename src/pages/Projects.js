import { useLoaderData } from 'react-router-dom';
import { projectsLoader } from '../loaders';

function Projects(props) {

    const projects = useLoaderData()

    return projects.map((project) => (
    <div className='projectscontainer'>
        <div>
        <h1>{project.name}</h1>
        <div className='imgcontainer'>
        <img src={project.image} />
        </div>
        </div>
        <a href={project.git}>
            <button>Github</button>
        </a>
        <a href={project.live}>
            <button>Live Site</button>
        </a>
    </div>
    ));
}

export default Projects
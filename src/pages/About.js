import { useLoaderData } from 'react-router-dom';

function About(props) {

    const about = useLoaderData()

    return <>
    <div className='aboutcontainer'>
        <div className='card'>
            <img src={about.cardshot}/>
            <h3>{about.name}</h3>
            <h4>Level: {about.level}</h4>
            <p>{about.bio}</p>
            <h4>Stats:</h4>
            <ul>
                <li>HP: {about.hp}</li>
                <li>Stamina: {about.stamina}</li>
                <li>Magic: {about.magic}</li>
                <li>Strength: {about.strength}</li>
                <li>Weakness: {about.weakness}</li>
            </ul>
        </div>
    </div>
    </>
}

export default About
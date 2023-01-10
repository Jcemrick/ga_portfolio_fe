import { useLoaderData } from 'react-router-dom';

function Home(props) {

    const home = useLoaderData()

    return <>
        <div className='homecontainer'>
            <h1>Joe's Folio</h1>
            <img src={home.headshot} alt={`Photo of ${home.name}`} />
        </div>
    </>
}

export default Home
import { createRoutesFromElements, createBrowserRouter, Route } from 'react-router-dom';
import App from './App';
import Home from './pages/Home.js';
import About from './pages/About.js';
import Projects from './pages/Projects.js';
import { aboutLoader, projectsLoader } from './loaders.js';


const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<App />}>
        <Route path="" element={<Home/>} loader={aboutLoader}/>
        <Route path="/about" element={<About/>} loader={aboutLoader} />
        <Route path="/projects" element={<Projects/>} loader={projectsLoader} />
    </Route>
));

export default router
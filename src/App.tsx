import './App.css'
import HomePage from "./pages/HomePage.tsx";
import {Routes, Route, Link} from "react-router-dom";
import AboutMe from "./pages/AboutMe.tsx";
import Resume from "./pages/Resume.tsx";
import Gallery from "./pages/Gallery.tsx";
import Random from "./pages/Random.tsx";

function App() {

    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/about-me" element={<AboutMe/>}/>
                <Route path="/gallery" element={<Gallery/>}/>
                <Route path="/resume" element={<Resume/>}/>
                <Route path="/random" element={<Random/>}></Route>
            </Routes>
            <ul>
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to="/About-me">About Me</Link></li>
                <li><Link to={"/Gallery"}>Gallery</Link></li>
                <li><Link to={"/Resume"}>Resume</Link></li>
                <li><Link to={"/Random"}>Others</Link></li>
            </ul>
        </>
    )
}

export default App

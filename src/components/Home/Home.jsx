import Box from '@mui/material/Box';

import './Home.css'

export default function Home() {
    return (
    <div className="bg-dark aboutSection">
        <Box
            height="70vh"
            className="heading"
            display="flex"
            alignItems="center"
            justifyContent="center"
        >
        <div>
            <h1>Welcome!</h1>
            <h5>My name is Theo, and I'm a software developer and theater artist from Saint Paul, Minnesota. 
                I love working with people to build both artistic and technical creations!</h5>
            <h5>Right now, React is my jam, and I'm eager to find full-stack development roles 
                in which I can grow my back-end capabilities.</h5>
        </div>
        <img src="/images/Portfolio_Headshot_Real-modified.png" className="rounded" />
        <div id="languages">
            <h3>Languages</h3>
            <ul>
                <li>Javascript</li>
                <li>C#</li>
                <li>HTML/CSS</li>
                <li>SQL</li>
            </ul>
        </div>
        <div id="languages">
            <h3>Frameworks and Libraries</h3>
            <ul>
                <li>React</li>
                <li>Redux-Saga</li>
                <li>Node</li>
                <li>Express</li>
                <li>JQuery</li>
                <li>Material UI</li>
                <li>Bootstrap</li>

            </ul>
        </div>
        <div id="languages">
            <h3>Tools</h3>
                <li>Git</li>
                <li>Postgres</li>
                <li>Bash/Zsh</li>
        </div>
        </Box>
        <Box height="10vh" className="divider" id="projects" />
    </div>
    );
}
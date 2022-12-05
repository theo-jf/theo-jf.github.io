import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import './Home.css'

const languages = ['Javascript', 'C#', 'HTML/CSS', 'SQL'];
const frameworksAndLibraries = ['React', 'Redux-Saga', 'Node', 'Express', 'JQuery', '.NET', 'EF Core', 'Material UI', 'Bootstrap'];
const tools = ['Git', 'Postgres', 'Bash/Zsh', 'Vim', 'Figma'];

export default function Home() {

    return (
    <div className="bg-dark aboutSection">
        <Box
            className="heading"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            style={{
                overflowX: "none",
                overflowY: "scroll" 
              }}
        >
            <Box display="inline" className="description" justifyContent="center">
                <Box
                    className="aboutHead"
                    display="flex"
                    flexDirection="row"
                    alignItems="center"
                    justifyContent="center">
                        <h1 className="welcome">Welcome!</h1>
                        <Box display="flex" justifyContent="right">
                            <img src="/images/Portfolio_Headshot_Real-modified.png" className="rounded" />
                        </Box>
                </Box>
            </Box>
            <Box display="inline" className="aboutInfo">
                        <h5>My name is Theo, and I'm a software developer and theater artist from Saint Paul, Minnesota. 
                            I love working with people to build both artistic and technical creations!</h5>
                        <h5>Right now, React is my jam, and I'm eager to find full-stack development roles 
                            in which I can grow my back-end capabilities.</h5>
            </Box>
        </Box>
        <div>
        <Box className="listFlex" display="flex" flexDirection="row" flexWrap="wrap" justifyContent="space-evenly">
            <Box component="div" display="flex" flexDirection="column">
                <h3>Languages</h3>
                <Box component="div" display="flex" flexDirection="column" alignItems="center">
                    <ul>
                    {languages.map((item, i) => {
                        return <li key={i}>{item}</li>
                    })}
                    </ul>
                </Box>
            </Box>
            <Box component="div" display="flex" flexDirection="column">  
                <h3 className="inline">Frameworks / Libraries</h3>
                <Box component="div" display="flex" flexDirection="column" alignItems="center"> 
                    <ul>
                    {frameworksAndLibraries.map((item, i) => {
                        return <li key={i}>{item}</li>
                    })}
                    </ul>
                </Box>
            </Box>
            <Box component="div" display="flex" flexDirection="column">  
                <h3 className="inline">Tools</h3>
                <Box component="div" display="flex" flexDirection="column" alignItems="center"> 
                    <ul>
                    {tools.map((item, i) => {
                        return <li key={i}>{item}</li>
                    })}
                    </ul>
                </Box>
            </Box>
        </Box>
        </div>
        <Box height="0vh" className="divider" id="projects"/>
        <Box height="10vh" className="divider" />
    </div>
    );
}
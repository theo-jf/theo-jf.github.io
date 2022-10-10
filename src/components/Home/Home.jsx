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
        </Box>
        <Box height="10vh" className="divider" id="projects" />
    </div>
    );
}
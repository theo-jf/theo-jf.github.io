import Box from '@mui/material/Box';
import './Contact.css';

export default function Contact() {

    return (
        <div className="bg-dark">
            <h2 className="projectsSubHeader">&#x2191; Projects &#x2191;</h2>
            <Box
            height="72vh"
            className="heading"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            >
            <h1 id="connectWithMe">Let's Connect!</h1>
            <Box
                display="flex"
                flexDirection="row">
                <a href="mailto:tjankefurman@gmail.com"><img className="emailLogo" src="/images/email.png" /></a>
                <a href="https://www.linkedin.com/in/theo-jf" target="_blank"><img className="linkedInLogo" src="/images/linkedIn2.png" /></a>
            </Box>
            </Box>
        </div>
    );
}
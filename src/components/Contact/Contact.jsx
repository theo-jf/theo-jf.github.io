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
            alignItems="center"
            justifyContent="center"
            >
            <img className="emailLogo" src="/images/email.png" />
            <img className="linkedInLogo" src="/images/linkedIn2.png" />
            </Box>
        </div>
    );
}
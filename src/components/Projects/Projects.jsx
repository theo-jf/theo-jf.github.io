import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box"
import CardContent from "@mui/material/CardContent";

import './Projects.css'

export default function Projects() {

    return (
        <>
        <div>
        <h2 className="projectsHeader bg-dark">&#x2193; Projects &#x2193;</h2>
        <h2 className="aboutHeader bg-white">&#x2191; About &#x2191;</h2>
        <Box height="10vh" className="divider" />
        <Grid style={{overflow: "auto"}} justifyContent="space-evenly" height="75vh" container rowSpacing={0} columnSpacing={10}>
            <Grid item>
                <CardContent>
                    <h2>Book Snoop</h2>
                    <p>TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT Text TExt</p>
                </CardContent>
            </Grid>
            <Grid item>
                <CardContent>
                    <h2>Prime Group Project</h2>
                    <p>More details coming soon!</p>
                </CardContent>
            </Grid>
            <Grid item>
                <CardContent>
                    <h2>Cat Gallery</h2>
                    <p>Look at pictures of my cats!</p>
                    <p id="catGallery">Visit on GitHub</p>
                    <p>Tech used:</p>
                </CardContent>
            </Grid>
            <Grid item>
                <CardContent>
                    <h2>Feedback Form</h2>
                    <p>Stuff</p>
                    <p id="feedbackForm">Visit on GitHub</p>
                    <p>Tech used:</p>
                </CardContent>
            </Grid>
            <Grid item>
                <CardContent>
                    <h2>JQuery Fullstack Todo List</h2>
                    <p>TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT</p>
                </CardContent>
            </Grid>
            <Grid item>
                <CardContent>
                    <h2>JQuery Server Calculator</h2>
                    <p>TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT</p>
                </CardContent>
            </Grid>
        </Grid>
        <h2 className="contactHeader">&#x2193; Contact &#x2193;</h2>
        </div>
        </>
    );
}
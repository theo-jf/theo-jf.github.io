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
        <Grid style={{overflow: "auto"}} justifyContent="space-evenly" height="75vh" container spacing={1}>
            <Grid item>
                <CardContent>
                    <h2>Thing</h2>
                    <p>TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT</p>
                </CardContent>
            </Grid>
            <Grid item>
                <CardContent>
                    <h2>Thing</h2>
                    <p>TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT</p>
                </CardContent>
            </Grid>
            <Grid item>
                <CardContent>
                    <h2>Thing</h2>
                    <p>TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT</p>
                </CardContent>
            </Grid>
            <Grid item>
                <CardContent>
                    <h2>Thing</h2>
                    <p>TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT</p>
                </CardContent>
            </Grid>
            <Grid item>
                <CardContent>
                    <h2>Thing</h2>
                    <p>TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT</p>
                </CardContent>
            </Grid>
            <Grid item>
                <CardContent>
                    <h2>Thing</h2>
                    <p>TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT</p>
                </CardContent>
            </Grid>
        </Grid>
        <h2 className="contactHeader">&#x2193; Contact &#x2193;</h2>
        </div>
        </>
    );
}
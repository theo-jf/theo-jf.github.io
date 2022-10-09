import Grid from "@mui/material/Grid";
import CardContent from "@mui/material/CardContent";

import './Projects.css'

export default function Projects() {

    return (
        <Grid justifyContent="space-evenly" height="100vh" container spacing={1}>
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
    );
}
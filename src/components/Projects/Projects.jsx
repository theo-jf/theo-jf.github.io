import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box"
import CardContent from "@mui/material/CardContent";

import './Projects.css'

const projectData = [
                    {
                        title: 'Book Snoop',
                        description: `Prime solo project. Find an edition of a book using the search functionality, 
                                      then save it to your library.
                                      Book Snoop tracks location and condition acquisition data, 
                                      and presents it to other users searching for the same book`, 
                        tech: 'React, Redux-Saga, JavaScript, Node, Express, Google Maps Places API, Open Library API, Cloudinary, HTML/CSS, Material UI, PostgreSQL, Node-Postgres',
                        link: 'https://github.com/theo-jf/book_snoop',
                        img: '/images/projectWireframes/Solo_Project/Book_Snoop_Screenshot5.png'
                    },
                    {
                        title: 'Levelrie',
                        description: `Tinder for outfits! Group-made investor prototype created for client. Create an account, swipe right on an outfit to save it to your favorites or left to reject it. 
                                      Users can search and delete from their favorites, globally search all admin-registered outfits and items, and add items to their cart from both views.`, 
                        tech: 'React, Redux-Saga, JavaScript, Node, Express, Passport, Cloudinary, HTML/CSS, Material UI, PostgreSQL, Node-Postgres, React-Slick, React-Tinder-Card',
                        link: 'https://github.com/theo-jf/Levelrie',
                        img: '/images/projectWireframes/Levelrie/levelrie_ss.png'
                    },
                    {
                        title: 'Cat Gallery',
                        description: `Look at pictures of my cats on my first full-stack react app! 
                                      Like your favorites, delete pictures, and upload your own for display.`, 
                        tech: 'React, JavaScript, PostgreSQL, HTML/CSS, Material UI, Node-Postgres, Express',
                        link: 'https://github.com/theo-jf/weekend-react-gallery',
                        img: '/images/projectWireframes/Cat_Gallery/React_Gallery_Snapshot.png'
                    },
                    {
                        title: 'Feedback Form',
                        description: `A four question feedback from. Visit the '/admin' route to view all submissions, flag them, or delete them.` , 
                        tech: 'React, Redux, JavaScript, PostgreSQL, HTML/CSS, Material UI, Node-Postgres, Express',
                        link: 'https://github.com/theo-jf/weekend-redux-feedback-loop',
                        img: '/images/projectWireframes/Feedback/Feedback_loop.png'
                    },
                    {
                        title: 'JQuery Fullstack Todo List',
                        description: `A simple todo list, and my first fully full-stack project.
                                      Add tasks, reorder them, delete them, and mark them as complete.`, 
                        tech: 'JQuery, Javascript, HTML/CSS, Express, Node-Postgres',
                        link: 'https://github.com/theo-jf/weekend-sql-to-do-list',
                        img: '/images/projectWireframes/Todo_List/To-do_list_screenshot.png'
                    },
                    {
                        title: 'JQuery Server Calculator',
                        description: `A calculator with a server-side brain. Enter a calculation like you normally would,
                                      and click a calculation in the history to re-enter it.`, 
                        tech: 'JQuery, Javascript, HTML/CSS, AJAX',
                        link: 'https://github.com/theo-jf/weekend-jquery-server-calculator',
                        img: '/images/projectWireframes/Calculator/calculator-2.png'
                    },
]

export default function Projects() {

    return (
        <>
        <div id="projects">
        <h2 className="projectsHeader bg-dark">&#x2193; Projects &#x2193;</h2>
        <h2 className="aboutHeader bg-white">&#x2191; About &#x2191;</h2>
        <Box height="8vh" className="divider transparent" />
        <Grid className="projectSection" style={{overflow: "auto"}} justifyContent="space-evenly" height="75vh" container rowSpacing={5} columnSpacing={5}>
            {projectData.map((project, i) => (
                <Grid key={i} item xs={12} md={6} lg={4}>
                    <CardContent className="projectContent">
                        <h2 className="projectTitle">{project.title}</h2>
                        <p>{project.description}</p>
                        <p>{project.tech != '' ? `Technology used: ${project.tech}` : null}</p>
                        <Grid container justifyContent="center" className="imgWrapper"
                        >
                            {(i === 0 || i === 1 || i === 3 || i === 4) ? <div className="hoverContainer">
                                                    <a href={project.link} target="_blank">
                                                        <img className="projectImg" src={project.img}></img>
                                                    </a>
                                                    </div>
                                                : <div className="hoverContainer">
                                                    <a href={project.link} target="_blank">
                                                        <img className="projectImg imgToCenter" src={project.img}></img>
                                                    </a>
                                                    </div>}                                                                       
                        </Grid>
                    </CardContent>
                </Grid>
            ))}
        </Grid>
        <Box height="2vh" className="divider" />
        <h2 className="contactHeader">&#x2193; Contact &#x2193;</h2>
        </div>
        </>
    );
}
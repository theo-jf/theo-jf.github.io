import { useState, useEffect, useCallback } from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Box from '@mui/material/Box';

// component imports
import Home from '../Home/Home';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';

// Navigation / header
function App() {

  const [homeActive, setHomeActive] = useState(true);
  const [projectsActive, setProjectsActive] = useState(false);
  const [contactActive, setContactActive] = useState(false); 

  const [y, setY] = useState(window.scrollY);

  const handleNavigation = useCallback(
    e => {
      const window = e.currentTarget;
      // if (y > window.scrollY) {
      //   console.log(y);
      // } else if (y < window.scrollY) {
      //   console.log(y);
      // }
      setY(window.scrollY);

      if (y > 290 && y < 1100) {
        console.log('Inside projects section')
        // Highlight projects menu button
        setProjectsActive(true);
        // Un highlight other buttons
        setHomeActive(false);
        setContactActive(false);
      }

      if (y <= 290) {
        console.log('Inside home/about section');
        setHomeActive(true);
        setProjectsActive(false);
        setContactActive(false);
      }

      if (y >= 1100) {
        console.log('Inside contact section');
        setContactActive(true);
        setHomeActive(false);
        setProjectsActive(false);
      }

    }, [y]
  );

  useEffect(() => {
    setY(window.scrollY);
    window.addEventListener("scroll", handleNavigation);

    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]);


  return (
    <>
    <Box height="0vh" className="divider" id="about" />
    <Navbar collapseOnSelect sticky="top" expand="lg" bg="dark" variant="dark">
      <Container fluid>
        <Navbar.Brand href="#home">Theo Janke-Furman</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">  
          </Nav>
          <Nav>
            <Nav.Item>
              <Nav.Link active={homeActive} href="#about">About</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link active={projectsActive} href="#projects">Projects</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link active={contactActive} href="#contact">Contact Me</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Home />
    {/* <Box height="0vh" className="divider" id="projects" /> */}
      <Projects />
    <Box height="0vh" className="divider" id="contact" />
      <Contact />
    <Box height="0vh" className="divider" />
    <footer className="bg-light">
      <div id="center">
      </div>
      <h5 className="text-muted updated">Updated October, 2022</h5>
    </footer>
    </>
  );
}

export default App;

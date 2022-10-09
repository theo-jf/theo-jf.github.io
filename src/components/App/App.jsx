import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Scroll from 'react-scroll';
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
  return (
    <>
    <Navbar collapseOnSelect sticky="top" expand="lg" bg="dark" variant="dark">
      <Container fluid>
        <Navbar.Brand href="#home">Theo Janke-Furman</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">  
          </Nav>
          <Nav>
            <Nav.Item>
              <Nav.Link onSelect={() => Scroll.scrollTo('about', {
                                    spy: true,
                                    smooth: true,
                                    // offset: -70,
                                    duration: 500,
                                  })} 
                        href="#about">About</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link onSelect={() => Scroll.scrollTo('projects', {
                                    spy: true,
                                    smooth: true,
                                    // offset: -70,
                                    duration: 500,
                                  })} 
                        href="#projects">Projects</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link onSelect={() => Scroll.scrollTo('contact', {
                                    spy: true,
                                    smooth: true,
                                    // offset: -70,
                                    duration: 500,
                                  })} 
                        href="#contact">Contact Me</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Box height="5vh" className="divider" id="about" />
      <Home />
    <Box height="5vh" className="divider" id="projects" />
      <Projects />
    <Box height="5vh" className="divider" id="contact" />
      <Contact />
    <Box height="5vh" className="divider" />
    <footer className="bg-light">
      <div id="center">
        <div className="footer-block">
        </div>
      </div>
      <h5 className="text-muted updated">Updated October, 2022</h5>
    </footer>
    </>
  );
}

export default App;

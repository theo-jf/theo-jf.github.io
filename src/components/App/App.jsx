import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Scroll from 'react-scroll';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Box from '@mui/material/Box';

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
                                    smooth: true,
                                    offset: -70,
                                    duration: 500,
                                  })} 
                        href="#about">About</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link onSelect={() => Scroll.scrollTo('projects', {
                                    smooth: true,
                                    offset: -70,
                                    duration: 500,
                                  })} 
                        href="#projects">Projects</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link onSelect={() => Scroll.scrollTo('contact', {
                                    smooth: true,
                                    offset: -70,
                                    duration: 500,
                                  })} 
                        href="#contact">Contact Me</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      <Box height="5vh" className="divider" id="about" />
        {/* about component */}
      <Box height="5vh" className="divider" id="projects" />
        {/* projects component */}
      <Box height="5vh" className="divider" id="contact" />
        {/* contact component */}
    </>
  );
}

export default App;

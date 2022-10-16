import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import './Header.css'


function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand className='fw-semibold fs-4 brandName'>Intel Code</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto navItem">
            
            <NavLink className='navItem' to="/topics">Topics</NavLink>
            <NavLink className='navItem' to="/statistics">Statistics</NavLink>
            <NavLink className='navItem' to="/blog">Blog</NavLink>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  );
}

export default Header;
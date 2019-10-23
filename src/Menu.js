import React from 'react';
import {Link} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from '../src/images/benchup-logo.png';

function Menu() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Nav>
                <Navbar.Brand href="/home"><img src={logo} alt="Logo" height="50" width="50"/></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                </Nav>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        {/* <Nav.Link href="projets"><Link to="/">Home</Link></Nav.Link> */}
                        {/* <Nav.Link href="staffing"><Link to="/newProject">Add project</Link></Nav.Link> */}
                        <Nav.Link href="digicampiste"><Link to="/digicampiste">Digicampistes</Link></Nav.Link>
                        <Nav.Link href="projet"><Link to="/projet">Projets</Link></Nav.Link>
                        <Nav.Link href="contributeur"><Link to="/contributeur">Contributeurs</Link></Nav.Link>
                        </Nav>
                        <Nav>
                        <Nav.Link href="digicampiste"><Link to="/logout">Se deconnecter</Link></Nav.Link>
                        </Nav>
                </Navbar.Collapse>
            </Navbar>
    </div>
    
  );
  
}

export default Menu

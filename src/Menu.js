import React from 'react';
import {Link} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';



function Menu() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Navbar.Brand href="/home">Benchup</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        {/* <Nav.Link href="projets"><Link to="/">Home</Link></Nav.Link> */}
                        <Nav.Link href="staffing"><Link to="/staffing">Staffing</Link></Nav.Link>
                        {/* <Nav.Link href="staffing"><Link to="/newProject">Add project</Link></Nav.Link> */}
                        <Nav.Link href="digicampiste"><Link to="/digicampiste">Digicampiste</Link></Nav.Link>
                        <Nav.Link href="digicampiste"><Link to="/logout">Logout</Link></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
    </div>
  );
}

export default Menu

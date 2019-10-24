import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from '../src/images/benchup-logo.png';

function Menu() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Navbar.Collapse className="justify-content-right">
          <Navbar.Brand href="/home"><img src={logo} alt="Logo" height="50" width="50" /></Navbar.Brand>
        </Navbar.Collapse>
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-center">
          {/* <Nav.Link href="projets"><Link to="/">Home</Link></Nav.Link> */}
          {/* <Nav.Link href="staffing"><Link to="/newProject">Add project</Link></Nav.Link> */}
          <Nav.Item><Nav.Link href="digicampiste"><Link to="/digicampiste">Digicampistes</Link></Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="projet"><Link to="/projet">Projets</Link></Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="contributeur"><Link to="/contributeur">Contributeurs</Link></Nav.Link></Nav.Item>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          <Nav.Link href="digicampiste"><Link to="/logout">Se deconnecter</Link></Nav.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>

  );

}

export default Menu

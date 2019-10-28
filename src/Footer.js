import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from '../src/images/cap_logo.png';
import logoTwitter from '../src/images/twitter.svg';
import logoFacebook from '../src/images/facebook.svg';
import logoYoutube from '../src/images/youtube.svg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Navbar.Collapse className="justify-content-left">
        <Navbar.Brand href="/home"><img src={logo} alt="Logo" height="35" width="90" /></Navbar.Brand>
        <label style={{ "font-size": "small" }}>© 2019 Capgemini MA</label>
      </Navbar.Collapse>
      <Navbar.Collapse className="justify-content-end">
        <img src={logoTwitter} alt="Twitter" height="20" width="20" href=""/>
        <img src={logoFacebook} alt="Facebook" height="20" width="20" href=""/>
        <img src={logoYoutube} alt="Youtube" height="20" width="20" href=""/>
        <a href="" style={{ "font-size": "small" }}>&nbsp;&nbsp;CAPGEMINI</a>&nbsp;|&nbsp;<a href="" style={{ "font-size": "small" }}>MENTIONS LEGALES</a>&nbsp;|&nbsp;<a href="" style={{ "font-size": "small" }}>COOKIES</a>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Footer

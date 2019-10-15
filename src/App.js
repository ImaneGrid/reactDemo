import React from 'react';
import logo from './logo.svg';
import './App.css';
import Projets from './modules/project/index';
import Staffing from './modules/project/stuffingForm';
import CreateForm from './modules/project/createForm';
import Digicampiste from './modules/digicampiste/index';
import {Route} from 'react-router-dom';
import {Link} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {Switch} from 'react-router-dom';



function App() {
  return (
    <div className="App">
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="/">Benchup</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      {/* <Nav.Link href="projets"><Link to="/">Home</Link></Nav.Link> */}
      <Nav.Link href="staffing"><Link to="/staffing">Staffing</Link></Nav.Link>
      {/* <Nav.Link href="staffing"><Link to="/newProject">Add project</Link></Nav.Link> */}
      <Nav.Link href="digicampiste"><Link to="/digicampiste">Digicampiste</Link></Nav.Link>
    </Nav>
    
  </Navbar.Collapse>
</Navbar>
     <Switch>
      <Route exact path="/staffing" component={Staffing}/>
      <Route exact path="/" component={Projets}/>
      <Route exact path="/newProject" component={CreateForm} />
      <Route exact path="/digicampiste" component={Digicampiste} />
      <Route exact path="*" component={()=>"404 NOT FOUND"}/>
      </Switch>
    </div>
  );
}

export default App;

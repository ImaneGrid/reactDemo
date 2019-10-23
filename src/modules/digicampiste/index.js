import React from 'react';
import Button from 'react-bootstrap/Button';
import Menu from '../../Menu';
import Footer from '../../Footer';
import {Redirect} from 'react-router-dom';
import background from '../../../src/images/background.png';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'


class ListeDigicampiste extends React.Component {
  constructor(props) {
    super(props);
    const token=localStorage.getItem("token")
    let loggedIn = true
    if(token == null){
        loggedIn = false
    }
   
    
    this.state = {
      digicampistes: [
        { id: 1, name: 'Wasif', age: 21, email: 'wasif@email.com' },
        { id: 2, name: 'Ali', age: 19, email: 'ali@email.com' },
        { id: 3, name: 'Saad', age: 16, email: 'saad@email.com' },
        { id: 4, name: 'Asad', age: 25, email: 'asad@email.com' },
        ],
        loggedIn
      
    }
  }
  componentDidMount() {
    fetch('http://localhost:3000/Digicampiste')
    .then(res=>res.json())
    .then((data)=>{
      this.setState({digicampistes:data})
      console.log(this.state.projects)
    })
    .catch(console.log)
  }



 

  render() {
    if(this.state.loggedIn == false){
      return <Redirect to="/" />
    }
      return (
        <div style={{backgroundImage: `url(${background})`}}>
          <Menu/>
        <h3 align="left">Filtre de recherche</h3>
        <div>

</div>
          <div>
            <table className=" table striped bordered hover" size="sm">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Nom</th>
                  <th>Prenom</th>
                  <th>PU</th>
                  <th>Site</th>
                  <th>Statut</th>
                  <th>Contexte</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {
                  this.state.digicampistes.map((digicampiste, key) => (
                    <tr key={key}>
                      <td>{digicampiste.id}</td>
                      <td>{digicampiste.nomDigi}</td>
                      <td>{digicampiste.prenomDigi}</td>
                      <td>{digicampiste.pU}</td>
                      <td>{digicampiste.site}</td>
                      <td>{digicampiste.staut}</td>
                      <td>{digicampiste.contexte}</td>
                      <td><Button  className="btn btn-primary" name="btnUpdate">Update</Button></td>
                      <td><Button  className="btn btn-danger" name="btnDelete">Delete</Button></td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
          <div>
            <Button onClick={this.toggleAddForm} className="btn btn-success">Ajouter un Digicampiste</Button>
          </div>
          <Footer/> 
        </div>
      );
    }
  

}

export default ListeDigicampiste
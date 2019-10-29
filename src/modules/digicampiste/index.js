import React from 'react'
import Button from 'react-bootstrap/Button'
import Menu from '../../Menu'
import {Redirect} from 'react-router-dom'
import FiltreRechercheDigi from './filtreRechercheDigi'
import Table from 'react-bootstrap/Table'

class ListeDigicampiste extends React.Component {
  constructor(props) {
    super(props);
    const token=localStorage.getItem("token")
    let loggedIn = true
    if(token == null){
        loggedIn = false
    }
   
    
    this.state = {
      digicampistes: [],
        loggedIn
      
    }
  }
  componentDidMount() {
    fetch('http://localhost:3000/Digicampiste')
    .then(res=>res.json())
    .then((data)=>{
      this.setState({digicampistes:data})
     
    })
    .catch(console.log)
  }

  digicampisteFiltrer=(newListe)=>{
    this.setState({digicampistes:newListe});

  }

 

  render() {
    if(this.state.loggedIn == false){
      return <Redirect to="/" />
    }
      return (
        <div>
          <Menu/>
          <FiltreRechercheDigi Filtrage={this.digicampisteFiltrer}/>
          <div style={{marginLeft:"3%",marginRight:"3%"}}>
            <Table hover size="bg">
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
                  <th>Actions</th>
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
                      <td><Button style={{ borderRadius: 19}}  className="btn btn-success"  size="sm" name="détails"><i className="fa fa-search-plus"></i></Button></td>
                     <td><Button style={{ borderRadius: 19}} className="btn btn-primary" name="btnUpdate"><i className="fa fa-edit"> </i></Button></td>
                      <td><Button style={{ borderRadius: 19}} className="btn btn-danger" name="btnDelete"><i className="fa fa-trash"> </i></Button></td>
                    </tr>
                  ))
                }
              </tbody>
            </Table>
          </div>
          <div>
            <Button onClick={this.toggleAddForm} className="btn btn-success">Ajouter un nouveau Digicampiste</Button>
          </div>

        </div>
      );
    }
  

}

export default ListeDigicampiste
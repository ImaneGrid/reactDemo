import React from 'react';
import Button from 'react-bootstrap/Button';
import Menu from '../../Menu';
import Footer from '../../Footer';
import { Redirect } from 'react-router-dom';
import background from '../../../src/images/background.png';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import FiltreRecherche from './filtreRecherche';
import Table from 'react-bootstrap/Table';
import UpdateForm from './updateForm';
import CreateForm from './createForm';
import './style.css';


class ListeDigicampiste extends React.Component {
  constructor(props) {
    super(props);
    const token = localStorage.getItem("token")
    let loggedIn = true
    if (token == null) {
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
      .then(res => res.json())
      .then((data) => {
        this.setState({ digicampistes: data })
        console.log(this.state.projects)
      })
      .catch(console.log)
  }





  render() {
    if (this.state.loggedIn == false) {
      return <Redirect to="/" />
    }
    return (
      <div style={{ backgroundImage: `url(${background})` }}>
        <Menu />
        <FiltreRecherche Filtrage={this.projetsFiltrer} />
        <div style={{ marginLeft: "3%", marginRight: "3%" }}>
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
                    <td>{digicampiste.statut}</td>
                    <td>{digicampiste.contexte}</td>
                    <td><Button style={{ borderRadius: 19 }} className="btn btn-success" size="sm" name="détails"><i className="fa fa-search-plus"> Détails</i></Button></td>
                    <td><Button style={{ borderRadius: 19 }} onClick={() => this.toggleUpdateForm(digicampiste.id)} className="btn btn-primary" size="sm" name="btnUpdate"><i className="fa fa-edit"> Modifier</i></Button></td>
                    <td><Button style={{ borderRadius: 19 }} onClick={this.onDelete} value={this.state.digicampistes.indexOf(digicampiste)} className="btn btn-danger" size="sm" name="btnDelete"><i className="fa fa-trash"> Supprimer</i></Button></td>

                  </tr>
                ))
              }
            </tbody>
          </Table>
        </div>
        <div>
          <Button onClick={this.toggleAddForm} className="btn btn-success">Ajouter un digicampiste</Button>
        </div>
        <Footer />
      </div>
    );
  }


}

export default ListeDigicampiste
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


class ListeContributeur extends React.Component {
  constructor(props) {
    super(props);
    const token = localStorage.getItem("token")
    let loggedIn = true
    if (token == null) {
      loggedIn = false
    }


    this.state = {
      contributeurs: [
        { id: 1, name: 'Wasif', age: 21, email: 'wasif@email.com' },
        { id: 2, name: 'Ali', age: 19, email: 'ali@email.com' },
        { id: 3, name: 'Saad', age: 16, email: 'saad@email.com' },
        { id: 4, name: 'Asad', age: 25, email: 'asad@email.com' },
      ],
      loggedIn

    }
  }
  componentDidMount() {
    fetch('http://localhost:3000/Contributeur')
      .then(res => res.json())
      .then((data) => {
        this.setState({ contributeurs: data })
        console.log(this.state.contributeurs)
      })
      .catch(console.log)
  }





  render() {
    if (this.state.loggedIn == false) {
      return <Redirect to="/" />
    }
    return (
      <div style={{ backgroundImage: `url(${background})` }}>
        <Menu/>
        <FiltreRecherche Filtrage={this.contributeursFiltrer} />
        <div style={{ marginLeft: "3%", marginRight: "3%" }}>
          <Table hover size="bg">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nom</th>
                <th>Prenom</th>
                <th>Projets</th>
                <th>Contribution</th>
                <th>Valeur</th>
                <th>Duree</th>
                <th>Date debut</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
            {
                this.state.contributeurs.map((contributeur, key) => (
                  <tr key={key}>
                    <td>{contributeur.id}</td>
                    <td>{contributeur.nomContrib}</td>
                    <td>{contributeur.prenomContrib}</td>
                    <td>test</td>
                    <td>{contributeur.contribution}</td>
                  </tr>
                ))
              }
            </tbody>
          </Table>
        </div>
        <Footer/>
      </div>
    );
  }


}

export default ListeContributeur
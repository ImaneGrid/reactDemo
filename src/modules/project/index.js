import React from 'react'
import Button from 'react-bootstrap/Button'
import UpdateForm from './updateForm'
import CreateForm from './createForm'
import Menu from '../../Menu';
import {Redirect} from 'react-router-dom'


class ListeProduit extends React.Component {
  constructor(props) {
    super(props);
    const token=localStorage.getItem("token");
    let loggedin=true
    if(token==null){
        loggedin=false
    }
   
    this.state = {
      projects: [
        /* { id: 1, Libelle: 'BlockSplyChain', Description: "Mise en place d'application Supply Chain en utilisant le blockchain", Sponsor: 'Experts Community' },
        { id: 2, Libelle: 'ChatBot', Description: "Mise en place d'un ChatBot ", Sponsor: 'Global Talent Unit' },
        { id: 3, Libelle: 'Interactive Skillz Matrix', Description: "Application de gestion des compétences et certification des collaborateurs", Sponsor: 'Delivery' },
        { id: 4, Libelle: 'iVisitCap', Description: "Mise en place d'une application de suivi d'information sur la visite client en utilisant des estimotes", Sponsor: 'Global Talent Unit' },
         */],
      valTest: { id: 1, name: 'Wasif', age: 21, email: 'wasif@email.com' },
      updatingProject: false,
      val: null,
      addingProject: false,
      loggedin
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/Projet')
    .then(res=>res.json())
    .then((data)=>{
      this.setState({projects:data})
      console.log(this.state.projects)
    })
    .catch(console.log)
  }

  componentWillUnmount() {
    console.log("This component will not exist anymore");
  }

  onDelete = (event) => {
    const ind = event.target.value;
    var newListe = this.state.projects.slice();
    newListe.splice(ind, 1);
    this.setState({ projects: newListe });

  }

  toggleAddForm = () => {
    this.setState({
      addingProject:
        (this.state.addingProject ? false : true)
    });
  }

  toggleUpdateForm = (id) => {
   
    this.setState({
      updatingProject:
        (this.state.updatingProject ? false : true),
        
        
    });
   
     for(var i=0; i<this.state.projects.length;i++){
       if(this.state.projects[i].id == id){
         this.setState({val:this.state.projects[i]});
       }
     }

  }

  onUpdate = (item) => {
    console.log("Updating project: ", item);

    const newProjects = this.state.projects.map(p =>
      p.id === item.id
        ? item
        : p
    );

    this.setState({ projects: newProjects });
    this.toggleUpdateForm();
  }


  onAddItem = (item) => {
    /*console.log("Adding project: ", item);*/

    //const newProjects = {...this.state.projects, item};
    this.state.projects.push(item);
    this.setState({ projects: this.state.projects });
    console.log(this.state.projects);
  }

  render() {
    if(this.state.loggedin== false){
      return <Redirect to="/" />
    }
    if (this.state.addingProject) {
      return <CreateForm addItem={this.onAddItem} toggleForm={this.toggleAddForm} />
    }
    else if (this.state.updatingProject) {
      return <UpdateForm id={this.state.val} updateItem={this.onUpdate} toggleUpdate={this.toggleUpdateForm}/>
    }
    else {
      return (
        <div>
          <Menu/>
          <div>
            <table className=" table striped bordered hover" size="sm">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Libelle</th>
                  <th>Description</th>
                  <th>Sponsor</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {
                   this.state.projects.map((project, key) => (
                    <tr key={key}>
                      <td>{project.id}</td>
                      <td>{project.libelle}</td>
                      <td>{project.description}</td>
                      <td>{project.sponsor}</td>
                      <td><Button onClick={() => this.toggleUpdateForm(project.id)}  className="btn btn-primary" name="btnUpdate">Update</Button></td>
                      <td><Button onClick={this.onDelete} value={this.state.projects.indexOf(project)} className="btn btn-danger" name="btnDelete">Delete</Button></td>
                    </tr>
                  )) 
                }
              </tbody>
            </table>
          </div>
          <div>
            <Button onClick={this.toggleAddForm} className="btn btn-success">Ajouter un projet</Button>
          </div>

        </div>
      );
    }
  }

}

export default ListeProduit
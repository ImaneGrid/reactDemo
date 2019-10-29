import React from 'react'
import Button from 'react-bootstrap/Button'
import UpdateForm from './updateForm'
import CreateForm from './createForm'
import Menu from '../../Menu';
import {Redirect} from 'react-router-dom'
import FiltreRecherche from './filtreRecherche'
import Table from 'react-bootstrap/Table'
import DetailForm from './detailForm'
import Dialog from 'react-bootstrap-dialog'
import './style.css'
import DailogTitle from 'react-bootstrap-dialog'



class ListeProduit extends React.Component {
  constructor(props) {
    super(props);
    const token=localStorage.getItem("token");
    let loggedin=true
    if(token==null){
        loggedin=false
    }
   
    this.state = {
      projects: [],
      valTest: { id: 1, name: 'Wasif', age: 21, email: 'wasif@email.com' },
      updatingProject: false,
      val: null,
      addingProject: false,
      loggedin,
      detail: false,
      projetDetail:null
      
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

  projetsFiltrer=(newListe)=>{
    this.setState({projects:newListe});

  }
  onClick= ()=> {
     this.dialog.showAlert(<CreateForm addItem={this.onAddItem} dialogue={this.dialog} toggleForm={this.toggleAddForm} />)
 }
 detailsProject = (project)=>{
  /* this.setState({projetDetail:project})
  this.toggleDetailForm()
  this.dialogue.showAlert(<DetailForm projet={this.state.projetDetail} dialogue={this.dialogue} toggleDetail={this.toggleDetailForm}/>) */
  this.dialogue.showAlert(<DetailForm projet={project} dialogue={this.dialogue} toggleDetail={this.toggleDetailForm}/>)
 }
 toggleUpdateForm = (project) => {
   
  this.setState({
    updatingProject:
      (this.state.updatingProject ? false : true),
      
      
  });
  this.setState({val:project});
  this.dialogueUpdate.showAlert(<UpdateForm id={project} dialogue={this.dialogueUpdate} updateItem={this.onUpdate}/>)
  
   /* for(var i=0; i<this.state.projects.length;i++){
     if(this.state.projects[i].id == id){
       this.setState({val:this.state.projects[i]});
     }
   } */

}
  componentWillUnmount() {
    console.log("This component will not exist anymore");
  }

  onDelete = (project) => {
    const ind = this.state.projects.indexOf(project);
   // alert(this.state.projects.length)
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
  toggleDetailForm = ()=>{
    this.setState({detail:(this.state.detail ? false :true
      )})
  }
 

  render() {
    if(this.state.loggedin== false){
      return <Redirect to="/" />
    }
     /* if (this.state.addingProject) {
      return <CreateForm addItem={this.onAddItem} toggleForm={this.toggleAddForm} />
    }  */
    /* else if (this.state.updatingProject) {
      return <UpdateForm id={this.state.val} updateItem={this.onUpdate} toggleUpdate={this.toggleUpdateForm}/>
    } *//* else if(this.state.detail){
      return <DetailForm projet={this.state.projetDetail} toggleDetail={this.toggleDetailForm}/>
    } */
    else {
      return (
        <div>
          <Menu/>
          <FiltreRecherche  Filtrage={this.projetsFiltrer}/>
          <div style={{marginLeft:"3%",marginRight:"3%"}}>
            <Table  hover size="bg">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Libelle</th>
                  <th>Description</th>
                  <th>Sponsor</th>
                  <th></th>
                  <th>Actions</th>
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
                      <td><Button style={{ borderRadius: 19}} onClick={() => this.detailsProject(project)} className="btn btn-success"  size="sm" name="détails"><i className="fa fa-search-plus">Détails</i></Button></td>
                      <Dialog  class="dialogue"  ref={(component) => { this.dialogue = component }} /> 

                      <td><Button style={{ borderRadius: 19 }} onClick={() => this.toggleUpdateForm(project)}  className="btn btn-primary" size="sm" name="btnUpdate"><i className="fa fa-edit">update </i></Button></td>
                      <Dialog  class="dialogue"  ref={(component) => { this.dialogueUpdate = component }} /> 
                      <td><Button style={{ borderRadius: 19 }} onClick={() => this.onDelete(project)} value={this.state.projects.indexOf(project)} className="btn btn-danger" size="sm" name="btnDelete"><i className="fa fa-trash"> delete</i></Button></td>
                     
                    </tr>
                  )) 
                }
              </tbody>
            </Table>
          </div>
          <div>
            <Button onClick={this.onClick} className="btn btn-success">Ajouter un nouveau projet</Button>
            <Dialog  class="dialogue"  ref={(component) => { this.dialog = component }} /> 
            

            
            
          </div>

        </div>
      );
    }
  }

}

export default ListeProduit
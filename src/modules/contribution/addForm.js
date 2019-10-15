import React from 'react'
import Button from 'react-bootstrap/Button'
import UpdateForm from './updateForm'
import CreateForm from './createForm'

class ListeProduit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        { id: 1, name: 'Wasif', age: 21, email: 'wasif@email.com' },
        { id: 2, name: 'Ali', age: 19, email: 'ali@email.com' },
        { id: 3, name: 'Saad', age: 16, email: 'saad@email.com' },
        { id: 4, name: 'Asad', age: 25, email: 'asad@email.com' }
      ],
      valTest: { id: 1, name: 'Wasif', age: 21, email: 'wasif@email.com' },
      updatingProject: false,
      val: null,
      addingProject: false,
    }
  }

  componentDidMount() {
    console.log(this.state.projects);
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

  toggleUpdateForm = (event) => {
    this.setState({
      updatingProject:
        (this.state.updatingProject ? false : true)
    });
    const id=event.target.value;
     for(var i=0; i<this.state.projects.length;i++){
       if(this.state.projects[i].id == id){
         this.setState({val:this.state.projects[i]});
       }
     }
     alert(this.state.projects.length);
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
  /* onUpdate = (event) => {
    this.setState({ updating: true });
    const id = event.target.value;
    console.log(this.state.updating);

    for (var i = 0; i < this.state.projects.length; i++) {
      if (this.state.projects[i].id === id) {
        this.setState({ val: this.state.projects[i] });
      }
    }
  } */

  onAddItem = (item) => {
    /*console.log("Adding project: ", item);*/

    //const newProjects = {...this.state.projects, item};
    this.state.projects.push(item);
    this.setState({ projects: this.state.projects });
    console.log(this.state.projects);
  }

  render() {
    if (this.state.addingProject) {
      return <CreateForm addItem={this.onAddItem} toggleForm={this.toggleAddForm} />
    }
    else if (this.state.updatingProject) {
      return <UpdateForm id={this.state.val} />
    }
    else {
      return (
        <div>
          <div>
            <table className=" table striped bordered hover" size="sm">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>NOM</th>
                  <th>AGE</th>
                  <th>EMAIL</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {
                  this.state.projects.map((project, key) => (
                    <tr key={key}>
                      <td>{project.id}</td>
                      <td>{project.name}</td>
                      <td>{project.age}</td>
                      <td>{project.email}</td>
                      <td><Button onClick={this.toggleUpdateForm} value={project.id} className="btn btn-primary" name="btnUpdate">Update</Button></td>
                      <td><Button onClick={this.onDelete} value={this.state.projects.indexOf(project)} className="btn btn-danger" name="btnDelete">Delete</Button></td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
          <div>
            <Button onClick={this.toggleAddForm} className="btn btn-success">Ajouter un nouveau projet</Button>
          </div>

        </div>
      );
    }
  }

}

export default ListeProduit
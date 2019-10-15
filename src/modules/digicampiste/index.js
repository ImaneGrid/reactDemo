import React from 'react'
import Button from 'react-bootstrap/Button'


class ListeDigicampiste extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        { id: 1, name: 'Wasif', age: 21, email: 'wasif@email.com' },
        { id: 2, name: 'Ali', age: 19, email: 'ali@email.com' },
        { id: 3, name: 'Saad', age: 16, email: 'saad@email.com' },
        { id: 4, name: 'Asad', age: 25, email: 'asad@email.com' },
        ]
      
    }
  }




 

  render() {
    
      return (
        <div>
          <div>
            <table className=" table striped bordered hover" size="sm">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Digicampiste</th>
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
                      <td><Button  className="btn btn-primary" name="btnUpdate">Update</Button></td>
                      <td><Button  className="btn btn-danger" name="btnDelete">Delete</Button></td>
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

export default ListeDigicampiste
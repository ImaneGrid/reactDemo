import React from 'react'
import Modal from 'react-bootstrap/Modal'
import ModalDialog from 'react-bootstrap/ModalDialog'
import ModalHeader from 'react-bootstrap/ModalHeader'
import ModalFooter from 'react-bootstrap/ModalFooter'
import ModalBody from 'react-bootstrap/ModalBody'
import ModalTitle from 'react-bootstrap/ModalTitle'
import Button from 'react-bootstrap/Button'



class UpdateForm extends React.Component {

    idInput = React.createRef();
    nameInput = React.createRef();
    ageInput = React.createRef();
    emailInput = React.createRef();

   constructor(props){
       super(props);
       this.state={
           project:this.props.id
          //test:"tester"
       }
   }
   componentDidMount(){
       console.log(this.state.project);
   }
   updateProject=()=>{
    const id = parseInt(this.idInput.current.value);
    const name = this.nameInput.current.value;
    const age = this.ageInput.current.value;
    const email = this.emailInput.current.value;
    const newProject = { id: id, name: name, age: age, email: email };
    //this.setState({project :newProject });
    this.props.updateItem(newProject);
    
       
      
   }
   hundleChange=(event)=>{
    const id = parseInt(this.idInput.current.value);
    const name = this.nameInput.current.value;
    const age = this.ageInput.current.value;
    const email = this.emailInput.current.value;
    const newProject = { id: id, name: name, age: age, email: email };
    //alert(event.target.value);
    const val=event.target.value
    this.setState({project :newProject })
   }
    render() {
        return (
            <div>
                <ModalDialog>
                    <ModalHeader closeButton>
                        <ModalTitle>Modal title</ModalTitle>
                    </ModalHeader>

                    <ModalBody>
                        <div className="formGroup">
                            <label for="id">ID :</label>
                            <input onChange={this.hundleChange} ref={this.idInput} id="id" type="email" className="form-control" value={this.state.project.id} disabled />
                        </div>
                        <div className="formGroup">
                            <label for="name">Name :</label>
                            <input onChange={this.hundleChange} ref={this.nameInput} id="name" type="email" className="form-control"  value={this.state.project.name} />
                        </div>
                        <div className="formGroup">
                            <label for="age">Age :</label>
                            <input  onChange={this.hundleChange} ref={this.ageInput} id="age" type="email" className="form-control"  value={this.state.project.age} />
                        </div>
                        <div className="formGroup">
                            <label for="email">Email :</label>
                            <input onChange={this.hundleChange}  ref={this.emailInput} id="email" type="email" className="form-control" value={this.state.project.email} />
                        </div>
                    </ModalBody>

                    <ModalFooter>
                        <Button variant="secondary" onClick={this.props.toggleUpdate}>Close</Button>
                        <Button variant="primary" onClick={this.updateProject}>Save changes</Button>
                    </ModalFooter>
                </ModalDialog>

            </div>
        );

    }
}

export default UpdateForm

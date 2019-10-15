import React from 'react';
import ReactDom from 'react-dom';
import Modal from 'react-bootstrap/Modal'
import ModalDialog from 'react-bootstrap/ModalDialog'
import ModalHeader from 'react-bootstrap/ModalHeader'
import ModalFooter from 'react-bootstrap/ModalFooter'
import ModalBody from 'react-bootstrap/ModalBody'
import ModalTitle from 'react-bootstrap/ModalTitle'
import Button from 'react-bootstrap/Button'


class CreateForm extends React.Component {

    idInput = React.createRef();
    nameInput = React.createRef();
    ageInput = React.createRef();
    emailInput = React.createRef();

    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    saveProject = () => {
        const id = parseInt(this.idInput.current.value);
        const name = this.nameInput.current.value;
        const age = this.ageInput.current.value;
        const email = this.emailInput.current.value;
        const newProject = { id: id, Libelle: name, Description: age, Sponsor: email };
        console.log("New project", newProject);
        this.props.addItem(newProject);
        this.props.toggleForm();
    }

    render() {
        return (
            <div>
                <ModalDialog>
                    <ModalHeader closeButton>
                        <ModalTitle>New project</ModalTitle>
                    </ModalHeader>

                    <ModalBody>
                        <div className="formGroup">
                            <label for="id">ID :</label>
                            <input ref={this.idInput} id="id" type="email" className="form-control" />
                        </div>
                        <div className="formGroup">
                            <label for="name">Libelle :</label>
                            <input ref={this.nameInput} id="name" type="email" className="form-control" />
                        </div>
                        <div className="formGroup">
                            <label for="age">Description :</label>
                            <input ref={this.ageInput} id="age" type="email" className="form-control" />
                        </div>
                        <div className="formGroup">
                            <label for="email">Sponsor :</label>
                            <input ref={this.emailInput} id="email" type="email" className="form-control" />
                        </div>
                    </ModalBody>

                    <ModalFooter>
                        <Button variant="secondary" onClick={this.props.toggleForm}>Close</Button>
                        <Button variant="primary" onClick={this.saveProject}>Save changes</Button>
                    </ModalFooter>
                </ModalDialog>

            </div>
        );
    }
}
export default CreateForm
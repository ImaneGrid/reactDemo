import React from 'react';
import ReactDom from 'react-dom';
import Modal from 'react-bootstrap/Modal'
import ModalDialog from 'react-bootstrap/ModalDialog'
import ModalHeader from 'react-bootstrap/ModalHeader'
import ModalFooter from 'react-bootstrap/ModalFooter'
import ModalBody from 'react-bootstrap/ModalBody'
import ModalTitle from 'react-bootstrap/ModalTitle'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class CreateForm extends React.Component {

    idInput = React.createRef();
    nameInput = React.createRef();
    prioriteInput=React.createRef();
    sponsorInput = React.createRef();
    ownerInput=React.createRef();
    statutInput=React.createRef();
    phaseInput=React.createRef();
    devInput=React.createRef();
    fonctInput=React.createRef();
    enjeuxInput=React.createRef();
    descriptionInput = React.createRef();

    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    saveProject = () => {
        const id = parseInt(this.idInput.current.value);
        const name = this.nameInput.current.value;
        const priorite=this.prioriteInput.current.value;
        const sponsor = this.sponsorInput.current.value;
        const owner=this.ownerInput.current.value;
        const staut=this.statutInput.current.value;
        const phase=this.phaseInput.current.value;
        const dev=this.devInput.current.value;
        const fonct=this.fonctInput.current.value;
        const enjeux=this.enjeuxInput.current.value;
        const desc = this.descriptionInput.current.value;
        const newProject = { id: id, libelle: name, description: desc, sponsor: sponsor,productOwner:owner,
        statut:staut,phase:phase,besoinDev:dev,besoinFonct:fonct,enjeux:enjeux,priorite:priorite };
        console.log("New project", newProject);
        this.props.addItem(newProject);
        this.props.dialogue.hide();
    }
    onClose = () => {
        this.props.dialogue.hide()
    }

    render() {
        return (
            <div >
                <ModalDialog className="dial">
                    <ModalHeader>
                        <ModalTitle style={{ marginLeft: "35%" }}>New project</ModalTitle>
                    </ModalHeader>

                    <ModalBody>
                        <Row>
                            <Col>
                                <div className="formGroup">
                                    <label for="id">ID :</label>
                                    <input ref={this.idInput} id="id" type="email" className="form-control" />
                                </div>
                            </Col>
                            <Col>
                                <div className="formGroup">
                                    <label for="name">Libelle :</label>
                                    <input ref={this.nameInput} id="name" type="email" className="form-control" />
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div className="formGroup">
                                    <label for="age">Priorité :</label>
                                    <input ref={this.prioriteInput} id="priorite" type="text" className="form-control" />
                                </div>
                            </Col>
                            <Col>
                                <div className="formGroup">
                                    <label for="age">Sponsor :</label>
                                    <input ref={this.sponsorInput} id="sponsor" type="text" className="form-control" />
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div className="formGroup">
                                    <label for="age">Product Owner :</label>
                                    <input ref={this.ownerInput} id="owner" type="text" className="form-control" />
                                </div>
                            </Col>
                            <Col>
                                <div className="formGroup">
                                    <label for="email">Statut :</label>
                                    <input ref={this.statutInput} id="staut" type="text" className="form-control" />
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div className="formGroup">
                                    <label for="age">Phase :</label>
                                    <input ref={this.phaseInput} id="phase" type="text" className="form-control" />
                                </div>
                            </Col>
                            <Col>
                                <div className="formGroup">
                                    <label for="age">Besoin de développement :</label>
                                    <input ref={this.devInput} id="dev" type="text" className="form-control" />
                                </div>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <div className="formGroup">
                                    <label for="age">Besoin fonctionnel :</label>
                                    <input ref={this.fonctInput} id="fonct" type="text" className="form-control" />
                                </div>
                            </Col>
                            <Col>
                                <div className="formGroup">
                                    <label for="age">Enjeux :</label>
                                    <input ref={this.enjeuxInput} id="enjeux" type="text" className="form-control" />
                                </div>
                            </Col>
                        </Row>
                        <div className="formGroup">
                            <label for="age">Description :</label>
                            <input ref={this.descriptionInput} id="description" type="email" className="form-control" />
                        </div>

                    </ModalBody>

                    <ModalFooter class="test">
                        <Button variant="secondary" onClick={this.onClose}>Close</Button>
                        &nbsp;&nbsp;
                        <Button variant="primary" onClick={this.saveProject}>Save changes</Button>
                    </ModalFooter>
                </ModalDialog>

            </div>
        );
    }
}
export default CreateForm
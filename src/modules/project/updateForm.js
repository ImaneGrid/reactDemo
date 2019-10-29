import React from 'react'
import Modal from 'react-bootstrap/Modal'
import ModalDialog from 'react-bootstrap/ModalDialog'
import ModalHeader from 'react-bootstrap/ModalHeader'
import ModalFooter from 'react-bootstrap/ModalFooter'
import ModalBody from 'react-bootstrap/ModalBody'
import ModalTitle from 'react-bootstrap/ModalTitle'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'



class UpdateForm extends React.Component {

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
    descInput = React.createRef();

    constructor(props) {
        super(props);
        this.state = {
            project: this.props.id
            //test:"tester"
        }
    }
    componentDidMount() {
        console.log(this.state.project);
    }
    updateProject = () => {
        const id = parseInt(this.idInput.current.value);
        const name = this.nameInput.current.value;
        const priorite=this.prioriteInput.current.value;
        const sponsor = this.sponsorInput.current.value;
        const owner=this.ownerInput.current.value;
        const statut=this.statutInput.current.value;
        const phase=this.phaseInput.current.value;
        const dev=this.devInput.current.value;
        const fonct=this.fonctInput.current.value;
        const enjeux=this.enjeuxInput.current.value;
        const desc = this.descInput.current.value;
        const newProject = { id: id, libelle: name, description: desc, sponsor: sponsor,
        productOwner: owner,statut: statut,phase:phase,besoinDev: dev,besoinFonct: fonct,enjeux:enjeux,priorite:priorite };
        //this.setState({project :newProject });
        this.props.updateItem(newProject);
        this.props.dialogue.hide();


    }
    hundleChange = (event) => {
        const id = parseInt(this.idInput.current.value);
        const name = this.nameInput.current.value;
        const priorite=this.prioriteInput.current.value;
        const sponsor = this.sponsorInput.current.value;
        const owner=this.ownerInput.current.value;
        const statut=this.statutInput.current.value;
        const phase=this.phaseInput.current.value;
        const dev=this.devInput.current.value;
        const fonct=this.fonctInput.current.value;
        const enjeux=this.enjeuxInput.current.value;
        const desc = this.descInput.current.value;
        const newProject = { id: id, libelle: name, description: desc, sponsor: sponsor,
        productOwner: owner,statut: statut,phase:phase,besoinDev: dev,besoinFonct: fonct,enjeux:enjeux,priorite:priorite };
        //alert(event.target.value);
        const val = event.target.value
        this.setState({ project: newProject })
    }
    onClick = () => {
        this.props.dialogue.hide();
    }
    render() {
        return (
            <div>
                <ModalDialog className="dial">
                    <ModalHeader >
                        <ModalTitle style={{ marginLeft: "35%" }}>Edit project</ModalTitle>
                    </ModalHeader>

                    <ModalBody>
                        <Row>
                            <Col>
                                <div className="formGroup">
                                    <label for="id">ID :</label>
                                    <input onChange={this.hundleChange} ref={this.idInput} id="id" type="text" className="form-control" value={this.state.project.id} disabled />
                                </div>
                            </Col>
                            <Col>
                                <div className="formGroup">
                                    <label for="name">Libelle :</label>
                                    <input onChange={this.hundleChange} ref={this.nameInput} id="name" type="text" className="form-control" value={this.state.project.libelle} />
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div className="formGroup">
                                    <label for="email">Priorité :</label>
                                    <input onChange={this.hundleChange} ref={this.prioriteInput} id="priorite" type="text" className="form-control" value={this.state.project.priorite} />
                                </div>
                            </Col>
                            <Col>
                                <div className="formGroup">
                                    <label for="email">Sponsor :</label>
                                    <input onChange={this.hundleChange} ref={this.sponsorInput} id="sponsor" type="text" className="form-control" value={this.state.project.sponsor} />
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div className="formGroup">
                                    <label for="email">Product owner :</label>
                                    <input onChange={this.hundleChange} ref={this.ownerInput} id="owner" type="text" className="form-control" value={this.state.project.productOwner} />
                                </div>
                            </Col>
                            <Col>
                                <div className="formGroup">
                                    <label for="email">Statut :</label>
                                    <input onChange={this.hundleChange} ref={this.statutInput} id="statut" type="text" className="form-control" value={this.state.project.statut} />
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div className="formGroup">
                                    <label for="email">Phase :</label>
                                    <input onChange={this.hundleChange} ref={this.phaseInput} id="phase" type="text" className="form-control" value={this.state.project.phase} />
                                </div>
                            </Col>
                            <Col>
                                <div className="formGroup">
                                    <label for="email">Besoin de développement :</label>
                                    <input onChange={this.hundleChange} ref={this.devInput} id="dev" type="text" className="form-control" value={this.state.project.besoinDev} />
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div className="formGroup">
                                    <label for="email">Besoin fonctionnel :</label>
                                    <input onChange={this.hundleChange} ref={this.fonctInput} id="fonct" type="text" className="form-control" value={this.state.project.besoinFonct} />
                                </div>
                            </Col>
                            <Col>
                                <div className="formGroup">
                                    <label for="email">Enjeux :</label>
                                    <input onChange={this.hundleChange} ref={this.enjeuxInput} id="enjeux" type="text" className="form-control" value={this.state.project.enjeux} />
                                </div>
                            </Col>
                        </Row>
                       
                            <div className="formGroup">
                                <label for="age">Description :</label>
                                <input onChange={this.hundleChange} ref={this.descInput} id="desc" type="text" className="form-control" value={this.state.project.description} />
                            </div>
                        

                    </ModalBody>

                    <ModalFooter class="test">
                        <Button variant="secondary" onClick={this.onClick}>Close</Button>
                        &nbsp;&nbsp;
                        <Button variant="primary" onClick={this.updateProject}>Save changes</Button>
                    </ModalFooter>
                </ModalDialog>

            </div>
        );

    }
}

export default UpdateForm

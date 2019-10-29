import React from 'react'
import ModalDialog from 'react-bootstrap/ModalDialog'
import ModalHeader from 'react-bootstrap/ModalHeader'
import ModalFooter from 'react-bootstrap/ModalFooter'
import ModalBody from 'react-bootstrap/ModalBody'
import ModalTitle from 'react-bootstrap/ModalTitle'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class DetailForm extends React.Component {


   constructor(props){
       super(props);
       this.state={
           project:this.props.projet
         
       }
   }
   onClick=()=>{
       this.props.dialogue.hide()
   }

    render() {
        return (
            <div>
                <ModalDialog style={{width:"290px"}}>
                    <ModalHeader  >
                        <ModalTitle style={{marginLeft:"10%"}} >Détails du projet : {this.state.project.libelle}</ModalTitle>
                    </ModalHeader>

                    <ModalBody>
                        <Row className="formGroup">
                            <Col>
                            <label align="left" for="id">ID :</label>
                            <input ref={this.idInput} id="id" type="text" className="form-control" value={this.state.project.id} disabled />
                            </Col>
                            <Col>
                            <label for="name">Libelle :</label>
                            <input ref={this.nameInput} id="name" type="text" className="form-control"  value={this.state.project.libelle} disabled />
                            </Col>
                        </Row>
                        <Row className="formGroup">
                            <Col>
                            <label for="age">Priorité :</label>
                            <input   ref={this.ageInput} id="age" type="text" className="form-control"  value={this.state.project.priorite} disabled />
                            </Col>
                            <Col>
                            <label for="email">Sponsor :</label>
                            <input   ref={this.emailInput} id="email" type="text" className="form-control" value={this.state.project.sponsor} disabled/>
                            </Col>
                        </Row>
                        
                        <Row className="formGroup">
                            <Col>
                            <label for="email">Product Owner :</label>
                            <input   ref={this.emailInput} id="email" type="text" className="form-control" value={this.state.project.productOwner} disabled/>
                            </Col>
                            <Col>
                            <label for="email">Statut :</label>
                            <input   ref={this.emailInput} id="email" type="text" className="form-control" value={this.state.project.statut} disabled/>
                            </Col>
                            
                        </Row>
                        
                        <Row className="formGroup">
                            <Col>
                            <label for="email">Phase :</label>
                            <input   ref={this.emailInput} id="email" type="text" className="form-control" value={this.state.project.phase} disabled/>
                            </Col>
                           <Col>
                           <label for="email">Besoin de développement :</label>
                            <input   ref={this.emailInput} id="email" type="text" className="form-control" value={this.state.project.besoinDev} disabled/>
                           </Col>
                        </Row>
                        
                        <Row className="formGroup">
                            <Col>
                            <label for="email">Besoin fonctionnel :</label>
                            <input   ref={this.emailInput} id="email" type="text" className="form-control" value={this.state.project.besoinFonct} disabled/>
                            </Col>
                            <Col>
                            <label for="email">Enjeux :</label>
                            <input   ref={this.emailInput} id="email" type="text" className="form-control" value={this.state.project.enjeux} disabled/>
                            </Col>
                           
                        </Row>
                        
                        <Row className="formGroup">
                            <Col>
                            <label for="email">Description :</label>
                            <input   ref={this.emailInput} id="email" type="text" className="form-control" value={this.state.project.description} disabled/>
                            </Col>
                            
                        </Row>
                    </ModalBody>

                    <ModalFooter class="test">
                        <Button variant="secondary" onClick={this.onClick}>Close</Button>
                    </ModalFooter>
                </ModalDialog>

            </div>
        );

    }
}

export default DetailForm

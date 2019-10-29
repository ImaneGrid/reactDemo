import React, { Component } from 'react'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'


class FiltreRechercheDigi extends Component {
    constructor(props) {
        super(props)
        this.state = {
            query: '',
            digicampistes: []
        }

    }
    getInfo = () => {
        fetch(`http://localhost:3000/Digicampiste?nomDigi=${this.state.query}`)
            .then(res => res.json())
            .then((data) => {
                this.setState({ digicampistes: data })
                console.log(this.state.digicampistes)
            })
            .catch(console.log)
    }
    handleInputChange = () => {
        this.setState({
            query: this.search.value
        })
        

    }
    filtrer=()=>{
        this.getInfo()
        this.props.Filtrage(this.state.digicampistes)
        alert(this.state.digicampistes)
    }

    render() {
        return (
            <div style={{marginLeft:"3%",marginRight:"3%",marginTop:"2%"}}>
                <h3 align="justify">Filtre de recherche</h3><br />
                <ButtonToolbar>
                    <ButtonGroup className="mr-5">
                        <DropdownButton variant="light" id="dropdown-item-button" title="Statut">
                            <Dropdown.Item as="button">Java</Dropdown.Item>
                            <Dropdown.Item as="button">.Net</Dropdown.Item>
                            <Dropdown.Item as="button">Angular</Dropdown.Item>
                        </DropdownButton>
                    </ButtonGroup>
                    <ButtonGroup className="mr-5">
                        <DropdownButton variant="light" id="dropdown-item-button" title="Technologie">
                            <Dropdown.Item as="button">Java</Dropdown.Item>
                            <Dropdown.Item as="button">.Net</Dropdown.Item>
                            <Dropdown.Item as="button">Angular</Dropdown.Item>
                        </DropdownButton>
                    </ButtonGroup>
                    <ButtonGroup className="mr-5">
                        <DropdownButton variant="light" id="dropdown-item-button" title="Projet">
                            <Dropdown.Item as="button">Java</Dropdown.Item>
                            <Dropdown.Item as="button">.Net</Dropdown.Item>
                            <Dropdown.Item as="button">Angular</Dropdown.Item>
                        </DropdownButton>
                    </ButtonGroup>
                    <Form style={{marginLeft:'42%'}}> 
                        <InputGroup className="mb-3">
                            <Form.Control className="form-control" type="text" placeholder="Recherche par nom"
                                ref={input => this.search = input}
                                onChange={this.handleInputChange}/>
                               <Button variant="light" onClick={this.filtrer}><i class="fa fa-search"></i></Button>
                                
                            <p>{this.state.query}</p>
                        </InputGroup>
                    </Form>
                </ButtonToolbar>

            </div>
        )
    }
}
export default FiltreRechercheDigi

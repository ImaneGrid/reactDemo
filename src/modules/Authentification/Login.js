import React from 'react';
import ReactDom from 'react-dom';
import { Redirect } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import FormCheck from 'react-bootstrap/FormCheck';
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import './style.css';
import BackgroundImage from './texture.png'
import logo from './benchup-logo.png'
import Image from 'react-bootstrap/Image'
import InputGroup from 'react-bootstrap/InputGroup'






class Login extends React.Component {

    constructor(props) {
        super(props)
        const token = localStorage.getItem("token")
        const divStyle = {
            color: 'blue',
            backgroundImage: 'url(' + + ')',
        }
        let loggedIn = true
        if (token == null) {
            loggedIn = false
        }
        this.state = {
            username: '',
            password: '',
            loggedIn
        }
        this.onChange = this.onChange.bind(this)
        this.submitForm = this.submitForm.bind(this)
    }
    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    submitForm = (e) => {
        e.preventDefault();
        const { username, password } = this.state

        if (username == "admin" && password == "admin") {
            localStorage.setItem("token", "dqsdqsdqsdqdqsd")
            this.setState({ loggedIn: true })
        }


    }

    render() {
        if (this.state.loggedIn) {
            return <Redirect to="/home" />
        }
        return (

            <div style={{ backgroundImage: `url(${BackgroundImage})`, height: 600 }}>
                 <br/>
                <div className="col-md-6">
                    <Card className="Card" style={{ borderRadius: 12,borderColor:'#f5cd1d',background:'rgba(173, 193, 224, 0.3)' }} >
                        <Col>
                            <Image src={logo} rounded />
                        </Col>
                        <Card.Body>
                            <Form onSubmit={this.submitForm} >
                        <Col>
                                <InputGroup className="mb-3">
                                    <InputGroup.Prepend >
                                    <InputGroup.Text id="basic-addon1"><i className="fa fa-user"/></InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <Form.Control  type="text" placeholder="Enter your Login" name="username" value={this.state.username} onChange={this.onChange} />
                                </InputGroup>
                                    
                                <InputGroup className="mb-3" style={{ borderRadius: 19,borderColor:'#7989c7' }}>
                                     {/* <InputGroup.Prepend>
                                    <InputGroup.Text id="basic-addon1"><i class="fa fa-unlock-alt"></i></InputGroup.Text>
                                    </InputGroup.Prepend> */}
                                    <Form.Control  style={{ borderRadius: 19, borderColor: '#403e70' }} type="password" placeholder="Enter your Password" name="password" value={this.state.password} onChange={this.onChange} />
                                </InputGroup>
                        </Col>
<Button style={{ borderRadius: 19, width: 330, backgroundColor: '#403e70', borderColor: '#403e70' }} variant="primary" type="submit">
                                    Submit</Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </div>
            </div>

        );
    }
}
export default Login
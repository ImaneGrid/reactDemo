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





class Login extends React.Component {
    constructor(props) {
        super(props)
        const token = localStorage.getItem("token")
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

        if (username == "grid" && password == "imane") {
            localStorage.setItem("token", "dqsdqsdqsdqdqsd")
            this.setState({ loggedIn: true })
        }


    }

    render() {
        if (this.state.loggedIn) {
            return <Redirect to="/home" />
        }
        return (
            <div className="col-md-6 container">
               
                <Card className="Card" >
                    <Card.Header>Benshup</Card.Header>
                <Card.Body>
                <Form onSubmit={this.submitForm}>
                <Col>
                    <Form.Group controlId="formBasicEmail">
                    
                        {/* <Form.Label >Login</Form.Label> */}
                        <Form.Control type="text" placeholder="Enter your Login" name="username" value={this.state.username} onChange={this.onChange}/>
                       
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                    
                        {/* <Form.Label >Password</Form.Label> */}
                        <Form.Control type="password" placeholder="Enter your Password" name="password" value={this.state.password} onChange={this.onChange}/>
                       
                    </Form.Group>
            
                                
                            
                    </Col> 
                   
                    
                    <Button variant="primary" type="submit">
                        Submit
                </Button>
                </Form>
                </Card.Body>
                </Card>
            </div>
        );
    }
}
export default Login
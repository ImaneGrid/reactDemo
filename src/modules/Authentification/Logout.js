import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'
 class Logout extends Component {
   constructor(props){
       super(props)
       localStorage.removeItem("token");
   }
    render() {
        return (
            <div>
              <h1>You have been logged out !!</h1>
              <Login /> 
            </div>
        )
    }
}
export default Logout

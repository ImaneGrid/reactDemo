import React from 'react'
import Menu from '../../Menu';
import {Redirect} from 'react-router-dom'
class Staffing extends React.Component {
  constructor(props){
    super(props)
    const token=localStorage.getItem("token")
    let loggedIn = true
    if(token == null){
        loggedIn = false
    }
    this.state = {
      loggedIn
    }
  }
  render() {
    if(this.state.loggedIn == false){
      return <Redirect to="/" />
    }
    return (
      <div>
        <Menu/>
        <h1>Staffing !!!!!!</h1>
      </div>
    
    );
  }
}
export default Staffing
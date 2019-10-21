import React from 'react';
import './App.css';
import Projets from './modules/project/index';
import Staffing from './modules/project/stuffingForm';
import CreateForm from './modules/project/createForm';
import Login from './modules/Authentification/Login'
import Logout from './modules/Authentification/Logout'
import Digicampiste from './modules/digicampiste/index';
import {Route} from 'react-router-dom';
import {Switch} from 'react-router-dom';


function Router() {
    return (
        <div>
          <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/logout" component={Logout} />
                <Route exact path="/staffing" component={Staffing} />
                <Route exact path="/home" component={Projets} />
                <Route exact path="/newProject" component={CreateForm} />
                <Route exact path="/digicampiste" component={Digicampiste} />
                <Route exact path="*" component={() => "404 NOT FOUND"} />
                

            </Switch>
        </div>

    );
}
export default Router
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter  } from 'react-router-dom';
import App from './App';
//import ListeProduit from './modules/project/index';
//import UpdateForm from './modules/project/updateForm';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'

/* const routing = (
    <Router>
      <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/projets">Users</Link>
        </li>
        <li>
          <Link to="/update">Contact</Link>
        </li>
      </ul>
        <Route  exact path="/" component={App} />
        <Route path="/projets" component={ListeProduit} />
        <Route path="/update" component={UpdateForm} />
      </div>
    </Router>
  ) */

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));


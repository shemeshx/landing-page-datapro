import React from 'react';

import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NewLid from './components/NewLid';
import AdminLogin from './components/AdminLogin';
import AdminPanel from './components/AdminPanel';

function App(props) {
  console.log(props)
  return (
    <Router>
      <Switch>
          <Route excat path="/new">
            <NewLid />
          </Route>
          <Route path="/admin/dashboard" >
            <AdminPanel />
          </Route>
          <Route excat path="/admin" >
            <AdminLogin />
          </Route>
          <Route path="/">
            <NewLid />
          </Route>
      </Switch>
     
    </Router>
  );
}

export default App;

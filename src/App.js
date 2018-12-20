import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import './App.css';
import Header from "./components/Header/Header";
import AddContact from "./components/Contact/AddContact";
import EditContact from "./components/Contact/EditContact";

import Contacts from "./containers/Contacts";

import About from './pages/About';
import NotFound from './pages/NotFound';

class App extends Component {
  render() {
    return (
        <Provider store={store}>
            <Router>
              <div className="app">
                <Header brandName={'Contact Manager'}/>
                <div className="container">
                    <Switch>
                      <Route exact path={'/'} component={Contacts}/>
                      <Route exact path={'contact/add'} component={AddContact}/>
                      <Route exact path={'/contact/add/:id'} component={EditContact}/>
                      <Route exact path={'/about'} component={About}/>
                      <Route component={NotFound}/>
                    </Switch>
                </div>
              </div>
            </Router>
        </Provider>
    );
  }
}

export default App;

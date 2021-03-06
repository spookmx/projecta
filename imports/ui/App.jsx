import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Toolbar, ToolbarGroup, ToolbarTitle} from 'material-ui/Toolbar';
import RaisedButton from 'material-ui/RaisedButton';

import { Router, Route } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';

import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import { Tasks } from '../api/tasks.js';

import ViewHome from './ViewHome.jsx';
import ViewRegister from './ViewRegister.jsx';

import AccountsUIWrapper from './AccountsUIWrapper.jsx';

const browserHistory = createBrowserHistory();

// App component - represents the whole app
class App extends Component {

  constructor(props) {
    super(props);

  }


  render() {
    return (
      <Router history={browserHistory}>
        <MuiThemeProvider>
          <div className="mainWrapper">
            <Toolbar>
              <ToolbarGroup firstChild={true}>
                <ToolbarTitle text="Fluity" />
              </ToolbarGroup>
              <ToolbarGroup>
                <RaisedButton label="Register" primary={true} />
              </ToolbarGroup>
            </Toolbar>
          <div className="contentWrapper">
            <Route exact path="/" component={ViewHome}/>
            <Route path="/register" component={ViewRegister}/>
          </div>
          </div>
        </MuiThemeProvider>
      </Router>
    );
  }
}

App.propTypes = {
  tasks: PropTypes.array.isRequired,
  incompleteCount: PropTypes.number.isRequired,
  currentUser: PropTypes.object,
};

export default createContainer(() => {
  Meteor.subscribe('tasks');
  return {
    tasks: Tasks.find({}, { sort: { createdAt: -1 } }).fetch(),
    incompleteCount: Tasks.find({ checked: { $ne: true } }).count(),
    currentUser: Meteor.user(),
  };
}, App);

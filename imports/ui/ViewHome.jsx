import React, { Component, PropTypes } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import { Meteor } from 'meteor/meteor';
import classnames from 'classnames';

// Task component - represents a single todo item
export default class ViewHome extends Component {
  toggleChecked() {
    // Set the checked property to the opposite of its current value
    Meteor.call('tasks.setChecked', this.props.task._id, !this.props.task.checked);
  }


  render() {

    return (
      <div>
        <Card>
          <CardHeader
            title="Login"
            subtitle="Access to your Fluity account"
            avatar="/loginAvatar.jpg"
          />
          <CardMedia>
            <img src="/login.jpg" alt="" />
          </CardMedia>
          <CardText>
            <p>Login to your Fluity account using the same credentials that you use on the mobile application.</p>
          </CardText>
        </Card>
      </div>
    );
  }
}

ViewHome.propTypes = {
};

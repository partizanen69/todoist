import React from 'react';

import { PasswordForgetLink } from './PasswordForget/PasswordForget';
import PasswordChange from './PasswordChange';
import withAuthorization from './withAuthorization';
import firebase from '../firebase/firebase';

class Account extends React.Component {
  constructor() {
    super();
    this.state = {
      userDatabase: {},
    };
  }

  componentDidMount() {
    const { uid } = firebase.auth().currentUser;
    const userDatabase = firebase.database().ref('users/' + uid);
    userDatabase.on('value', snapshot => {
      let obj = snapshot.val();
      this.setState({
        userDatabase: obj,
      });
    });
  }

  render() {
    const { email, username } = this.state.userDatabase;

    return (
      <div>
        <h1>Account details</h1>
        <p>Your email is {email}</p>
        <p>Your username is {username}</p>
        <PasswordForgetLink />
        <PasswordChange />
      </div>
    );
  }
}

const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(Account);

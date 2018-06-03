import React from 'react';

import { PasswordForgetLink } from '../PasswordForget/PasswordForget';
import PasswordChange from './PasswordChange';
import withAuthorization from '../withAuthorization';
import firebase from '../../firebase/firebase';
import Styles from './Styles';

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
      <Styles>
        <div className="wrapper">
          <div>
            <h1>Account details</h1>
            <p>Your email is {email}</p>
            <p>Your username is {username}</p>
            <PasswordForgetLink />
            <p>To change your password please fill the form below:</p>
            <PasswordChange />
          </div>
        </div>
      </Styles>
    );
  }
}

const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(Account);

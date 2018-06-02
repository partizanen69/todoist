import React from 'react';

import AuthUserContext from './AuthUserContext';
import { PasswordForgetLink } from './PasswordForget';
import PasswordChange from './PasswordChange';

const Account = () =>
  <AuthUserContext.Consumer>
    {authUser =>
      <div>
      	<button onClick={() => console.log(authUser)}>Click</button>
        <h1>Account details</h1>
        <p>Your email is authUser.email</p>
        <PasswordForgetLink />
        <PasswordChange />
      </div>
    }
  </AuthUserContext.Consumer>
		

export default Account;
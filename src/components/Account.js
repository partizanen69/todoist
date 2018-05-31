import React from 'react';

import AuthUserContext from './AuthUserContext';

const Account = () =>
  <AuthUserContext.Consumer>
    {authUser =>
      <div>
      	<button onClick={() => console.log(authUser)}>Click authUser</button>
      	<button onClick={() => console.log(authUser.email)}>Click authUser.email</button>
        <h1>Account: {authUser.email}</h1>
      </div>
    }
  </AuthUserContext.Consumer>
		

export default Account;
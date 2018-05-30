import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import * as routes from '../constants/routes';
import { firebase } from '../firebase';
import Navigation from './Navigation'
import LandingPage from './LandingPage';
import SignUpPage from './SignUpPage';
import SignInPage from './SignInPage';
import HomePage from './HomePage';
import Account from './Account';
import PasswordForget from './PasswordForget';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			authUser: null
		}
	}

	componentDidMount() {
		firebase.auth.onAuthStateChanged(authUser => {
			authUser 
			? this.setState({authUser: authUser})
			: this.setState({authUser: null});
		})
	}

	render() {
    return (
    	<Router>
    		<div>
	    		<Navigation authUser={this.state.authUser} />
	    		<Route exact path={routes.LANDING} component={LandingPage} />
	    		<Route exact path={routes.SIGN_UP} component={SignUpPage} />
	    		<Route exact path={routes.SIGN_IN} component={SignInPage} />
	    		<Route exact path={routes.HOME} component={HomePage} />
	    		<Route exact path={routes.ACCOUNT} component={Account} />
	    		<Route exact path={routes.PASSWORD_FORGET} component={PasswordForget} />
    		</div>
    	</Router>
	)

    
  }
}

export default App;
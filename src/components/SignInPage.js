import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import { auth } from '../firebase';
import * as routes from '../constants/routes';



const SignInPage = ({ history }) => 
	<div>
		<h1>Sign in</h1>
		<SignInForm history={history}/>
		<SignUpLink />
		<PasswordForgetLink />
	</div>

const INITIAL_STATE = {
	email: '',
	password: '',
	error: null
}

class SignInForm extends React.Component {
	constructor() {
		super();
		this.state = { ...INITIAL_STATE };
	}

	onSubmit = (e) => {
		const { email, password } = this.state;
		const { history } = this.props;

	    auth.doSignInWithEmailAndPassword(email, password)
	    	.then(() => {
	    		this.setState(() => ({ ...INITIAL_STATE }));
	    		history.push(routes.HOME);
	    	})
	    	.catch(error => this.setState({error: error}));

		e.preventDefault();
		console.log('success');
	}

	render() {
		const {
			email,
			password,
			error
		} = this.state;

		const isInvalid = email === '' || password === '';

		return (
			<div>
				<form onSubmit={this.onSubmit}>
					<input
						value={email}
						onChange={(e) => this.setState({email: e.target.value})}
						placeholder="Your email"
					/>
					<input 
						value={password}
						onChange={(e) => this.setState({password: e.target.value})}
						type="password"
						placeholder="Password"
					/>
					<button disabled={isInvalid} type="submit">
						Sign in
					</button>
					{ error && <p>{error.message}</p> }
				</form>
			</div>
		)
	}
}

const SignUpLink = () =>
	<p>
		Don't have an account?
		{' '}
		<Link to={routes.SIGN_UP}>Sign up</Link>
	</p>

const PasswordForgetLink = () => 
	<p>
		Forgot you password?
		{' '}
		<Link to={routes.PASSWORD_FORGET}>Reset password</Link>
	</p>

export default withRouter(SignInPage);

export {
	SignInForm,
	SignUpLink
}
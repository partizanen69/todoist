import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import * as routes from '../constants/routes';
import { auth } from '../firebase';

const SignUpPage = ({ history }) =>
	<div>
		<h1>Sign Up</h1>
		<SignUpForm history={history} />
	</div>

const INITIAL_STATE = {
	username: '',
	email: '',
	passwordOne: '',
	passwordTwo: '',
	error: null
}

const byPropKey = (propName, value) => () => ({
	[propName]: value
})

class SignUpForm extends React.Component {
	constructor() {
		super();
		this.state = { ...INITIAL_STATE };
	}

	onSubmit = (e) => {
		const {
			username,
			email,
			passwordOne
		} = this.state;

		const { history } = this.props;

		auth.doCreateUserWithEmailAndPassword(email, passwordOne)
			.then(authUser => {
				this.setState(() => ({ ...INITIAL_STATE }));
				history.push(routes.HOME);
			})
			.catch(error => {
				this.setState(byPropKey('error', error))
			})
		e.preventDefault();
		console.log('success');
	}

	render() {
		const {
			username,
			email,
			passwordOne,
			passwordTwo,
			error
		} = this.state;

		const isInvalid = 
			passwordOne !== passwordTwo || 
			passwordOne === '' || 
			email === '' ||
			username === '';

		return (
			<form onSubmit={this.onSubmit}>
				<input 
					value={username}
		          	onChange={e => this.setState(byPropKey('username', e.target.value))}
					placeholder="Full Name"
				/>
				<input 
					value={email}
		          	onChange={e => this.setState(byPropKey('email', e.target.value))}
					placeholder="Email Address"
				/>
				<input 
					value={passwordOne}
		          	onChange={e => this.setState(byPropKey('passwordOne', e.target.value))}
		          	type="password"
					placeholder="Password"
				/>
				<input 
					value={passwordTwo}
		          	onChange={e => this.setState(byPropKey('passwordTwo', e.target.value))}
		          	type="password"
					placeholder="Confirm Password"
				/>
				<button 
					type="submit"
					disabled={isInvalid}
				>
					Sign Up
				</button>

				{ error && <p>{error.message}</p> }
			</form>
		)
	}
}

export default withRouter(SignUpPage);

export {
	SignUpForm
}
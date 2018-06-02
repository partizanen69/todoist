import React from 'react';
import { withRouter } from 'react-router-dom';

import * as routes from '../constants/routes';
import { auth, db } from '../firebase';

const SignUpPage = ({ history }) => (
	<div>
		<h1>Sign Up</h1>
		<SignUpForm history={history} />
	</div>
);

const INITIAL_STATE = {
	username: '',
	email: '',
	passwordOne: '',
	passwordTwo: '',
	error: null,
};

class SignUpForm extends React.Component {
	constructor() {
		super();
		this.state = { ...INITIAL_STATE };
	}

	onSubmit = e => {
		const { username, email, passwordOne } = this.state;

		const { history } = this.props;

		auth.doCreateUserWithEmailAndPassword(email, passwordOne)
			.then(authUser => {
				db.doCreateUser(authUser.uid, username, email).then(() => {
					this.setState(() => ({ ...INITIAL_STATE }));
					history.push(routes.USER_TODO_LIST);
				});
			})
			.catch(error => {
				this.setState({ error: error });
			});
		e.preventDefault();
	};

	render() {
		const { username, email, passwordOne, passwordTwo, error } = this.state;

		const isInvalid =
			passwordOne !== passwordTwo || passwordOne === '' || email === '' || username === '';

		return (
			<form onSubmit={this.onSubmit}>
				<input
					value={username}
					onChange={e => this.setState({ username: e.target.value })}
					placeholder="Full Name"
				/>
				<input
					value={email}
					onChange={e => this.setState({ email: e.target.value })}
					placeholder="Email Address"
				/>
				<input
					value={passwordOne}
					onChange={e => this.setState({ passwordOne: e.target.value })}
					type="password"
					placeholder="Password"
				/>
				<input
					value={passwordTwo}
					onChange={e => this.setState({ passwordTwo: e.target.value })}
					type="password"
					placeholder="Confirm Password"
				/>
				<button type="submit" disabled={isInvalid}>
					Sign Up
				</button>

				{error && <p>{error.message}</p>}
			</form>
		);
	}
}

export default withRouter(SignUpPage);

export { SignUpForm };

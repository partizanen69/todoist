import React from 'react';
import { Link } from 'react-router-dom';

import { auth } from '../firebase';
import * as routes from '../constants/routes';

const PasswordForgetPage = () =>
	<div>
		<h1>Reset your password</h1>
		<PasswordForgetForm />
	</div>

const INITIAL_STATE = {
	email: '',
	error: '',
	resetMessage: ''
}

class PasswordForgetForm extends React.Component {
	constructor() {
		super();
		this.state = { ...INITIAL_STATE }
	}

	onSubmit = (e) => {
		const { email } = this.state;
		const resetMessage = 'We have sent an email with reset link to your mailbox.';

		auth.doPasswordReset(email)
			.then(() => {
				this.setState({resetMessage: resetMessage});
			})
			.catch((error) => this.setState({error: error}))
		
		e.preventDefault();
	}

	render() {
		const { email, error, resetMessage } = this.state;
		const isInvalid = email === '';

		return <div>
			<form onSubmit={this.onSubmit}>
				<input 
					value={email}
					onChange={(e) => this.setState({email: e.target.value})}
					placeholder="Enter your email"
				/>
				<button
					type="submit"
					disabled={isInvalid}
				>
					Reset password
				</button>
				{ error && <p>error.message</p> }
				<p>{ resetMessage }</p>
			</form>
		</div>
	}
}


const PasswordForgetLink = () => 
	<p>
		Forgot you password?
		{' '}
		<Link to={routes.PASSWORD_FORGET}>Reset password</Link>
	</p>

export default PasswordForgetPage;

export {
	PasswordForgetLink
}
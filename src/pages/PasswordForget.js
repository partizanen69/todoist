import React from 'react';
import { Link } from 'react-router-dom';
import { FormGroup, FormControl, Button } from 'react-bootstrap';

import { auth } from '../firebase';
import * as routes from '../constants/routes';
import Styles from './passwordForget/Styles';

const PasswordForgetPage = () => (
	<Styles>
		<div className="wrapper">
			<div>
				<h1>Reset your password</h1>
				<PasswordForgetForm />
			</div>
		</div>
	</Styles>
);

const INITIAL_STATE = {
	email: '',
	error: '',
	resetMessage: '',
};

class PasswordForgetForm extends React.Component {
	constructor() {
		super();
		this.state = { ...INITIAL_STATE };
	}

	onSubmit = e => {
		const { email } = this.state;
		const resetMessage =
			'We have sent an email with reset link to your mailbox.';

		auth.doPasswordReset(email)
			.then(() =>
				this.setState({
					resetMessage: resetMessage,
					error: '',
				})
			)
			.catch(error =>
				this.setState({
					error: error,
					resetMessage: '',
				})
			);

		e.preventDefault();
	};

	render() {
		const { email, error, resetMessage } = this.state;
		const isInvalid = email === '';

		return (
			<form onSubmit={this.onSubmit}>
				<FormGroup>
					<FormControl
						value={email}
						onChange={e =>
							this.setState({ email: e.target.value })
						}
						placeholder="Enter your email"
					/>
				</FormGroup>
				<FormGroup>
					<Button type="submit" disabled={isInvalid}>
						Reset password
					</Button>
				</FormGroup>
				{error && <p>{error.message}</p>}
				<p>{resetMessage}</p>
			</form>
		);
	}
}

const PasswordForgetLink = () => (
	<p>
		Forgot you password?{' '}
		<Link to={routes.PASSWORD_FORGET}>Reset password</Link>
	</p>
);

export default PasswordForgetPage;

export { PasswordForgetLink };

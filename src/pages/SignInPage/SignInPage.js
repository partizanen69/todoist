import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { FormGroup, FormControl, Button } from 'react-bootstrap';

import { auth } from '../../firebase';
import * as routes from '../../constants/routes';
import { PasswordForgetLink } from '../PasswordForget/PasswordForget';
import Styles from './Styles';

const SignInPage = ({ history }) => (
	<Styles>
		<div className="wrapper">
			<span>
				To test the application you can:
				<ul>
					<li>register a new user</li>
					<li>
						use existing user: login -
						alexey_ablitsov@mail.ru pass - 111111
					</li>
				</ul>
			</span>
			<div>
				<h1>Sign in</h1>
				<SignInForm history={history} />
				<SignUpLink />
				<PasswordForgetLink />
			</div>
		</div>
	</Styles>
);

const INITIAL_STATE = {
	email: '',
	password: '',
	error: null,
};

class SignInForm extends React.Component {
	constructor() {
		super();
		this.state = { ...INITIAL_STATE };
	}

	onSubmit = e => {
		const { email, password } = this.state;
		const { history } = this.props;

		auth.doSignInWithEmailAndPassword(email, password)
			.then(() => {
				this.setState(() => ({ ...INITIAL_STATE }));
				history.push(routes.USER_TODO_LIST);
			})
			.catch(error => this.setState({ error: error }));

		e.preventDefault();
		console.log('success');
	};

	render() {
		const { email, password, error } = this.state;
		const isInvalid = email === '' || password === '';
		return (
			<form onSubmit={this.onSubmit}>
				<FormGroup>
					<FormControl
						type="text"
						value={email}
						onChange={e =>
							this.setState({ email: e.target.value })
						}
						placeholder="Your email"
					/>
				</FormGroup>
				<FormGroup>
					<FormControl
						value={password}
						onChange={e =>
							this.setState({
								password: e.target.value,
							})
						}
						type="password"
						placeholder="Password"
					/>
				</FormGroup>
				<FormGroup>
					<Button disabled={isInvalid} type="submit">
						Sign in
					</Button>
				</FormGroup>
				{error && <p>{error.message}</p>}
			</form>
		);
	}
}

const SignUpLink = () => (
	<p>
		Don't have an account?{' '}
		<Link to={routes.SIGN_UP}>Sign up</Link>
	</p>
);

export default withRouter(SignInPage);

export { SignInForm, SignUpLink };

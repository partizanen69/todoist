import React from 'react';
import { withRouter } from 'react-router-dom';
import { FormGroup, FormControl, Button } from 'react-bootstrap';

import * as routes from '../../constants/routes';
import { auth, db } from '../../firebase';
import { PasswordForgetLink } from '../PasswordForget/PasswordForget';
import Styles from './Styles';
import PassValidationPopUp from './PassValidationPopUp/PassValidationPopUp';

const SignUpPage = ({ history }) => (
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
				<h1>Sign Up</h1>
				<SignUpForm history={history} />
				<PasswordForgetLink />
			</div>
		</div>
	</Styles>
);

const INITIAL_STATE = {
	username: '',
	email: '',
	passwordOne: '',
	passwordTwo: '',
	error: null,
	isPopUpShow: false,
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
				db.doCreateUser(authUser.uid, username, email).then(
					() => {
						this.setState(() => ({ ...INITIAL_STATE }));
						history.push(routes.USER_TODO_LIST);
					}
				);
			})
			.catch(error => {
				this.setState({ error: error });
			});
		e.preventDefault();
	};

	render() {
		const {
			username,
			email,
			passwordOne,
			passwordTwo,
			error,
			isPopUpShow,
		} = this.state;

		const passLength = passwordOne.length >= 8;
		const patternSpecChar = /[!@#$%^&*(),.'?":;\\{}/|[\]<>`]/g;
		const specChar = patternSpecChar.test(passwordOne);
		const patternUpper = /[A-Z]+/g;
		const upperLetter = patternUpper.test(passwordOne);
		const passMatch =
			passwordOne === passwordTwo && passwordTwo !== '';
		const finalValidation =
			passLength && specChar && upperLetter && passMatch;

		return (
			<form onSubmit={this.onSubmit}>
				<FormGroup>
					<FormControl
						type="text"
						value={username}
						onChange={e =>
							this.setState({
								username: e.target.value,
							})
						}
						placeholder="Login"
					/>
				</FormGroup>
				<FormGroup>
					<FormControl
						value={email}
						onChange={e =>
							this.setState({ email: e.target.value })
						}
						placeholder="Email Address"
					/>
				</FormGroup>
				<FormGroup>
					<FormControl
						value={passwordOne}
						onChange={e =>
							this.setState({
								passwordOne: e.target.value,
							})
						}
						type="password"
						placeholder="Password"
						onFocus={() =>
							this.setState({ isPopUpShow: true })
						}
						onBlur={() =>
							this.setState({ isPopUpShow: false })
						}
					/>
					{isPopUpShow && (
						<PassValidationPopUp
							passLength={passLength}
							specChar={specChar}
							upperLetter={upperLetter}
							passMatch={passMatch}
						/>
					)}
				</FormGroup>
				<FormGroup>
					<FormControl
						value={passwordTwo}
						onChange={e =>
							this.setState({
								passwordTwo: e.target.value,
							})
						}
						type="password"
						placeholder="Confirm Password"
						onFocus={() =>
							this.setState({ isPopUpShow: true })
						}
						onBlur={() =>
							this.setState({ isPopUpShow: false })
						}
					/>
				</FormGroup>
				<FormGroup>
					<Button type="submit" disabled={!finalValidation}>
						Sign Up
					</Button>
				</FormGroup>

				{error && <p className="error">{error.message}</p>}
			</form>
		);
	}
}

export default withRouter(SignUpPage);

export { SignUpForm };

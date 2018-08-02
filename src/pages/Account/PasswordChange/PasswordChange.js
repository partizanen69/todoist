import React from 'react';
import * as firebase from 'firebase';
import { Button, FormGroup, FormControl } from 'react-bootstrap';

const INITIAL_STATE = {
	currentPass: '',
	newPass: '',
	newPassConfirm: '',
	error: '',
	successMessage: '',
};

class PasswordChange extends React.Component {
	constructor() {
		super();
		this.state = { ...INITIAL_STATE };
	}

	func = e => {
		e.preventDefault();
		const user = firebase.auth().currentUser;
		const { currentPass, newPass } = this.state;
		const credential = firebase.auth.EmailAuthProvider.credential(
			user.email,
			currentPass
		);

		user.reauthenticateAndRetrieveDataWithCredential(credential)
			.then(() => {
				user.updatePassword(newPass);
				this.setState({ ...INITIAL_STATE });
			})
			.then(() => {
				this.setState({
					error: '',
					successMessage: 'Your password has been changed.',
				});
			})
			.catch(error => this.setState({ error: error.message }));
	};

	render() {
		const {
			currentPass,
			newPass,
			newPassConfirm,
			error,
			successMessage,
		} = this.state;

		const isInvalid =
			(currentPass === '' ||
				newPass === '' ||
				newPassConfirm === '') &&
			newPass !== newPassConfirm;

		return (
			<div>
				<div className="form">
					<form onSubmit={this.func}>
						<FormGroup>
							<FormControl
								value={currentPass}
								onChange={e =>
									this.setState({
										currentPass: e.target.value,
									})
								}
								placeholder="Enter your current password"
								type="password"
							/>
						</FormGroup>
						<FormGroup>
							<FormControl
								value={newPass}
								onChange={e =>
									this.setState({
										newPass: e.target.value,
									})
								}
								placeholder="Enter your new password"
								type="password"
							/>
						</FormGroup>
						<FormGroup>
							<FormControl
								value={newPassConfirm}
								onChange={e =>
									this.setState({
										newPassConfirm:
											e.target.value,
									})
								}
								placeholder="Confirm your new password"
								type="password"
							/>
						</FormGroup>
						<FormGroup>
							<Button
								type="submit"
								disabled={isInvalid}>
								Submit
							</Button>
						</FormGroup>
					</form>
				</div>
				{error && <p>{error}</p>}
				{successMessage && <p>{successMessage}</p>}
			</div>
		);
	}
}

export default PasswordChange;

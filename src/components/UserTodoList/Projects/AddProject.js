import React from 'react';
import { FormGroup, FormControl, Button } from 'react-bootstrap';

import firebase from '../../../firebase/firebase';

class AddProject extends React.Component {
	constructor() {
		super();
		this.state = {
			inputValue: '',
		};
	}

	onSubmit = e => {
		e.preventDefault();
		const { inputValue } = this.state;
		const { uid, cancelProjForm } = this.props;
		firebase
			.database()
			.ref('users/' + uid + '/projects')
			.push(inputValue);

		this.setState({inputValue: ''});
	};

	render() {
		const { inputValue } = this.state;
		const { cancelProjForm } = this.props;

		return (
			<div className="add-project-container">
				<form onSubmit={this.onSubmit}>
					<FormGroup>
					<FormControl
						value={inputValue}
						onChange={e =>
							this.setState({ inputValue: e.target.value })
						}
						placeholder="Add new project"
					/>
					<Button type="submit">Add project</Button>
					<Button onClick={cancelProjForm}>Cancel</Button>
					</FormGroup>
				</form>
			</div>
		);
	}
}

export default AddProject;
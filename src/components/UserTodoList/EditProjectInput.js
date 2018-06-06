import React from 'react';
import { Button, FormGroup, FormControl } from 'react-bootstrap';

import firebase from '../../firebase/firebase';

class EditProjectInput extends React.Component {
	constructor() {
		super();
		this.state = {
			inputValue: ''
		}
	}

	saveProject = (e) => {
		e.preventDefault();
		const { inputValue } = this.state;
		const { uid, projectId } = this.props;
		firebase
			.database()
			.ref('users/' + uid + '/projects/' + projectId)
			.set(inputValue);

		this.props.saveProject();

	}

	render() {
		const { inputValue } = this.state;
		const { projectId } = this.props;

		return <div>
			<FormGroup>
				<FormControl 
					type="text"
					value={inputValue}
					onChange={(e) => 
						this.setState({inputValue: e.target.value})}
				/>
			</FormGroup>
			<FormGroup>
				<Button
					onClick={this.saveProject}
				>
					Save
				</Button>
				<Button>
					Cancel
				</Button>
			</FormGroup>
		</div>
	}
}

export default EditProjectInput;
import React from 'react';
import { Button, FormGroup, FormControl } from 'react-bootstrap';

import firebase from '../../../firebase/firebase';

class EditTagInput extends React.Component {
	constructor() {
		super();
		this.state = {
			inputValue: ''
		}
	}

	componentDidMount() {
		this.setState({inputValue: this.props.value})
	}

	saveTag = (e) => {
		e.preventDefault();
		const { inputValue } = this.state;
		const { uid, tagId } = this.props;
		firebase
			.database()
			.ref('users/' + uid + '/tags/' + tagId)
			.set(inputValue);

		this.props.saveTag();

	}

	render() {
		const { inputValue } = this.state;
		const { cancelEdit } = this.props;

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
					onClick={this.saveTag}
				>
					Save
				</Button>
				<Button onClick={cancelEdit}>
					Cancel
				</Button>
			</FormGroup>
		</div>
	}
}

export default EditTagInput;
import React from 'react';
import { FormGroup, FormControl, Button } from 'react-bootstrap';

import firebase from '../../../firebase/firebase';

class AddTag extends React.Component {
	constructor() {
		super();
		this.state = {
			inputValue: '',
		};
	}

	onSubmit = e => {
		e.preventDefault();
		const { inputValue } = this.state;
		const { uid } = this.props;
		firebase
			.database()
			.ref('users/' + uid + '/tags')
			.push(inputValue);

		this.setState({ inputValue: '' });
	};

	render() {
		const { inputValue } = this.state;
		const { cancelTagForm } = this.props;

		return (
			<div className="add-tag-container">
				<form onSubmit={this.onSubmit}>
					<FormGroup>
						<FormControl
							value={inputValue}
							onChange={e =>
								this.setState({
									inputValue: e.target.value,
								})
							}
							placeholder="Add new tag"
						/>
						<Button type="submit">Add tag</Button>
						<Button onClick={cancelTagForm}>
							Cancel
						</Button>
					</FormGroup>
				</form>
			</div>
		);
	}
}

export default AddTag;

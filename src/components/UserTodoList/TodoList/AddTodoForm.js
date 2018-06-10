import React from 'react';
import { IoAndroidAdd } from 'react-icons/lib/io/';

import firebase from '../../../firebase/firebase';

class AddTodoForm extends React.Component {
	constructor() {
		super();
		this.state = {
			addItemOpen: false,
			inputValue: ''
		};
	}

	onSubmit = e => {
		e.preventDefault();
		const { inputValue } = this.state;
		const { uid } = this.props;
		firebase
			.database()
			.ref('users/' + uid + '/todoList')
			.push(inputValue);
	};

	render() {
		const { inputValue } = this.state;

		return (
			<div>
				<a href className="add-task-link">
					<span><IoAndroidAdd /></span>
					Add task
				</a>
				<form onSubmit={this.onSubmit}>
					<input
						value={inputValue}
						onChange={e =>
							this.setState({ inputValue: e.target.value })
						}
						placeholder="Enter you todo item"
					/>
					<button type="submit" disabled={inputValue === ''}>
						Add todo item
					</button>
				</form>
			</div>
		);
	}
}

export default AddTodoForm;
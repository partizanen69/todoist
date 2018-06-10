import React from 'react';
import { IoAndroidAdd } from 'react-icons/lib/io/';
import { FaTags, FaFileTextO, FaFlagO } from 'react-icons/lib/fa/';
import { FormGroup, FormControl, Button } from 'react-bootstrap';

import firebase from '../../../firebase/firebase';

class AddTodoForm extends React.Component {
	constructor() {
		super();
		this.state = {
			addItemOpen: true,
		};
	}

	showForm = () => this.setState({ addItemOpen: true });
	hideForm = () => this.setState({ addItemOpen: false });

	render() {
		const { addItemOpen } = this.state;

		return (
			<div>
				{addItemOpen ? (
					<TodoForm hideForm={this.hideForm} />
				) : (
					<AddTodoButton showForm={this.showForm} />
				)}
			</div>
		);
	}
}

class AddTodoButton extends React.Component {
	constructor() {
		super();
	}

	render() {
		const { showForm } = this.props;
		return (
			<div className="add-task-link" onClick={showForm}>
				<span>
					<IoAndroidAdd />
				</span>
				Add task
			</div>
		);
	}
}

class TodoForm extends React.Component {
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
			.ref('users/' + uid + '/todoList')
			.push(inputValue);
	};

	render() {
		const { inputValue } = this.state;
		const { hideForm } = this.props;
		return (
			<form onSubmit={this.onSubmit}>
				<FormGroup>
					<FormControl
						value={inputValue}
						onChange={e =>
							this.setState({
								inputValue: e.target.value,
							})
						}
						placeholder="Enter you todo item"
					/>
					<Button
						type="submit"
						disabled={inputValue === ''}>
						Add todo item
					</Button>
					<Button onClick={hideForm}>Cancel</Button>
					<FaTags />
					<FaFileTextO />
					<FaFlagO />
				</FormGroup>
			</form>
		);
	}
}

export default AddTodoForm;

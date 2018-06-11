import React from 'react';

import AddTodoButton from './AddTodoButton';
import TodoForm from './TodoForm';

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
		const { uid } = this.props;

		return (
			<div>
				{addItemOpen ? (
					<TodoForm uid={uid} hideForm={this.hideForm} />
				) : (
					<AddTodoButton showForm={this.showForm} />
				)}
			</div>
		);
	}
}

export default AddTodoForm;

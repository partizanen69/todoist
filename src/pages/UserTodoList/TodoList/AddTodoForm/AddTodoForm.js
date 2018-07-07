import React from 'react';

import AddTodoButton from './AddTodoButton/AddTodoButton';
import TodoForm from './TodoForm/TodoForm';

class AddTodoForm extends React.Component {
	constructor() {
		super();
		this.state = {
			addItemOpen: false,
		};
	}

	showForm = () => this.setState({ addItemOpen: true });
	hideForm = () => this.setState({ addItemOpen: false });

	render() {
		const { addItemOpen } = this.state;
		const { uid, userDatabase } = this.props;

		return (
			<div>
				{addItemOpen ? (
					<TodoForm
						uid={uid}
						hideForm={this.hideForm}
						userDatabase={userDatabase}
					/>
				) : (
					<AddTodoButton showForm={this.showForm} />
				)}
			</div>
		);
	}
}

export default AddTodoForm;

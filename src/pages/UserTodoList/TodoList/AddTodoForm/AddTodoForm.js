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

	toggleForm = () =>
		this.setState({ addItemOpen: !this.state.addItemOpen });
	hideForm = () => this.setState({ addItemOpen: false });

	render() {
		const { addItemOpen } = this.state;
		const { uid, userDatabase } = this.props;

		return (
			<div>
				<AddTodoButton
					addItemOpen={addItemOpen}
					toggleForm={this.toggleForm}
				/>
				{addItemOpen && (
					<TodoForm
						uid={uid}
						hideForm={this.hideForm}
						userDatabase={userDatabase}
					/>
				)}
			</div>
		);
	}
}

export default AddTodoForm;

import React from 'react';
import { IoAndroidAdd } from 'react-icons/lib/io/';

class AddTodoButton extends React.Component {
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

export default AddTodoButton;

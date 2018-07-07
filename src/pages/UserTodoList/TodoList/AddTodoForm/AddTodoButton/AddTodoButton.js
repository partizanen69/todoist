import React from 'react';
import { IoAndroidAdd } from 'react-icons/lib/io/';
import { FaMinus } from 'react-icons/lib/fa/';

class AddTodoButton extends React.Component {
	render() {
		const { toggleForm, addItemOpen } = this.props;
		return (
			<div className="add-task-link" onClick={toggleForm}>
				<span>
					{addItemOpen ? <FaMinus /> : <IoAndroidAdd />}
				</span>
				{addItemOpen ? 'Hide form' : 'Add task'}
			</div>
		);
	}
}

export default AddTodoButton;

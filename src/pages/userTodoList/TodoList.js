import React from 'react';

import AddTodoForm from './todoList/AddTodoForm';
import TodoItems from './todoList/TodoItems';
import Styles from './todoList/Styles';

class TodoList extends React.Component {
	render() {
		const { uid, userDatabase } = this.props;
		return (
			<Styles>
				<div>
					<AddTodoForm
						uid={uid}
						userDatabase={userDatabase}
					/>
					<TodoItems
						uid={uid}
						userDatabase={userDatabase}
					/>
				</div>
			</Styles>
		);
	}
}

export default TodoList;

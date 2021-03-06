import React from 'react';

import AddTodoForm from './AddTodoForm/AddTodoForm';
import TodoItems from './TodoItems/TodoItems';
import Styles from './Styles';

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

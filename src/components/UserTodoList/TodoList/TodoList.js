import React from 'react';

import AddTodoForm from './AddTodoForm';
import TodoItems from './TodoItems'; 
import Styles from './Styles';

class TodoList extends React.Component {
	constructor() {
		super();
	}

	render() {
		const { uid, userDatabase } = this.props;
		return <Styles> 
			<div>
				<AddTodoForm uid={uid} />
				<TodoItems 
					uid={uid}
					userDatabase={userDatabase}
				/>
			</div>
		</Styles>
	}
}

export default TodoList;
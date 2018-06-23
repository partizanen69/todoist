import React from 'react';

import firebase from '../../../../firebase/firebase';
import Styles from './Styles';
import CompleteButton from './CompleteButton/CompleteButton';
import TodoItemText from './TodoItemText/TodoItemText';

class TodoItems extends React.Component {
	constructor() {
		super();
		this.state = {
			todoList: [],
		};
	}

	static getDerivedStateFromProps(props, state) {
		const { todoList } = props.userDatabase;
		let a = todoList ? Object.entries(todoList) : '';
		return { todoList: a };
	}

	delItem = key => {
		const { uid } = this.props;
		firebase
			.database()
			.ref('users/' + uid + '/todoList/' + key)
			.remove();
	};

	render() {
		const { todoList } = this.state;
		return (
			<Styles>
				{todoList &&
					todoList.map(
						([
							key,
							{
								project,
								tags,
								toDoText,
								priority,
								comment,
								date,
							},
						]) => {
							return (
								<div key={key}>
									<div className="todo-item">
										<CompleteButton
											priority={priority}
										/>
										<div>
											<TodoItemText
												text={toDoText}
											/>
											<p>{tags}</p>
											<p>{comment}</p>
										</div>
										<div>{project}</div>
										<div>{date}</div>
									</div>
									<div
										onClick={this.delItem.bind(
											null,
											key
										)}>
										Delete
									</div>
								</div>
							);
						}
					)}
			</Styles>
		);
	}
}

export default TodoItems;

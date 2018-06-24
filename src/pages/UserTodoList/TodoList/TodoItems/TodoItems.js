import React from 'react';
import { Row, Col } from 'react-bootstrap';

import firebase from '../../../../firebase/firebase';
import Styles from './Styles';
import CompleteButton from './CompleteButton/CompleteButton';
import TodoItemText from './TodoItemText/TodoItemText';
import TodoItemDate from './TodoItemDate/TodoItemDate';
import TodoItemTags from './TodoItemTags/TodoItemTags';
import TodoItemComment from './TodoItemComment/TodoItemComment';

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
											<TodoItemTags
												tags={tags}
											/>
											<TodoItemComment
												comment={comment}
											/>
										</div>
										<div>{project}</div>
										<TodoItemDate date={date} />
									</div>
									<button
										onClick={this.delItem.bind(
											null,
											key
										)}>
										Delete
									</button>
								</div>
							);
						}
					)}
			</Styles>
		);
	}
}

export default TodoItems;

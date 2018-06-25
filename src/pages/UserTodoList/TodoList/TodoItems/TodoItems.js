import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';

import firebase from '../../../../firebase/firebase';
import Styles from './Styles';
import CompleteButton from './CompleteButton/CompleteButton';
import TodoItemText from './TodoItemText/TodoItemText';
import TodoItemDate from './TodoItemDate/TodoItemDate';
import TodoItemTags from './TodoItemTags/TodoItemTags';
import TodoItemComment from './TodoItemComment/TodoItemComment';
import TodoItemProject from './TodoItemProject/TodoItemProject';
import DelTodoItem from './DelTodoItem/DelTodoItem';
import CompleteItem from './CompleteItem/CompleteItem';

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

	render() {
		const { todoList } = this.state;
		const { uid } = this.props;
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
								completed,
							},
						]) => {
							return (
								<div key={key} className="todo-item">
									<CompleteButton
										priority={priority}
										completed={completed}
									/>
									<div>
										<TodoItemText
											text={toDoText}
											completed={completed}
										/>
										<TodoItemTags tags={tags} />
										<TodoItemComment
											comment={comment}
											uid={uid}
											fireBaseKey={key}
										/>
										<TodoItemProject
											project={project}
										/>
									</div>
									<div>
										<TodoItemDate date={date} />
										<DelTodoItem
											fireBaseKey={key}
											uid={uid}
										/>
										<CompleteItem
											fireBaseKey={key}
											uid={uid}
											completed={completed}
										/>
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

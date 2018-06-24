import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { MdDeleteForever, MdDone } from 'react-icons/lib/md/';

import firebase from '../../../../firebase/firebase';
import Styles from './Styles';
import CompleteButton from './CompleteButton/CompleteButton';
import TodoItemText from './TodoItemText/TodoItemText';
import TodoItemDate from './TodoItemDate/TodoItemDate';
import TodoItemTags from './TodoItemTags/TodoItemTags';
import TodoItemComment from './TodoItemComment/TodoItemComment';
import TodoItemProject from './TodoItemProject/TodoItemProject';

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
							},
						]) => {
							return (
								<div key={key} className="todo-item">
									<CompleteButton
										priority={priority}
									/>
									<div>
										<TodoItemText
											text={toDoText}
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
										<div
											className="button"
											onClick={this.delItem.bind(
												null,
												key
											)}>
											<MdDeleteForever />delete
										</div>
										<div className="button">
											<MdDone />complete
										</div>
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

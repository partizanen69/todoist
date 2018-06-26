import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';

import firebase from '../../../../firebase/firebase';
import Styles from './Styles';
import FilterButtons from './FilterButtons/FilterButtons';
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
			filter: {},
		};
	}

	static getDerivedStateFromProps(props, state) {
		const { todoList } = props.userDatabase;
		let a = todoList ? Object.entries(todoList) : '';
		return { todoList: a };
	}

	formFilterCondition = (property, value) => {
		const { filter } = this.state;
		filter[property] = value;
		this.setState({ filter }, () =>
			console.log(this.state.filter)
		);
	};

	render() {
		const { todoList, filter } = this.state;
		const { uid, userDatabase } = this.props;
		return (
			<Styles>
				<FilterButtons
					formFilterCondition={this.formFilterCondition}
					userDatabase={userDatabase}
				/>
				{todoList &&
					todoList
						.filter(item => {
							for (var key in filter) {
								if (
									item[1][key] === undefined ||
									item[1][key] != filter[key]
								)
									return false;
							}
							return true;
						})
						.map(
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
									<div
										key={key}
										className="todo-item">
										<CompleteButton
											priority={priority}
											completed={completed}
										/>
										<div>
											<TodoItemText
												text={toDoText}
												completed={completed}
											/>
											<TodoItemTags
												tags={tags}
											/>
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
											<TodoItemDate
												date={date}
											/>
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

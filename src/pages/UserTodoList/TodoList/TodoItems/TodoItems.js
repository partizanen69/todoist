import React from 'react';

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
			filter: {
				project: '',
				completed: '',
				tags: [],
				dateRange: [],
				itemText: '',
			},
			isRangeShow: false,
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

	clearFilter = () => {
		this.setState({
			filter: {
				project: '',
				completed: '',
				tags: [],
				dateRange: [],
			},
			isRangeShow: false,
		});
	};

	isObjEmpty = obj => {
		return Object.values(obj).length === 0;
	};

	showRange = () => {
		this.setState({ isRangeShow: true });
	};

	render() {
		const { todoList, filter, isRangeShow } = this.state;
		const { uid, userDatabase } = this.props;
		return (
			<Styles>
				<FilterButtons
					formFilterCondition={this.formFilterCondition}
					userDatabase={userDatabase}
					clearFilter={this.clearFilter}
					filter={filter}
					showRange={this.showRange}
					isRangeShow={isRangeShow}
				/>
				{todoList &&
					todoList
						.filter(item => {
							var ok = true;

							if (filter['project'] !== '') {
								ok =
									filter['project'] ===
									item[1]['project'];
							}

							if (ok && filter['completed'] !== '') {
								ok =
									filter['completed'] ===
									item[1]['completed'];
							}

							if (
								ok !== false &&
								filter['tags'].length > 0
							) {
								ok = filter['tags'].every(
									val =>
										item[1]['tags'].indexOf(
											val
										) >= 0
								);
							}

							if (
								ok !== false &&
								filter['dateRange'].length > 0
							) {
								ok =
									item[1]['date'] >=
										filter['dateRange'][0] &&
									item[1]['date'] <=
										filter['dateRange'][1];
							}

							if (ok && filter['itemText'] !== '') {
								ok = item[1]['toDoText']
									.toLowerCase()
									.includes(
										filter[
											'itemText'
										].toLowerCase()
									);
							}

							return ok;
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

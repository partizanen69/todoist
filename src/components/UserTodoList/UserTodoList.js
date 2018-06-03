import React from 'react';

import withAuthorization from '../withAuthorization';
import firebase from '../../firebase/firebase';
import { AddProject, ProjectList } from './Projects';

class UserTodoList extends React.Component {
	constructor() {
		super();
		this.state = {
			uid: '',
		};
	}

	componentDidMount() {
		this.setState({ uid: firebase.auth().currentUser.uid });
	}

	render() {
		const { uid } = this.state;

		return (
			<div>
				{uid && <AddProject uid={uid} />}
				{uid && <ProjectList uid={uid} />}
				{uid && <AddTodoForm uid={uid} />}
				{uid && <UserTodoItems uid={uid} />}
			</div>
		);
	}
}

class AddTodoForm extends React.Component {
	constructor() {
		super();
		this.state = {
			inputValue: '',
		};
	}

	onSubmit = e => {
		e.preventDefault();
		const inputValue = this.state.inputValue;
		const { uid } = this.props;
		firebase
			.database()
			.ref('users/' + uid + '/todoList')
			.push(inputValue);
	};

	render() {
		const { inputValue } = this.state;

		return (
			<div>
				<h1>Your todo list application</h1>
				<form onSubmit={this.onSubmit}>
					<input
						value={inputValue}
						onChange={e =>
							this.setState({ inputValue: e.target.value })
						}
						placeholder="Enter you todo item"
					/>
					<button type="submit" disabled={inputValue === ''}>
						Add todo item
					</button>
				</form>
			</div>
		);
	}
}

class UserTodoItems extends React.Component {
	constructor() {
		super();
		this.state = {
			userTodoList: {},
			uid: '',
		};
	}

	componentDidMount() {
		const { uid } = this.props;
		const userTodoList = firebase
			.database()
			.ref('users/' + uid + '/todoList');
		userTodoList.on('value', snapshot => {
			let obj = snapshot.val();
			this.setState({
				userTodoList: obj,
			});
		});
	}

	render() {
		const { userTodoList } = this.state;
		return (
			<div>
				{userTodoList &&
					Object.values(userTodoList).map((item, key) => (
						<p key={key}>{item}</p>
					))}
			</div>
		);
	}
}

const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(UserTodoList);

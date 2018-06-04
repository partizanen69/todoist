import React from 'react';

import withAuthorization from '../withAuthorization';
import firebase from '../../firebase/firebase';
import { AddProject, ProjectList } from './Projects';

class UserTodoList extends React.Component {
	constructor() {
		super();
		this.state = {
			uid: '',
			userDatabase: {},
		};
	}

	componentDidMount() {
		const { uid } = firebase.auth().currentUser;
		const userDatabase = firebase.database().ref('users/' + uid);

		userDatabase.on('value', snapshot => {
			let obj = snapshot.val();
			this.setState({
				userDatabase: obj,
				uid: uid,
			});
		});
	}

	render() {
		const { uid, userDatabase } = this.state;

		return (
			<div>
				{uid && <AddProject uid={uid} />}
				{uid && <ProjectList uid={uid} userDatabase={userDatabase} />}
				{uid && <AddTodoForm uid={uid} />}
				{uid && <UserTodoItems uid={uid} userDatabase={userDatabase} />}
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
		const { inputValue } = this.state;
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
		this.state = {};
	}

	render() {
		const { todoList } = this.props.userDatabase;
		return (
			<div>
				{Object.values(todoList).map((item, key) => {
					return <p key={key}>{item}</p>;
				})}
			</div>
		);
	}
}

const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(UserTodoList);

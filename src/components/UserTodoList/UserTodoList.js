import React from 'react';
import { Row, Col } from 'react-bootstrap';

import withAuthorization from '../withAuthorization';
import firebase from '../../firebase/firebase';
import Projects from './Projects';
import Styles from './Styles';

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
			<Styles>
				<Row>
					<Col sm={4}>
						<Projects 
							uid={uid} 
							userDatabase={userDatabase}
						/>
					</Col>
					<Col sm={8}>
						<AddTodoForm uid={uid} />
						<UserTodoItems
							uid={uid}
							userDatabase={userDatabase}
						/>
					</Col>
				</Row>
			</Styles>
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
				{todoList && Object.values(todoList).map((item, key) => {
					return <p key={key}>{item}</p>;
				})}
			</div>
		);
	}
}

const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(UserTodoList);

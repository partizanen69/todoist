import React from 'react';
import { Row, Col } from 'react-bootstrap';

import withAuthorization from '../withAuthorization';
import firebase from '../../firebase/firebase';
import Projects from './Projects/Projects';
import Tags from './Tags/Tags';
import TodoList from './TodoList/TodoList';

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
			<Row>
				<Col sm={3}>
					<Projects 
						uid={uid} 
						userDatabase={userDatabase}
					/>
					<Tags 
						uid={uid} 
						userDatabase={userDatabase}
					/>
				</Col>
				<Col sm={9}>
					<TodoList
						uid={uid}
						userDatabase={userDatabase}
					/>
				</Col>
			</Row>
		);
	}
}

const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(UserTodoList);

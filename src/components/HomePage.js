import React from 'react';

import withAuthorization from './withAuthorization';
import firebase from "../firebase/firebase";


const HomePage = () =>
	<div>
		<AddTodoForm />
		<UserTodoList />
	</div>

class AddTodoForm extends React.Component {
	constructor() {
		super();
		this.state = {
			inputValue: '',
			userDatabase: {},
			uid: ''
		}
	}

	componentDidMount() {
	    this.setState({uid: firebase.auth().currentUser.uid});
	    const { uid } = this.state;
	    const userDatabase = firebase.database().ref('users/' + uid);
	    userDatabase.on('value', snapshot => {
	      let obj = snapshot.val();
	      this.setState({
	        userDatabase: obj
	      })
	    })
	  }

	onSubmit = (e) => {
		e.preventDefault();
		const { uid, inputValue } = this.state;
		firebase.database().ref('users/' + uid + '/todoList').push(inputValue);
	}

	render() {
		const { inputValue } = this.state;

		return <div>
			<h1>Your todo list application</h1>
			<form onSubmit={this.onSubmit}>
				<input 
					value={inputValue}
					onChange={(e) => this.setState({inputValue: e.target.value})}
					placeholder="Enter you todo item"

				/>
				<button 
					type="submit"
					disabled={inputValue === ''}
				>
					Add todo item
				</button>
			</form>
		</div>
	}
}

class UserTodoList extends React.Component {
	constructor() {
		super();
		this.state = {
			uid: '',
			userTodoList: {}
		}
	}

	componentDidMount() {
	    const { uid } = firebase.auth().currentUser; 
	    const userTodoList = firebase.database().ref('users/' + uid + '/todoList');
	    
	    userTodoList.on('value', snapshot => {
	      let obj = snapshot.val();
	      this.setState({
	        userTodoList: obj,
	        uid: uid
	      })
	    })
  	}

	render() {
		const { userTodoList } = this.state;
		return <div>
			{userTodoList && Object.values(userTodoList).map((item, key) => <p key={key}>{item}</p>)}
		</div>
	}
}

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(HomePage);
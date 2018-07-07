import React from 'react';

import withAuthorization from '../../withAuthorization';
import firebase from '../../firebase/firebase';
import Projects from './Projects/Projects';
import Tags from './Tags/Tags';
import TodoList from './TodoList/TodoList';
import Styles from './Styles';
import OpenSideBarArrow from './OpenSideBarArrow/OpenSideBarArrow';

class UserTodoList extends React.Component {
	constructor() {
		super();
		this.state = {
			uid: '',
			userDatabase: {},
			isSideBarOpen: false,
			isScrollShow: false,
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

	openSideBar = () => {
		const { isSideBarOpen } = this.state;
		this.setState({ isSideBarOpen: !isSideBarOpen });
	};

	render() {
		const {
			uid,
			userDatabase,
			isSideBarOpen,
			isScrollShow,
		} = this.state;

		return (
			<Styles
				isScrollShow={isScrollShow}
				isSideBarOpen={isSideBarOpen}>
				<div
					className="left-wrapper"
					onMouseEnter={() =>
						this.setState({ isScrollShow: true })
					}
					onMouseLeave={() =>
						this.setState({ isScrollShow: false })
					}>
					<div className="left">
						<Projects
							uid={uid}
							userDatabase={userDatabase}
						/>
						<Tags uid={uid} userDatabase={userDatabase} />
					</div>
					<OpenSideBarArrow
						openSideBar={this.openSideBar}
						isSideBarOpen={isSideBarOpen}
					/>
				</div>
				<div className="right">
					<TodoList uid={uid} userDatabase={userDatabase} />
				</div>
			</Styles>
		);
	}
}

const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(UserTodoList);

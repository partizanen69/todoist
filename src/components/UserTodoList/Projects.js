import React from 'react';

import firebase from '../../firebase/firebase';

class AddProject extends React.Component {
	constructor() {
		super();
		this.state = {
			uid: '',
			inputValue: '',
		};
	}

	componentDidMount() {
		this.setState({ uid: firebase.auth().currentUser.uid });
	}

	onSubmit = e => {
		e.preventDefault();
		const { inputValue, uid } = this.state;
		firebase
			.database()
			.ref('users/' + uid + '/projects')
			.push(inputValue);
	};

	render() {
		const { inputValue } = this.state;

		return (
			<div>
				<form onSubmit={this.onSubmit}>
					<input
						value={inputValue}
						onChange={e =>
							this.setState({ inputValue: e.target.value })
						}
						placeholder="Add new project"
					/>
					<button type="submit">Add project</button>
				</form>
			</div>
		);
	}
}

class ProjectList extends React.Component {
	constructor() {
		super();
		this.state = {
			projects: {},
		};
	}

	componentDidMount() {
		const { uid } = this.props;

		const userProjects = firebase
			.database()
			.ref('users/' + uid + '/projects');

		userProjects.on('value', snapshot => {
			let obj = snapshot.val();
			this.setState({
				projects: obj,
			});
		});
	}

	render() {
		const { projects } = this.state;

		return (
			<div>
				<p>Projects</p>
				{Object.values(projects).map((item, key) => (
					<p key={key}>{item}</p>
				))}
				<button onClick={() => console.log(this.state.projects)}>
					Click
				</button>
			</div>
		);
	}
}

export { AddProject, ProjectList };

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
		const { uid } = this.props;

		this.setState({ uid: uid });
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
		this.state = {};
	}

	render() {
		const { projects } = this.props.userDatabase;

		return (
			<div>
				<p>Projects</p>
				{Object.values(projects).map((item, key) => (
					<p key={key}>{item}</p>
				))}
			</div>
		);
	}
}

export { AddProject, ProjectList };

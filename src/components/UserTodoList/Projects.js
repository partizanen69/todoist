import React from 'react';
import { Row, Col } from 'react-bootstrap';

import firebase from '../../firebase/firebase';
import EditProjectButton from './EditProjectButton';

class AddProject extends React.Component {
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
			.ref('users/' + uid + '/projects')
			.push(inputValue);
	};

	render() {
		const { inputValue } = this.state;

		return (
			<div>
				<p>Projects</p>
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
			editProject: ''
		};
	}

	editProjects(editProjectId, e) {
		console.log('editProjectId', editProjectId);
	}

	render() {
		const { projects } = this.props.userDatabase;
		const { uid } = this.props;

		return (
			<div>
				{Object.keys(projects).map(key => (
					<Row key={key}>
						<Col xs={9}>
							<div key={key}>
								{projects[key]}
							</div>
						</Col>
						<Col xs={3} key={key}>
							<EditProjectButton 
								projectId={key} 
								uid={uid}
								editProjects={this.editProjects.bind(this)} 
							/>
						</Col>
					</Row>
				))}
			</div>
		);
	}
}

export { AddProject, ProjectList };

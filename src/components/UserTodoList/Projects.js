import React from 'react';
import { Row, Col } from 'react-bootstrap';

import firebase from '../../firebase/firebase';
import EditProjectButton from './EditProjectButton';
import EditProjectInput from './EditProjectInput';

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
			editProjectId: ''
		};
	}

	editProjects = (projectId, e) => {
		console.log(projectId);
		this.setState({editProjectId: projectId});

	}

	saveProject = () => this.setState({editProjectId: ''})
	
	render() {
		const { projects } = this.props.userDatabase;
		const { uid } = this.props;
		const { editProjectId } = this.state;

		return (
			<div>
				{Object.keys(projects).map(key => (
					<Row key={key}>
						<Col xs={9}>
							<div key={key}>
								{editProjectId ===  key
									? <EditProjectInput 
										projectId={key} 
										saveProject={this.saveProject}
										uid={uid}
									  /> 
									: projects[key]}
							</div>
						</Col>
						<Col xs={3} key={key}>
							<EditProjectButton 
								projectId={key} 
								uid={uid}
								editProjects={this.editProjects} 
							/>
						</Col>
					</Row>
				))}
			</div>
		);
	}
}

export { AddProject, ProjectList };

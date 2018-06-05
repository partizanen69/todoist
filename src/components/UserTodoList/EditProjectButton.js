import React from 'react';
import { FaEdit } from 'react-icons/lib/fa/';
import firebase from '../../firebase/firebase';

class EditProjectButton extends React.Component {
	constructor() {
		super();
		this.state = {
			menuActive: false,
			editProjectId: ''
		};
	}


	editProject(projectId, e) {
		this.props.editProjects.bind(null, projectId);
		this.props.editProjects(projectId);
	}

	deleteProject(projectId, e) {
		const { uid } = this.props;
		console.log('uid', uid);
		console.log('projectId', projectId);
		firebase
			.database()
			.ref('users/' + uid + '/projects/' + projectId)
			.remove();
	}

	cancel() {
		this.setState({ menuActive: false });
	}

	render() {
		const { projectId, editProjects } = this.props;
		const { menuActive } = this.state;
		return (
			<span>
				<FaEdit
					className="project-edit-button"
					onClick={() => this.setState({ menuActive: true })}
				/>
				{menuActive && (
					<EditProjectMenu
						projectId={projectId}
						cancel={this.cancel.bind(this)}
						deleteProject={this.deleteProject.bind(this)}
						editProject={this.editProject.bind(this)}
					/>
					
				)}
				<button onClick={editProjects.bind(null, projectId)}>
						Click
					</button>
			</span>
		);
	}
}

class EditProjectMenu extends React.Component {
	constructor() {
		super();
	}

	render() {
		const { 
			projectId, 
			cancel, 
			deleteProject, 
			editProject 
		} = this.props;

		return (
			<div>
				<div 
					onClick={editProject.bind(null, projectId)}
				>
					Edit project
				</div>
				<div onClick={deleteProject.bind(null, projectId)}>
					Delete project
				</div>
				<div onClick={cancel}>Cancel</div>
			</div>
		);
	}
}

export default EditProjectButton;

import React from 'react';
import { FaCircle } from 'react-icons/lib/fa/';

import EditProjectInput from './EditProjectInput/EditProjectInput';
import EditProjectButton from './EditProjectButton/EditProjectButton';

class ProjectList extends React.Component {
	constructor() {
		super();
		this.state = {
			editProjectId: '',
			props: {},
		};
	}

	editProjects = (projectId, e) => {
		console.log(projectId);
		this.setState({ editProjectId: projectId });
	};

	cancelEdit = () => {
		this.setState({ editProjectId: '' });
	};

	saveProject = () => this.setState({ editProjectId: '' });

	static getDerivedStateFromProps(props, state) {
		return { props: props };
	}

	render() {
		const { projects } = this.state.props.userDatabase;
		const { uid } = this.state.props;
		const { editProjectId } = this.state;

		return (
			<div className="projects-list-container">
				{projects &&
					Object.keys(projects).map(key => (
						<div className="projects-row" key={key}>
							<div>
								<FaCircle className="circle" />
							</div>
							<div>
								{editProjectId === key ? (
									<EditProjectInput
										projectId={key}
										saveProject={this.saveProject}
										uid={uid}
										value={projects[key]}
										cancelEdit={this.cancelEdit}
									/>
								) : (
									projects[key]
								)}
							</div>
							<div>
								<EditProjectButton
									projectId={key}
									uid={uid}
									editProjects={this.editProjects}
								/>
							</div>
						</div>
					))}
			</div>
		);
	}
}

export default ProjectList;

import React from 'react';
import { Panel } from 'react-bootstrap';
import { IoAndroidAdd } from 'react-icons/lib/io/';
import { FaFileTextO } from 'react-icons/lib/fa/';

import Styles from './projects/Styles';
import ToggleArrow from '../../components/ToggleArrow/ToggleArrow';
import AddProject from './projects/AddProject';
import ProjectList from './projects/ProjectList';

class Projects extends React.Component {
	constructor() {
		super();
		this.state = {
			open: true,
			openAddProjForm: false,
		};
	}

	toggle = () => {
		const { open } = this.state;
		this.setState({ open: !open });
	};

	openAddProjForm = e => {
		const { open } = this.state;
		open && e.stopPropagation();
		this.setState({ openAddProjForm: true });
	};

	cancelProjForm = () => {
		this.setState({ openAddProjForm: false });
	};

	render() {
		const { uid, userDatabase } = this.props;
		const { open, openAddProjForm } = this.state;

		return (
			<Styles>
				<Panel onToggle={() => true} expanded={open}>
					<Panel.Heading onClick={this.toggle}>
						<Panel.Title>
							<ToggleArrow open={open} />
							<span className="panel-title-name">
								<FaFileTextO />
								Projects
							</span>
							<span className="add-project-button">
								<IoAndroidAdd
									onClick={this.openAddProjForm}
								/>
							</span>
						</Panel.Title>
					</Panel.Heading>
					<Panel.Collapse>
						<Panel.Body>
							{openAddProjForm && (
								<AddProject
									uid={uid}
									cancelProjForm={
										this.cancelProjForm
									}
								/>
							)}
							<ProjectList
								uid={uid}
								userDatabase={userDatabase}
							/>
							<div
								className="add-project-link"
								onClick={this.openAddProjForm}>
								<span>
									<IoAndroidAdd />
								</span>
								Add project
							</div>
						</Panel.Body>
					</Panel.Collapse>
				</Panel>
			</Styles>
		);
	}
}

export default Projects;

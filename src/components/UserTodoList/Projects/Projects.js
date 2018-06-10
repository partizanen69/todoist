import React from 'react';
import { Row, Col, FormGroup, FormControl, Button, Panel } from 'react-bootstrap';
import { IoAndroidAdd } from 'react-icons/lib/io/';

import firebase from '../../../firebase/firebase';
import Styles from './Styles';
import ToggleArrow from './ToggleArrow';
import AddProject from './AddProject';
import ProjectList from './ProjectList';

class Projects extends React.Component {
	constructor() {
		super();
		this.state = {
			open: true
		}
	}

	toggle = () => {
		const { open } = this.state;
		this.setState({open: !open});
	}

	render() {
		const { uid, userDatabase } = this.props;
		const { open } = this.state;

		return <Styles>
			<Panel 
				onToggle={() => true} 
				expanded={open}
			>
				<Panel.Heading 
					onClick={this.toggle}
					bsClass="projects-panel-heading"
				>
	            <Panel.Title>
					<ToggleArrow open={open} /> 
					Projects
					<span className="add-project-button">
						<IoAndroidAdd />
					</span>
	            </Panel.Title>
	          </Panel.Heading>
				<Panel.Collapse>
		            <Panel.Body>
						<AddProject uid={uid} />
						<ProjectList
							uid={uid}
							userDatabase={userDatabase}
						/>
					</Panel.Body>
				</Panel.Collapse>
		            
			</Panel>
		</Styles>
	}
}

export default Projects;

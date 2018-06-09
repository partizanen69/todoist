import React from 'react';
import { Row, Col, FormGroup, FormControl, Button, Panel } from 'react-bootstrap';
import { FaCircle } from 'react-icons/lib/fa/';

import firebase from '../../firebase/firebase';
import EditProjectButton from './EditProjectButton';
import EditProjectInput from './EditProjectInput';

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

		return (
		<Panel 
			onToggle={() => true} 
			expanded={open}
		>
			<Panel.Heading 
				onClick={this.toggle}
				bsClass="projects-panel-heading"
			>
            <Panel.Title >
              <ToggleArrow open={open} /> Projects
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
		)
	}
}

class ToggleArrow extends React.Component {
	constructor() {
		super();
		this.state = {
			turn: null
		}
	}

	static getDerivedStateFromProps(props, state) {
		const { open } = props;
		return { turn: open ? 0.875 : 0.375 }
	}

	render() {
		const { turn } = this.state;

		return ( 
			<div 
				className="toggle-arrow"
				style={{transform: `rotate(${turn}turn)`}}
			>
			</div>
		)
	}
}


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
				<form onSubmit={this.onSubmit}>
					<FormGroup>
					<FormControl
						value={inputValue}
						onChange={e =>
							this.setState({ inputValue: e.target.value })
						}
						placeholder="Add new project"
					/>
					</FormGroup>
					<FormGroup>
					<Button type="submit">Add project</Button>
					</FormGroup>
				</form>
			</div>
		);
	}
}

class ProjectList extends React.Component {
	constructor() {
		super();
		this.state = {
			editProjectId: '',
			props: {}
		};
	}

	editProjects = (projectId, e) => {
		console.log(projectId);
		this.setState({editProjectId: projectId});
	}

	cancelEdit = () => {
		this.setState({editProjectId: ''})
	}

	saveProject = () => this.setState({editProjectId: ''})
	
	static getDerivedStateFromProps(props, state) {
		return { props: props }
	}

	render() {
		const { projects } = this.state.props.userDatabase;
		const { uid } = this.state.props;
		const { editProjectId } = this.state;

		return (
			<div className="projects-list-container">
				{projects && Object.keys(projects).map(key => (
					<div className="projects-row" key={key}>
						<div>
							<FaCircle className="circle"/>
						</div>						
						<div>
							{editProjectId ===  key
								? <EditProjectInput 
									projectId={key} 
									saveProject={this.saveProject}
									uid={uid}
									value={projects[key]}
									cancelEdit={this.cancelEdit}
								  /> 
								: projects[key]
							}
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

export default Projects;

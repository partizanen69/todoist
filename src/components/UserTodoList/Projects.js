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
		this.state = {};
	}

	duHast(e, key) {
		console.log('event', e);
		console.log('event.target', e.target);
		console.log('e.screenX', e.screenX);
		console.log('e.screenY', e.screenY);
		console.log('key', key);
	}

	render() {
		const { projects } = this.props.userDatabase;

		return (
			<div>
				{Object.values(projects).map((item, key) => (
					<Row key={key}>
						<Col xs={9}>
							<p key={key}>{item}</p>
						</Col>
						<Col xs={3} key={key}>
							<EditProjectButton
								onClick={this.duHast.bind(this)}
								key={key}
							/>
						</Col>
					</Row>
				))}
			</div>
		);
	}
}

export { AddProject, ProjectList };

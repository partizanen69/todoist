import React from 'react';
import { FaEdit } from 'react-icons/lib/fa/';

class EditProjectButton extends React.Component {
	constructor() {
		super();
	}

	render() {
		const { onClick, key } = this.props;
		return (
			<span>
				<FaEdit
					className="project-edit-button"
					onClick={onClick.bind(null, key)}
				/>
			</span>
		);
	}
}

class EditProjectMenu extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div>
				<p>Edit project</p>
				<p>Delete project</p>
				<p>Cancel</p>
			</div>
		);
	}
}

export default EditProjectButton;

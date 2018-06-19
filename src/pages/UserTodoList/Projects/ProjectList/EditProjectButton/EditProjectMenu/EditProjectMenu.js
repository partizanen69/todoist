import React from 'react';

class EditProjectMenu extends React.Component {
	componentWillMount() {
		document.addEventListener(
			'mousedown',
			this.handleClick,
			false
		);
	}

	componentWillUnmount() {
		document.removeEventListener(
			'mousedown',
			this.handleClick,
			false
		);
	}

	handleClick = e => {
		!this.editProjectMenu.contains(e.target) &&
			this.props.cancel();
	};

	render() {
		const {
			projectId,
			cancel,
			deleteProject,
			editProject,
		} = this.props;

		return (
			<div
				className="edit-project-menu"
				ref={node => (this.editProjectMenu = node)}>
				<div onClick={editProject.bind(null, projectId)}>
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

export default EditProjectMenu;

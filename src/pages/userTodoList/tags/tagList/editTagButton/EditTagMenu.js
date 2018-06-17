import React from 'react';

class EditTagMenu extends React.Component {

	componentWillMount() {
		document.addEventListener('mousedown', this.handleClick, false);
	}

	componentWillUnmount() {
		document.removeEventListener('mousedown', this.handleClick, false);
	}

	handleClick = (e) => {
		!this.editTagMenu.contains(e.target) 
			&& this.props.cancel();
	}

	render() {
		const { 
			tagId, 
			cancel, 
			deleteTag,
			editTag 
		} = this.props;

		return (
			<div 
				className="edit-tag-menu"
				ref={node => this.editTagMenu = node}
			>

				<div 
					onClick={editTag.bind(null, tagId)}
				>
					Edit Tag
				</div>
				<div onClick={deleteTag.bind(null, tagId)}>
					Delete tag
				</div>
				<div onClick={cancel}>Cancel</div>
			</div>
		);
	}
}

export default EditTagMenu;
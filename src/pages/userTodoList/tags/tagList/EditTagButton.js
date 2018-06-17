import React from 'react';
import { FaEdit } from 'react-icons/lib/fa/';

import firebase from '../../../../firebase/firebase';
import EditTagMenu from './editTagButton/EditTagMenu';

class EditTagButton extends React.Component {
	constructor() {
		super();
		this.state = {
			menuActive: false,
		};
	}

	editTag = (tagId, e) => {
		const { editTag } = this.props;
		editTag.bind(null, tagId);
		editTag(tagId);
		this.cancel();
	};

	deleteTag = (tagId, e) => {
		const { uid } = this.props;
		firebase
			.database()
			.ref('users/' + uid + '/tags/' + tagId)
			.remove();
	};

	cancel = () => this.setState({ menuActive: false });

	render() {
		const { tagId } = this.props;
		const { menuActive } = this.state;
		return (
			<span>
				<FaEdit
					className="tag-edit-button"
					onClick={() =>
						this.setState({ menuActive: true })
					}
				/>
				{menuActive && (
					<EditTagMenu
						tagId={tagId}
						cancel={this.cancel}
						deleteTag={this.deleteTag}
						editTag={this.editTag}
					/>
				)}
			</span>
		);
	}
}

export default EditTagButton;

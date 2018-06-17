import React from 'react';
import {
	FaTags,
	FaFileTextO,
	FaFlagO,
	FaCommentO,
} from 'react-icons/lib/fa/';

class SettingsButtons extends React.Component {
	render() {
		const { addProj, addTag } = this.props;

		return (
			<div>
				<span data-desc={data[0]}>
					<FaFileTextO onClick={addProj} />
				</span>
				<span data-desc={data[1]}>
					<FaTags onClick={addTag} />
				</span>
				<span data-desc={data[2]}>
					<FaFlagO />
				</span>
				<span data-desc={data[3]}>
					<FaCommentO />
				</span>
			</div>
		);
	}
}

const data = [
	'Project. Choose by typing #',
	'Tag. Choose by typing @',
	'Priority',
	'Comment',
];

export default SettingsButtons;

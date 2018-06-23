import React from 'react';
import {
	FaTags,
	FaFileTextO,
	FaFlag,
	FaComment,
} from 'react-icons/lib/fa/';

import Styles from './Styles';
import PriorityMenu from './PriorityMenu/PriorityMenu';
import CommentForm from './CommentForm/CommentForm';

class SettingsButtons extends React.Component {
	constructor() {
		super();
		this.state = {
			showPriorityMenu: false,
			showCommentForm: false,
		};
	}

	showPriorityMenu = () => {
		this.setState({ showPriorityMenu: true });
	};

	hidePriorityMenu = () => {
		this.setState({ showPriorityMenu: false });
	};

	showCommentForm = () => {
		this.setState({ showCommentForm: true });
	};

	hideCommentForm = e => {
		const { setComment, comment } = this.props;
		this.setState({
			showCommentForm: false,
		});
	};

	render() {
		const {
			addProj,
			addTag,
			setPriority,
			priority,
			setComment,
			comment,
		} = this.props;
		const { showPriorityMenu, showCommentForm } = this.state;
		const flagColor =
			priority == 'moderate'
				? 'moderate'
				: priority == 'high'
					? 'high'
					: priority == 'very high'
						? 'very-high'
						: '';
		return (
			<Styles>
				<div className="settings-buttons">
					<span data-desc={data[0]}>
						<FaFileTextO onClick={addProj} />
					</span>
					<span data-desc={data[1]}>
						<FaTags onClick={addTag} />
					</span>
					<span data-desc={data[2]} className={flagColor}>
						<FaFlag onClick={this.showPriorityMenu} />
						{showPriorityMenu && (
							<PriorityMenu
								hide={this.hidePriorityMenu}
								setPriority={setPriority}
							/>
						)}
					</span>
					<span
						data-desc={data[3]}
						className={comment ? 'very-high' : ''}>
						<FaComment onClick={this.showCommentForm} />
						{showCommentForm && (
							<CommentForm
								hide={this.hideCommentForm}
								comment={this.props.comment}
								setComment={setComment}
							/>
						)}
					</span>
				</div>
			</Styles>
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

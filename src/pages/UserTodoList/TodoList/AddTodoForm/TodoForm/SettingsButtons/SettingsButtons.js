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
			projHover: false,
			tagHover: false,
			flagHover: false,
			comHover: false,
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
		const {
			showPriorityMenu,
			showCommentForm,
			projHover,
			tagHover,
			flagHover,
			comHover,
		} = this.state;
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
				<span
					onMouseEnter={() =>
						this.setState({ projHover: true })
					}
					onMouseLeave={() =>
						this.setState({ projHover: true })
					}>
					<FaFileTextO onClick={addProj} />
					{projHover && (
						<span>
							Set project by typing #<div />
						</span>
					)}
				</span>
				<span
					onMouseEnter={() =>
						this.setState({ tagHover: true })
					}
					onMouseLeave={() =>
						this.setState({ tagHover: false })
					}>
					<FaTags onClick={addTag} />
					{tagHover && (
						<span>
							Set tags by typing @<div />
						</span>
					)}
				</span>
				<span
					className={flagColor}
					onMouseEnter={() =>
						this.setState({ flagHover: true })
					}
					onMouseLeave={() =>
						this.setState({ flagHover: false })
					}>
					<FaFlag onClick={this.showPriorityMenu} />
					{showPriorityMenu && (
						<PriorityMenu
							hide={this.hidePriorityMenu}
							setPriority={setPriority}
						/>
					)}
					{flagHover && (
						<span>
							Set priority<div />
						</span>
					)}
				</span>
				<span
					className={comment ? 'very-high' : ''}
					onMouseEnter={() =>
						this.setState({ comHover: true })
					}
					onMouseLeave={() =>
						this.setState({ comHover: false })
					}>
					<FaComment onClick={this.showCommentForm} />
					{showCommentForm && (
						<CommentForm
							hide={this.hideCommentForm}
							comment={this.props.comment}
							setComment={setComment}
						/>
					)}
					{comHover && (
						<span>
							Set comment<div />
						</span>
					)}
				</span>
			</Styles>
		);
	}
}

export default SettingsButtons;

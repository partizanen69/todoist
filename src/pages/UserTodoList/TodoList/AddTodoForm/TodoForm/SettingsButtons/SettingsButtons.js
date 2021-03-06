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
			userDatabase,
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
			priority === 'moderate'
				? 'moderate'
				: priority === 'high'
					? 'high'
					: priority === 'very high'
						? 'very-high'
						: '';
		return (
			<Styles>
				<span>
					<FaFileTextO
						onClick={
							userDatabase.projects
								? addProj
								: () => true
						}
						onMouseEnter={() =>
							this.setState({ projHover: true })
						}
						onMouseLeave={() =>
							this.setState({ projHover: false })
						}
					/>
					{projHover && (
						<span>
							{userDatabase.projects
								? 'Set project by typing #'
								: 'Create a project first'}
							<div />
						</span>
					)}
				</span>
				<span>
					<FaTags
						onClick={
							userDatabase.tags ? addTag : () => true
						}
						onMouseEnter={() =>
							this.setState({ tagHover: true })
						}
						onMouseLeave={() =>
							this.setState({ tagHover: false })
						}
					/>
					{tagHover && (
						<span>
							{userDatabase.tags
								? 'Set tags by typing @'
								: 'Create a tag first'}
							<div />
						</span>
					)}
				</span>
				<span className={flagColor}>
					<FaFlag
						onClick={this.showPriorityMenu}
						onMouseEnter={() =>
							this.setState({ flagHover: true })
						}
						onMouseLeave={() =>
							this.setState({ flagHover: false })
						}
					/>
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
				<span className={comment ? 'very-high' : ''}>
					<FaComment
						onClick={this.showCommentForm}
						onMouseEnter={() =>
							this.setState({ comHover: true })
						}
						onMouseLeave={() =>
							this.setState({ comHover: false })
						}
					/>
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

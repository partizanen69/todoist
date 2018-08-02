import React from 'react';
import { FaComment } from 'react-icons/lib/fa/';

import Styles from './Styles';
import CommentPopUp from './CommentPopUp/CommentPopUp';

class TodoItemComment extends React.Component {
	constructor() {
		super();
		this.state = {
			showPopUp: false,
		};
	}

	hideCommentPopUp = () => {
		this.setState({ showPopUp: false });
	};

	render() {
		const { comment, uid, fireBaseKey } = this.props;
		const { showPopUp } = this.state;
		return (
			<Styles comment={comment}>
				<FaComment
					onClick={() => this.setState({ showPopUp: true })}
				/>
				{showPopUp && (
					<CommentPopUp
						comment={comment}
						hideCommentPopUp={this.hideCommentPopUp}
						uid={uid}
						fireBaseKey={fireBaseKey}
					/>
				)}
			</Styles>
		);
	}
}

export default TodoItemComment;

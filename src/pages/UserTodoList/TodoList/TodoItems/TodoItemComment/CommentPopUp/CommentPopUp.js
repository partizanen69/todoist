import React from 'react';
import { FaClose } from 'react-icons/lib/fa/';
import { Button } from 'react-bootstrap';

import firebase from '../../../../../../firebase/firebase';
import Styles from './Styles';

class CommentPopUp extends React.Component {
	constructor() {
		super();
		this.state = {
			value: '',
		};
	}

	componentDidMount() {
		document.addEventListener('click', this.handleClick, false);
		this.setState({ value: this.props.comment });
	}

	componentWillUnmount() {
		document.removeEventListener(
			'click',
			this.handleClick,
			false
		);
	}

	handleClick = e => {
		!this.commentPopUp.contains(e.target) &&
			this.props.hideCommentPopUp();
	};

	updateComment = () => {
		const { uid, fireBaseKey, hideCommentPopUp } = this.props;
		firebase
			.database()
			.ref(
				'users/' +
					uid +
					'/todoList/' +
					fireBaseKey +
					'/comment'
			)
			.set(this.state.value);
		hideCommentPopUp();
	};

	render() {
		const { hideCommentPopUp } = this.props;
		const { value } = this.state;
		return (
			<Styles innerRef={node => (this.commentPopUp = node)}>
				<div>
					<span>Quick comment</span>
					<span>
						<FaClose onClick={hideCommentPopUp} />
					</span>
				</div>
				<textarea
					value={value}
					onChange={e =>
						this.setState({ value: e.target.value })
					}
				/>
				<Button onClick={this.updateComment}>Update</Button>
			</Styles>
		);
	}
}

export default CommentPopUp;

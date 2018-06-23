import React from 'react';
import { FaClose } from 'react-icons/lib/fa/';

class CommentForm extends React.Component {
	constructor() {
		super();
		this.state = {
			textAreaValue: '',
		};
	}

	componentDidMount() {
		document.addEventListener('click', this.handleClick, false);
		this.setState({ textAreaValue: this.props.comment });
	}

	componentWillUnmount() {
		document.removeEventListener(
			'click',
			this.handleClick,
			false
		);
	}

	handleClick = e => {
		const { textAreaValue } = this.state;
		!this.commentForm.contains(e.target) && this.props.hide();
	};

	render() {
		const { textAreaValue } = this.state;
		const { hide, comment, setComment } = this.props;
		return (
			<div
				className="comment-form"
				ref={node => (this.commentForm = node)}>
				<p>Quick comment:</p>
				<span>
					<FaClose onClick={hide} />
				</span>
				<textarea
					onChange={e => setComment(e.target.value)}
					value={comment}
				/>
			</div>
		);
	}
}

export default CommentForm;

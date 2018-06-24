import React from 'react';
import { FaComment } from 'react-icons/lib/fa/';

import Styles from './Styles';

class TodoItemComment extends React.Component {
	constructor() {
		super();
	}

	render() {
		const { comment } = this.props;
		return (
			<Styles comment={comment}>
				<FaComment />
			</Styles>
		);
	}
}

export default TodoItemComment;

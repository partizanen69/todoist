import React from 'react';

import Styles from './Styles';

class TodoItemText extends React.Component {
	render() {
		const { text, completed } = this.props;
		return <Styles completed={completed}>{text}</Styles>;
	}
}

export default TodoItemText;

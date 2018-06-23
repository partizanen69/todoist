import React from 'react';

import Styles from './Styles';

class TodoItemText extends React.Component {
	render() {
		const { text } = this.props;
		return <Styles>{text}</Styles>;
	}
}

export default TodoItemText;

import React from 'react';

import Styles from './Styles';

class TodoItemDate extends React.Component {
	formatDate = timestamp => new Date(timestamp).toDateString();

	render() {
		const { date } = this.props;
		return <Styles>{this.formatDate(date)}</Styles>;
	}
}

export default TodoItemDate;

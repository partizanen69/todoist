import React from 'react';
import { FaFileTextO } from 'react-icons/lib/fa/';

import Styles from './Styles';

class TodoItemProject extends React.Component {
	constructor() {
		super();
	}

	render() {
		const { project } = this.props;
		return (
			<Styles>
				<FaFileTextO />
				{project}
			</Styles>
		);
	}
}

export default TodoItemProject;

import React from 'react';
import { FaFileTextO } from 'react-icons/lib/fa/';

import Styles from './Styles';

class TodoItemProject extends React.Component {
	render() {
		const { project } = this.props;
		return (
			<Styles>
				{project && <FaFileTextO />} {project && project}
			</Styles>
		);
	}
}

export default TodoItemProject;

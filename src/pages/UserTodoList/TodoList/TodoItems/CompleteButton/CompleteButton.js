import React from 'react';
import { FaCircleO, FaCheckCircleO } from 'react-icons/lib/fa/';

import Styles from './Styles';

class CompleteButton extends React.Component {
	constructor() {
		super();
		this.state = {
			hover: false,
		};
	}

	render() {
		const { priority } = this.props;
		const { hover } = this.state;
		const priorityColor =
			priority === 'very high'
				? 'red'
				: priority === 'high'
					? 'orange'
					: priority === 'moderate'
						? 'yellow'
						: '';
		return (
			<Styles
				onMouseEnter={() => this.setState({ hover: true })}
				onMouseLeave={() => this.setState({ hover: false })}
				priorityColor={priorityColor}>
				{hover ? <FaCheckCircleO /> : <FaCircleO />}
				{hover && (
					<div>
						{priority} priority<div />
					</div>
				)}
			</Styles>
		);
	}
}

export default CompleteButton;

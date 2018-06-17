import React from 'react';
import { FaFlagO, FaFlag } from 'react-icons/lib/fa/';

import Styles from './Styles';

class PriorityMenu extends React.Component {
	constructor() {
		super();
	}

	componentWillMount() {
		document.addEventListener('click', this.handleClick, false);
	}

	componentWillUnmount() {
		document.removeEventListener(
			'click',
			this.handleClick,
			false
		);
	}

	handleClick = e => {
		!this.priorityMenu.contains(e.target) && this.props.hide();
	};

	render() {
		const { setPriority } = this.props;
		return (
			<div
				ref={node => (this.priorityMenu = node)}
				className="priority-menu">
				<span data-desc={data[0]}>
					<FaFlagO
						onClick={setPriority.bind(null, 'low')}
					/>
				</span>
				<span data-desc={data[1]}>
					<FaFlag
						onClick={setPriority.bind(null, 'moderate')}
					/>
				</span>
				<span data-desc={data[2]}>
					<FaFlag
						onClick={setPriority.bind(null, 'high')}
					/>
				</span>
				<span data-desc={data[3]}>
					<FaFlag
						onClick={setPriority.bind(null, 'very high')}
					/>
				</span>
			</div>
		);
	}
}

const data = ['Low', 'Moderate', 'High', 'Very high'];

export default PriorityMenu;

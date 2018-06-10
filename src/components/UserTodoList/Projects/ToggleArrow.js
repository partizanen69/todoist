import React from 'react';

class ToggleArrow extends React.Component {
	constructor() {
		super();
		this.state = {
			turn: null
		}
	}

	static getDerivedStateFromProps(props, state) {
		const { open } = props;
		return { turn: open ? 0.875 : 0.375 }
	}

	render() {
		const { turn } = this.state;

		return ( 
			<div 
				className="toggle-arrow"
				style={{transform: `rotate(${turn}turn)`}}
			>
			</div>
		)
	}
}

export default ToggleArrow;
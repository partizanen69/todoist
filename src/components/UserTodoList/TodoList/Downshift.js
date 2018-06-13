import React from 'react';

class Downshift extends React.Component {
	constructor() {
		super();
		this.state = {
			projects: {},
			active: 0,
		};
	}

	componentDidMount() {
		document.addEventListener(
			'keydown',
			this.handleUpDownMove,
			false
		);
	}

	componentWillUnmount() {
		document.removeEventListener(
			'keydown',
			this.handleUpDownMove,
			false
		);
	}

	static getDerivedStateFromProps(props, state) {
		return { projects: props.userDatabase.projects };
	}

	handleUpDownMove = e => {
		const { active } = this.state;
		const prj = Object.values(this.state.projects);
		if (e.code === 'ArrowDown') {
			this.setState({
				active: active === prj.length - 1 ? 0 : active + 1,
			});
		}

		if (e.code === 'ArrowUp') {
			this.setState({
				active: active === 0 ? prj.length - 1 : active - 1,
			});
		}
	};

	render() {
		const { projects, active } = this.state;
		return (
			<div className="projects-downshift">
				{Object.values(projects).map((item, key) => {
					return (
						<div
							key={key}
							className={
								active === key ? 'active' : ''
							}>
							{item}
						</div>
					);
				})}
			</div>
		);
	}
}

export default Downshift;

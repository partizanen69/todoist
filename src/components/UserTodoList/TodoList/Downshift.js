import React from 'react';

class Downshift extends React.Component {
	constructor() {
		super();
		this.state = {
			projects: {},
			tags: {},
			active: 0,
			content: '',
		};
	}

	componentWillUnmount() {
		document.removeEventListener(
			'keydown',
			this.handleUpDownMove,
			false
		);
	}

	componentDidMount() {
		document.addEventListener(
			'keydown',
			this.handleUpDownMove,
			false
		);
	}

	static getDerivedStateFromProps(props, state) {
		const { projects, tags } = props.userDatabase;
		const { downshiftContent } = props;
		return {
			projects: projects,
			tags: tags,
			content: downshiftContent,
		};
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

		if (e.code === 'Enter') {
			this.props.setProjTag(prj[active]);
		}
	};

	render() {
		const { projects, tags, active, content } = this.state;
		const cont =
			content === 'proj' ? projects : content === 'tag' && tags;
		return (
			<div className="projects-downshift">
				{Object.values(cont).map((item, key) => {
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

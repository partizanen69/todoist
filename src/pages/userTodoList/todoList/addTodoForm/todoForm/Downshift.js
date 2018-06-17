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
			projects: Object.values(projects),
			tags: Object.values(tags),
			content: downshiftContent,
		};
	}

	handleUpDownMove = e => {
		const { content, active, projects, tags } = this.state;
		const { setProjTag } = this.props;

		e.code === 'ArrowDown' &&
			this.setState({
				active:
					active === projects.length - 1 ? 0 : active + 1,
			});

		e.code === 'ArrowUp' &&
			this.setState({
				active:
					active === 0 ? projects.length - 1 : active - 1,
			});

		if (e.code === 'Enter') {
			content === 'proj' && setProjTag(projects[active]);
			content === 'tag' && setProjTag(tags[active]);
		}
	};

	clickHandler(idx, e) {
		const { content, projects, tags } = this.state;
		const { setProjTag } = this.props;

		content === 'proj' && setProjTag(projects[idx]);
		content === 'tag' && setProjTag(tags[idx]);
	}

	render() {
		const { projects, tags, active, content } = this.state;
		const cont =
			content === 'proj' ? projects : content === 'tag' && tags;
		return (
			<div className="projects-downshift">
				{cont.map((item, idx) => {
					return (
						<div
							key={idx}
							className={active === idx ? 'active' : ''}
							onMouseOver={() =>
								this.setState({ active: idx })
							}
							onClick={this.clickHandler.bind(
								this,
								idx
							)}>
							{item}
						</div>
					);
				})}
			</div>
		);
	}
}

export default Downshift;

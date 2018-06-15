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
		const { active, content } = this.state;
		const prj = Object.values(this.state.projects);
		const tags = Object.values(this.state.tags);
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
			if (content === 'proj') {
				this.props.setProjTag(prj[active]);
			}

			if (content === 'tag') {
				this.props.setProjTag(tags[active]);
			}
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
				{Object.values(cont).map((item, idx) => {
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

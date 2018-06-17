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
		const { filteredArray } = props;
		return {
			content: filteredArray,
		};
	}

	handleUpDownMove = e => {
		const { content, active, projects, tags } = this.state;
		const { setProjTag, downshiftContent } = this.props;

		e.code === 'ArrowDown' &&
			this.setState({
				active:
					active === content.length - 1 ? 0 : active + 1,
			});

		e.code === 'ArrowUp' &&
			this.setState({
				active:
					active === 0 ? content.length - 1 : active - 1,
			});

		if (e.code === 'Enter') {
			setProjTag(content[active]);
		}
	};

	clickHandler(idx, e) {
		const { content } = this.state;
		const { setProjTag } = this.props;
		setProjTag(content[idx]);
	}

	render() {
		const { projects, tags, active, content } = this.state;
		const { filterValue } = this.props;
		const regExp = new RegExp(filterValue, 'gi');
		return (
			<div className="projects-downshift">
				{content.map((item, idx) => {
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

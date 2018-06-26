import React from 'react';
import { Button } from 'react-bootstrap';

import Styles from './Styles';

class FilterButtons extends React.Component {
	constructor() {
		super();
		this.state = {
			projects: [],
			tags: [],
		};
	}

	static getDerivedStateFromProps(props, state) {
		const { projects, tags } = props.userDatabase;
		return {
			projects: projects && Object.values(projects),
			tags: tags && Object.values(tags),
		};
	}

	render() {
		const { projects, tags } = this.state;
		const { formFilterCondition } = this.props;
		return (
			<Styles>
				<select
					onChange={e =>
						formFilterCondition('project', e.target.value)
					}>
					<option />
					{projects &&
						projects.map((item, key) => {
							return <option>{item}</option>;
						})}
				</select>
			</Styles>
		);
	}
}

export default FilterButtons;

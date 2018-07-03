import React from 'react';
import { FormControl, Button, Radio } from 'react-bootstrap';

import Styles from './Styles';
import ChooseTags from './ChooseTags/ChooseTags';
import FilterByDate from './FilterByDate/FilterByDate';

class FilterButtons extends React.Component {
	constructor() {
		super();
		this.state = {
			projects: [],
			tags: [],
			chooseProject: '',
			chooseCompleted: 'all',
		};
	}

	static getDerivedStateFromProps(props, state) {
		const { projects, tags } = props.userDatabase;
		return {
			projects: projects && Object.values(projects),
			tags: tags && Object.values(tags),
		};
	}

	chooseProject = e => {
		const { formFilterCondition } = this.props;
		formFilterCondition('project', e.target.value);
		this.setState({ chooseProject: e.target.value });
	};

	clearFilter = () => {
		const { clearFilter } = this.props;
		this.setState({ chooseProject: '', chooseCompleted: 'all' });
		clearFilter();
	};

	chooseCompleted = e => {
		const { formFilterCondition } = this.props;
		const value = e.target.value;
		const valueToPass =
			value === 'completed'
				? true
				: value === 'in progress'
					? false
					: '';
		this.setState({
			chooseCompleted: value,
		});
		formFilterCondition('completed', valueToPass);
	};

	chooseTag = (selectedTags, e) => {
		this.props.formFilterCondition('tags', selectedTags);
	};

	render() {
		const {
			projects,
			tags,
			chooseProject,
			chooseCompleted,
		} = this.state;
		const {
			formFilterCondition,
			filter,
			showRange,
			isRangeShow,
		} = this.props;
		return (
			<Styles>
				<FormControl
					componentClass="select"
					onChange={this.chooseProject}
					value={chooseProject}>
					<option value="">Filter by project</option>
					{projects &&
						projects.map((item, key) => {
							return <option key={key}>{item}</option>;
						})}
				</FormControl>
				<form onChange={this.chooseCompleted}>
					<Radio
						name="completed"
						value="all"
						defaultChecked>
						All
					</Radio>
					<Radio name="completed" value="completed">
						Completed
					</Radio>
					<Radio name="completed" value="in progress">
						In progress
					</Radio>
				</form>
				<ChooseTags chooseTag={this.chooseTag} tags={tags} />
				<FilterByDate
					formFilterCondition={formFilterCondition}
					filter={filter}
					showRange={showRange}
					isRangeShow={isRangeShow}
				/>
				<Button onClick={this.clearFilter}>
					Clear filter
				</Button>
			</Styles>
		);
	}
}

export default FilterButtons;

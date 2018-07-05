import React from 'react';
import { FormControl } from 'react-bootstrap';

import Styles from './Styles';

class FilterByItemText extends React.Component {
	constructor() {
		super();
		this.state = {
			inputValue: '',
		};
	}

	changeHandler = e => {
		this.setState({ inputValue: e.target.value }, () =>
			this.props.formFilterCondition(
				'itemText',
				this.state.inputValue
			)
		);
	};

	render() {
		const { inputValue } = this.state;
		return (
			<Styles>
				<FormControl
					type="text"
					placeholder="Filter by item text"
					value={inputValue}
					onChange={this.changeHandler}
				/>
			</Styles>
		);
	}
}

export default FilterByItemText;

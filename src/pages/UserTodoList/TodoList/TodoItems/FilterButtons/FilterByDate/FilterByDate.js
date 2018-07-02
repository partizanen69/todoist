import React from 'react';
import Calendar from 'react-calendar';

import Styles from './Styles';

class FilterByDate extends React.Component {
	constructor() {
		super();
		this.state = {
			isOpen: false,
			calDate: new Date(),
		};
	}

	handleClick = e => {
		if (!this.node.contains(e.target)) {
			this.setState({ isOpen: false });
			document.removeEventListener(
				'click',
				this.handleClick,
				false
			);
		}
	};

	calendarMount = node => {
		this.node = node;
		document.addEventListener('click', this.handleClick, false);
	};

	setDateRange = dateRange => {
		this.setState({ calDate: dateRange });
		const dateRangeT = dateRange.map(item => item.getTime());
		console.log(dateRangeT);
	};

	render() {
		const { isOpen, calDate } = this.state;

		return (
			<Styles>
				<div
					className="date-range-overlay"
					onClick={() => this.setState({ isOpen: true })}>
					Filter by date range
				</div>
				{isOpen && (
					<div
						className="cal-wrapper"
						ref={node => this.calendarMount(node)}>
						<div className="cal-header">Label</div>
						<Calendar
							value={calDate}
							selectRange={true}
							onChange={dateRange =>
								this.setDateRange(dateRange)
							}
						/>
					</div>
				)}
			</Styles>
		);
	}
}

export default FilterByDate;

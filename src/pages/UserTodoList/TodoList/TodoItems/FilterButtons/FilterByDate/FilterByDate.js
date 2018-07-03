import React from 'react';
import Calendar from 'react-calendar';
import { Button } from 'react-bootstrap';

import Styles from './Styles';

class FilterByDate extends React.Component {
	constructor() {
		super();
		this.state = {
			isOpen: false,
			calDate: [new Date(), new Date()],
		};
	}

	removeListener = () => {
		document.removeEventListener(
			'click',
			this.handleClick,
			false
		);
	};

	handleClick = e => {
		if (this.node) {
			if (!this.node.contains(e.target)) {
				this.setState({ isOpen: false });
				this.removeListener();
			}
		}
	};

	cancel = () => {
		this.setState({ isOpen: false });
		this.removeListener();
	};

	calendarMount = node => {
		this.node = node;
		document.addEventListener('click', this.handleClick, false);
	};

	setDateRange = dateRange => {
		this.setState({ calDate: dateRange });
	};

	applyDateRange = () => {
		const { formFilterCondition, filter, showRange } = this.props;
		const { calDate } = this.state;
		const dateRange = calDate.map(item => item.getTime());
		formFilterCondition('dateRange', dateRange);
		this.setState({ isOpen: false });
		showRange();
	};

	formHumanDate = date => {
		var day = '0' + date.getDate();
		var month = '0' + (date.getMonth() + 1);
		var year = date.getFullYear();

		return day.substr(-2) + '.' + month.substr(-2) + '.' + year;
	};

	render() {
		const { isOpen, calDate } = this.state;
		const { isRangeShow } = this.props;
		return (
			<Styles>
				<div
					className="date-range-overlay"
					onClick={() => this.setState({ isOpen: true })}>
					{isRangeShow
						? `${this.formHumanDate(
								calDate[0]
						  )} - ${this.formHumanDate(calDate[1])}`
						: 'Choose date range'}
				</div>
				{isOpen && (
					<div
						className="cal-wrapper"
						ref={node => this.calendarMount(node)}>
						<div className="cal-header">
							<div>
								<span>Today</span>
								<span>Yesterday</span>
								<span>Current month</span>
								<span>This year</span>
							</div>
							<Button onClick={this.applyDateRange}>
								Apply
							</Button>
							<Button onClick={this.cancel}>
								Cancel
							</Button>
						</div>
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

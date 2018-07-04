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

	setToday = () => {
		this.setState({ calDate: [new Date(), new Date()] });
	};

	setYesterday = () => {
		const timeStamp = new Date().getTime() - 86400000;
		const yest = new Date(timeStamp);
		this.setState({ calDate: [yest, yest] });
	};

	setCurMonth = () => {
		const month = new Date().getMonth();
		const year = new Date().getFullYear();
		const firstNextMonth = new Date(year, month + 1, 1);
		const firstCurMonth = new Date(year, month, 1);
		const last = new Date(firstNextMonth - 1);
		this.setState({ calDate: [firstCurMonth, last] });
	};

	setCurYear = () => {
		const year = new Date().getFullYear();
		const firstCurYear = new Date(year, 0, 1);
		const lastCurYear = new Date(year, 11, 31);
		this.setState({ calDate: [firstCurYear, lastCurYear] });
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
								<span onClick={this.setToday}>
									Today
								</span>
								<span onClick={this.setYesterday}>
									Yesterday
								</span>
								<span onClick={this.setCurMonth}>
									Current month
								</span>
								<span onClick={this.setCurYear}>
									This year
								</span>
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

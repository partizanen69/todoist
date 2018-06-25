import React from 'react';
import Calendar from 'react-calendar';
import { FaClose } from 'react-icons/lib/fa/';

import Styles from './Styles';

class Calendarr extends React.Component {
	componentDidMount() {
		document.addEventListener('click', this.handleClick, false);
	}

	componentWillUnmount() {
		document.removeEventListener(
			'click',
			this.handleClick,
			false
		);
	}

	handleClick = e => {
		!this.calendar.contains(e.target) &&
			this.props.hideCalendar();
	};

	render() {
		const { hideCalendar, pickDate, value } = this.props;
		return (
			<Styles innerRef={node => (this.calendar = node)}>
				<div className="cal-header">
					<span>Choose todo item due date</span>
					<span>
						<FaClose onClick={hideCalendar} />
					</span>
				</div>
				<Calendar
					onChange={date => pickDate(date)}
					value={value}
				/>
			</Styles>
		);
	}
}

export default Calendarr;

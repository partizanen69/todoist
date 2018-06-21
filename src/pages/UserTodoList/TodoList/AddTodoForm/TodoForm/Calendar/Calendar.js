import React from 'react';
import Calendar from 'react-calendar';
import Styles from './Styles';

class Calendarr extends React.Component {
	render() {
		return (
			<Styles>
				<div className="wrapper">
					<span>Choose todo item due date</span>
					<Calendar />
				</div>
			</Styles>
		);
	}
}

export default Calendarr;

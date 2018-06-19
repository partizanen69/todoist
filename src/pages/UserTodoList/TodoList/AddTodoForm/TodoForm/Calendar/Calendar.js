import InfiniteCalendar from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css';

class Calendar extends React.Component {
	render() {
		const today = new Date();
		const lastWeek = new Date(
			today.getFullYear(),
			today.getMonth(),
			today.getDate() - 7
		);
		return (
			<InfiniteCalendar
				width={400}
				height={600}
				selected={today}
				disabledDays={[0, 6]}
				minDate={lastWeek}
				onSelect={e => console.log('e', e)}
			/>
		);
	}
}

export default Calendar;

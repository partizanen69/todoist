import styled from 'styled-components';

export default styled.div`
		position: absolute;
		max-width: inherit;

		font-size: 10px;
		z-index: 2;
		right: -5px;
		background-color: rgba(255, 255, 255, 1);

		box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.4);
		border-radius: 3px;
		color: black;

		& .cal-header {
			display: flex;
			justify-content: space-between;
			padding: 5px 10px 5px 10px;

			& > span {
				font-size: 14px;
			}

			& > span:nth-child(1) {
				cursor auto;
			}
		}

		.react-calendar {
			width: 220px;
			border: none;

			& .react-calendar__navigation,
			.react-calendar__month-view {
				width: 220px;
			}

			& .react-calendar__navigation:hover,
			.react-calendar__month-view:hover {
				width: 220px;
			}
		}

		.react-calendar:hover {
			opacity: 1;
		}
`;

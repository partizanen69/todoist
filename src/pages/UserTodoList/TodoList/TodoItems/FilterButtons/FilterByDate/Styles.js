import styled from 'styled-components';

export default styled.div`
	position: relative;

	& .date-range-overlay {
		display: inline-block;
		cursor: pointer;
		padding: 6px 12px;
		font-size: 14px;
		color: #555;
		background-color: #fff;
		border: 1px solid #ccc;
		border-radius: 4px;
		box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
		transition: border-color ease-in-out 0.15s,
			box-shadow ease-in-out 0.15s,
			-webkit-box-shadow ease-in-out 0.15s;
	}

	& .cal-wrapper {
		position: absolute;
		font-size: 10px;
		z-index: 30;
		background-color: rgba(255, 255, 255, 1);
		box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.4);
		border-radius: 3px;
		color: black;

		& .cal-header {
			padding: 5px;
		}

		& .react-calendar {
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
	}
`;

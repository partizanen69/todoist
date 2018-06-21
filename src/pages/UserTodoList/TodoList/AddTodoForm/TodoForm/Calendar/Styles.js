import styled from 'styled-components';

export default styled.div`
	.wrapper {
		position: absolute;
		max-width: inherit;

		font-size: 10px;
		z-index: 2;
		right: -5px;
		background-color: rgba(255, 255, 255, 1);

		box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.4);
		border-radius: 3px;

		& > span {
			font-size: 14px;
			padding-left: 10px;
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
	}
`;
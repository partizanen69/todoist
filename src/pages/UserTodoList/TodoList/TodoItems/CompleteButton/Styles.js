import styled from 'styled-components';

export default styled.div`
	display: inline;
	font-size: 22px;
	color: ${props => props.priorityColor};
	position: relative;

	:hover {
		cursor: pointer;
	}

	& > div {
		position: absolute;
		background-color: black;
		color: #fff;
		font-size: 12px;
		top: -25px;
		left: 0px;
		box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
		padding: 5px;
		border-radius: 3px;
		width: 105px;

		& > div {
			position: absolute;
			bottom: -5px;
			left: 5px;
			width: 0;
			height: 0;
			border-style: solid;
			border-width: 5px 5px 0 5px;
			border-color: #000 transparent transparent transparent;
		}
	}
`;

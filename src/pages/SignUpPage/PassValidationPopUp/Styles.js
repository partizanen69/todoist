import styled from 'styled-components';

export default styled.div`
	border: 1px solid #ccc;
	position: absolute;
	right: -210px;
	top: 0;
	white-space: nowrap;
	width: 200px;
	font-size: 12px;
	border-radius: 4px;
	box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
	background-color: #fff;
	padding: 5px;

	& > div {
		white-space: normal;
		display: flex;
		margin-bottom: 5px;

		& > i {
			font-size: 14px;
		}

		& > div {
			white-space: normal;
			margin-left: 5px;
		}
	}

	& > div:nth-child(1) i {
		color: ${props => (props.passLength ? 'green' : 'red')};
	}

	& > div:nth-child(2) i {
		color: ${props => (props.specChar ? 'green' : 'red')};
	}

	& > div:nth-child(3) i {
		color: ${props => (props.upperLetter ? 'green' : 'red')};
	}

	& > div:nth-child(4) i {
		color: ${props => (props.passMatch ? 'green' : 'red')};
	}

	& .triangle {
		position: absolute;
		left: -10px;
		top: 10px;
		width: 0;
		height: 0;
		border-style: solid;
		border-width: 5px 10px 5px 0;
		border-color: transparent #ccc transparent transparent;
	}
`;

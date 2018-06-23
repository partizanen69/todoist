import styled from 'styled-components';

export default styled.div`
	position: absolute;
	width: 100%;
	background-color: #fff;
	box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
	border-radius: 4px;
	border: 1px solid #ccc;
	top: 30px;

	& .active {
		background-color: grey;
	}

	& div {
		cursor: pointer;
	}
`;

import styled from 'styled-components';

export default styled.div`
	background-color: #333;
	color: #fff;
	border-radius: 3px;
	padding: 2px 5px;

	:hover {
		cursor: pointer;
		opacity: 0.7;
	}

	:active {
		position: relative;
		top: 1px;
	}
`;

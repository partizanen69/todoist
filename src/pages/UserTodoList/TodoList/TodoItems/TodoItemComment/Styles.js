import styled from 'styled-components';

export default styled.div`
	display: inline-block;
	padding: 5px;
	color: ${props => (props.comment ? 'red' : '')};

	:hover {
		cursor: pointer;
	}
`;

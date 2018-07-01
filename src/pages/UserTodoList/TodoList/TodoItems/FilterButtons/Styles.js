import styled from 'styled-components';

export default styled.div`
	& > select {
		display: inline-block;
		padding: 3px;
		width: auto;

		& > option {
			padding: 0;
		}
	}
`;

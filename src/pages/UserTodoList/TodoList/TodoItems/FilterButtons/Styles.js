import styled from 'styled-components';

export default styled.div`
	& > div {
		display: flex;
		justify-content: flex-start;
		margin-top: 10px;

		& > * {
			margin-right: 10px;
		}

		& > select {
			display: inline-block;
			padding: 3px;
			width: auto;
			cursor: pointer;

			& > option {
				padding: 0;
			}
		}
	}
`;

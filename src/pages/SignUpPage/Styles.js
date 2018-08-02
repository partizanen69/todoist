import styled from 'styled-components';

export default styled.div`
	.wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;

		& .form-group:nth-child(3) {
			position: relative;
		}

		& .error {
			color: red;
		}
	}
`;

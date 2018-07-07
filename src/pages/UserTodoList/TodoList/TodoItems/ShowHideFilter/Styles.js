import styled from 'styled-components';

export default styled.div`
	& > span {
		color: #dd4b39;
		cursor: pointer;

		& > i > i {
			margin: 0 5px;
		}
	}

	& > span:hover {
		text-decoration: underline;
	}
`;

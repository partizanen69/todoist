import styled from 'styled-components';

export default styled.div`
	margin-top: 10px;

	.todo-item {
		border: 1px solid black;
		margin-bottom: 10px;
		display: flex;

		& > div {
			padding: 0 2.5px;
			box-sizing: border-box;
			border: 1px solid black;
		}

		& > div:nth-child(2) {
			width: 70%;
			padding-left: 5px;
		}

		& > div:nth-child(3) {
			width: 15%;
		}

		& > div:nth-child(4) {
			width: 15%;
		}
	}
`;

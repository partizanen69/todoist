import styled from 'styled-components';

export default styled.div`
	.todo-item {
		border: 1px solid black;
		margin-bottom: 10px;
		display: flex;
		justify-content: space-between;

		& > div:nth-child(2) {
			flex-grow: 2;
		}

		& > div {
			margin: 0 5px;
			box-sizing: border-box;
			border: 1px solid black;
		}
	}
`;

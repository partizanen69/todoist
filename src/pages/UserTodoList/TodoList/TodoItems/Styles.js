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
			width: 80%;
			padding-left: 5px;
		}

		& > div:nth-child(3) {
			width: 20%;
			display: flex;
			flex-direction: column;
			align-items: flex-end;

			& > div {
				margin-bottom: 3px;
			}

			& .button {
				background-color: #333;
				color: #fff;
				border-radius: 3px;
				padding: 2px 5px;
			}

			& .button:hover {
				cursor: pointer;
				opacity: 0.7;
			}

			& .button:active {
				position: relative;
				top: 1px;
			}
		}
	}
`;

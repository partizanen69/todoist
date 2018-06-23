import styled from 'styled-components';

export default styled.div`
	.project {
		box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.4);
		border-radius: 3px;
		background-color: red;
		display: inline-block;
		margin: 0 5px 5px 0;
		padding: 5px 10px;

		& span {
			margin-left: 5px;
			cursor: pointer;
		}

		& span:hover {
			opacity: 0.5;
		}
	}

	.tag {
		box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.4);
		border-radius: 3px;
		background-color: green;
		display: inline-block;
		margin: 0 5px 5px 0;
		padding: 5px 10px;

		& span {
			margin-left: 5px;
			cursor: pointer;
		}

		& span:hover {
			opacity: 0.5;
		}
	}

	.todo-input {
		position: relative;

		& > span {
			position: absolute;
			right: 5px;
			top: 50%;
			transform: translateY(-55%);
			font-size: 22px;
			cursor: pointer;
		}

		.date-picked {
			color: green;
		}

		& input {
		}
	}
`;

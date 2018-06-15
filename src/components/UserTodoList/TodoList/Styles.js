import styled from 'styled-components';

export default styled.div`
	.add-task-link {
		color: #dd4b39;
		cursor: pointer;
		display: inline-block;

		& span {
			margin: 0 5px;
		}
	}

	.add-task-link:hover {
		text-decoration: underline;
	}

	.add-form-buttons {
		display: flex;
		justify-content: space-between;
		margin-top: 10px;

		& span {
			margin: 0 10px;
			font-size: 16px;
			cursor: pointer;
			position: relative;
		}

		& span:hover {
			opacity: 0.5;
		}

		& span[data-desc]:hover::after {
			content: attr(data-desc);
			position: absolute;
			font-size: 12px;
			padding: 5px;
			left: -60px;
			top: 24px;
			border-radius: 3px;
			background-color: black;
			color: white;
			width: 100px;
			opacity: 1;
		}
	}

	.projects-downshift {
		& .active {
			background-color: grey;
		}

		& div {
			cursor: pointer;
		}
	}

	.project {
		box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.4);
		border-radius: 3px;
		background-color: red;
		display: inline-block;
		margin-right: 5px;
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
		margin-right: 5px;
		padding: 5px 10px;

		& span {
			margin-left: 5px;
			cursor: pointer;
		}

		& span:hover {
			opacity: 0.5;
		}
	}
`;

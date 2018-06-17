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
`;

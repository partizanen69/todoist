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
`;

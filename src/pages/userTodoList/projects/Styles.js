import styled from 'styled-components';

export default styled.div`
	.add-project-container {
		& input {
			margin-bottom: 5px;
		}

		& div {
			margin-bottom: 5px;
		}

		& button {
			margin-right: 5px;
		}
	}

	.circle {
		color: green;
	}

	.panel-heading {
		cursor: pointer;
		padding: 5px;

		& .panel-title {
			display: flex;
			justify-content: space-between;
			align-items: center;

			& .add-project-button {
				color: rgba(0, 0, 0, 0.3);
			}

			& .add-project-button:hover {
				color: rgba(0, 0, 0, 1);
			}

			& .panel-title-name svg {
				margin-right: 5px;
			}
		}
	}

	.panel-body {
		padding: 5px;

		& .add-project-link {
			color: #dd4b39;
			padding: 6px 0px;

			& span {
				margin-right: 10px;
			}
		}

		& .add-project-link:hover {
			text-decoration: underline;
			cursor: pointer;
		}
	}

	.toggle-arrow {
		display: inline-block;
		width: 8px;
		height: 8px;
		border-bottom: 1.5px solid rgba(0, 0, 0, 0.54);
		border-left: 1.5px solid rgba(0, 0, 0, 0.54);
		opacity: 0.3;
		margin: 0 5px 0 3px;
	}

	.projects-list-container {
		& .projects-row {
			display: flex;
			justify-content: space-between;
			padding: 6px 0px;
			border-radius: 3px;

			& > div {
				padding: 0 3px;
				position: relative;
			}

			& > div:nth-child(2) {
				flex-grow: 2;
				overflow-wrap: break-word;
				min-width: 50%; //this is to make break-word working
			}

			& .project-edit-button {
				cursor: pointer;
			}

			& .project-edit-button:hover {
				opacity: 0.5;
			}

			& .edit-project-menu {
				position: absolute;
				background-color: #fff;
				white-space: nowrap;
				z-index: 1;
				box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.4);
				border-radius: 3px;
				top: 20px;
				right: 0;
				padding: 7px 0px;
				font-size: 14px;

				& > div {
					cursor: pointer;
					margin: 1px 0;
					padding: 5px 10px;
				}

				& > div:hover {
					background-color: #f8f8f8;
				}
			}
		}

		& .projects-row:hover {
			background-color: #f8f8f8;
			cursor: pointer;
		}
	}
`;

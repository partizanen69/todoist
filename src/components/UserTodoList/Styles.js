import styled from 'styled-components';

export default styled.div`
	.circle {
		color: green;
	}

	.panel-heading {
		cursor: pointer;
		padding: 5px;
	}

	.panel-body {
		padding: 5px;
	}

	.toggle-arrow {
		display: inline-block;
		width: 10px;
		height: 10px;
		border-bottom: 1px solid black;
		border-left: 1px solid black;
		transform: rotate(0.25turn);
	}
	
	.projects-list-container {

		& .projects-row {
			display:flex;
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
			    width: 200px;
			    background-color: #fff;
			    z-index: 1;
			    box-shadow: 0 1px 3px 0 rgba(0,0,0,0.4);
			    border-radius: 3px;
			    top: 20px;
			    left: 15px;
			    padding: 7px 0px;
			    font-size: 14px;

				& > div {
					cursor: pointer;
					margin: 1px 0;
		    		padding: 5px 10px;
				}

				& > div:hover {
					background-color: #F8F8F8;
				}
			}
		}

		& .projects-row:hover {
			background-color: #F8F8F8;
			cursor: pointer;
		}	
	}
	
	
`;

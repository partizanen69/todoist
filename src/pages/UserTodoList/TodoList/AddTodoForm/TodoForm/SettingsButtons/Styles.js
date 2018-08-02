import styled from 'styled-components';

export default styled.div`
	& > span {
		position: relative;
		margin: 0 10px;
		font-size: 16px;
		cursor: pointer;

		& > span {
			position: absolute;
			font-size: 12px;
			padding: 5px;
			right: 0px;
			top: -30px;
			border-radius: 3px;
			background-color: black;
			color: white;
			opacity: 1;
			white-space: nowrap;
			z-index: 2;

			& > div {
				width: 0;
				height: 0;
				border-left: 5px solid transparent;
				border-right: 5px solid transparent;
				border-top: 5px solid black;
				position: absolute;
				bottom: -5px;
				right: 5px;
			}
		}

		& .priority-menu {
			position: absolute;
			z-index: 1;
			opacity: 1;
			border-radius: 3px;
			box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.4);
			background-color: #fff;
			width: 170px;
			padding: 5px;
			display: flex;
			justify-content: space-around;

			& span:nth-child(1) {
				color: black;
			}

			& span:nth-child(2) {
				color: yellow;
			}

			& span:nth-child(3) {
				color: orange;
			}

			& span:nth-child(4) {
				color: red;
			}

			& span:hover {
				opacity: 1;
			}
		}
	}

	.moderate {
		color: yellow;
	}

	.high {
		color: orange;
	}

	.very-high {
		color: red;
	}
`;

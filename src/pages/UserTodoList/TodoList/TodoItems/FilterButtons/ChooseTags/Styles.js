import styled from 'styled-components';

export default styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;

	& > div {
		position: relative;

		& > span {
			box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.4);
			border-radius: 3px;
			background-color: green;
			margin: 2px 5px 5px 0;
			padding: 5px 10px;
			position: absolute;
			white-space: nowrap;

			& > i {
				cursor: pointer;
			}
		}

		& input {
			width: auto;
		}

		& > div {
			position absolute;
			width: 100%;
			background-color: #fff;
			z-index: 1000;
		}
	}
`;

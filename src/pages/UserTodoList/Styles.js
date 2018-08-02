import styled from 'styled-components';

export default styled.div`
	display: flex;

	& .left-wrapper {
		& .left {
			width: 210px;
			flex-shrink: 0;
			margin: 0 10px 0 0;
			padding: 20px 0 0 0;
		}
	}

	& .right {
		flex-grow: 2;
		margin-top: 20px;
	}

	@media (max-width: 767px) {
		& .left-wrapper {
			position: fixed;
			overflow: ${props =>
				props.isSideBarOpen && props.isScrollShow
					? 'auto'
					: 'hidden'};
			background-color: #f8f8f8;
			z-index: 1;
			display: flex;
			height: calc(100% - 50px);
			left: 0;

			& .left {
				display: ${props =>
					props.isSideBarOpen ? 'block' : 'none'};
				margin: 0 0 0 0;
				padding: 20px 0 0 10px;
			}
		}

		.right {
			margin-left: 35px;
		}
	}
`;

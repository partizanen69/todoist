import styled from 'styled-components';

export default styled.div`
	width: 20px;
	display: none;

	& > i {
		display: block;
	}

	& > div {
		position: relative;
		cursor: pointer;
		top: 45%;
		transform: rotate(
			${props => (props.isSideBarOpen ? '180deg' : '0')}
		);
	}

	@media (max-width: 767px) {
		display: block;
	}
`;

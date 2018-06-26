import styled from 'styled-components';

export default styled.div`
	position: absolute;
	z-index: 1;
	background-color: #fff;
	box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.4);
	border-radius: 3px;
	padding: 5px;
	cursor: auto;
	color: black;

	& p {
		float: left;
	}

	& span {
		float: right;
		cursor: pointer;
	}

	& textarea {
		padding: 5px;
		border-radius: 3px;
	}

	& .comment-form:hover {
		opacity: 1;
	}
`;

import styled from 'styled-components';

export default styled.div`
	text-decoration: ${props =>
		props.completed ? 'line-through' : ''};
`;

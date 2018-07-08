import React from 'react';
import { FaTags } from 'react-icons/lib/fa/';

import Styles from './Styles';

class TodoItemTags extends React.Component {
	render() {
		const { tags } = this.props;
		return (
			<Styles>
				{tags &&
					tags.map((tag, key) => {
						return (
							<span key={key}>
								<FaTags />
								{tag}
							</span>
						);
					})}
			</Styles>
		);
	}
}

export default TodoItemTags;

import React from 'react';

class TodoItems extends React.Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		const { todoList } = this.props.userDatabase;
		return (
			<div>
				{todoList && Object.values(todoList).map((item, key) => {
					return <p key={key}>{item}</p>;
				})}
			</div>
		);
	}
}

export default TodoItems;
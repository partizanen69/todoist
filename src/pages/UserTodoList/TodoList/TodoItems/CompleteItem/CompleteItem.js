import React from 'react';
import { MdDone } from 'react-icons/lib/md/';

import firebase from '../../../../../firebase/firebase';
import Styles from './Styles';

class CompleteItem extends React.Component {
	constructor() {
		super();
		this.state = {
			completed: '',
		};
	}

	static getDerivedStateFromProps(props, state) {
		return { completed: props.completed };
	}

	completeItem = fireBaseKey => {
		const { uid } = this.props;
		const { completed } = this.state;
		firebase
			.database()
			.ref(
				'users/' +
					uid +
					'/todoList/' +
					fireBaseKey +
					'/completed'
			)
			.set(completed ? false : true);
	};

	render() {
		const { fireBaseKey } = this.props;
		const { completed } = this.state;
		return (
			<Styles
				onClick={this.completeItem.bind(null, fireBaseKey)}>
				<MdDone />
				{completed ? 'reset' : 'complete'}
			</Styles>
		);
	}
}

export default CompleteItem;

import React from 'react';
import { MdDone } from 'react-icons/lib/md/';

import firebase from '../../../../../firebase/firebase';
import Styles from './Styles';

class CompleteItem extends React.Component {
	constructor() {
		super();
	}

	completeItem = fireBaseKey => {
		const { uid } = this.props;
		firebase
			.database()
			.ref(
				'users/' +
					uid +
					'/todoList/' +
					fireBaseKey +
					'/completed'
			)
			.set(true);
	};

	render() {
		const { uid, fireBaseKey } = this.props;
		return (
			<Styles
				onClick={this.completeItem.bind(null, fireBaseKey)}>
				<MdDone />complete
			</Styles>
		);
	}
}

export default CompleteItem;

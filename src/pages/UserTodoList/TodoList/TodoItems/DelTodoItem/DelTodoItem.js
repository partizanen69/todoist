import React from 'react';
import { MdDeleteForever } from 'react-icons/lib/md/';

import firebase from '../../../../../firebase/firebase';
import Styles from './Styles';

class DelTodoItem extends React.Component {
	delItem = fireBaseKey => {
		const { uid } = this.props;
		firebase
			.database()
			.ref('users/' + uid + '/todoList/' + fireBaseKey)
			.remove();
	};

	render() {
		const { fireBaseKey } = this.props;
		return (
			<Styles onClick={this.delItem.bind(null, fireBaseKey)}>
				<MdDeleteForever />delete
			</Styles>
		);
	}
}

export default DelTodoItem;

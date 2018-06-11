import React from 'react';
import {
	FaTags,
	FaFileTextO,
	FaFlagO,
	FaCommentO,
} from 'react-icons/lib/fa/';
import { FormGroup, FormControl, Button } from 'react-bootstrap';

import firebase from '../../../firebase/firebase';
import 'react-tagsinput/react-tagsinput.css';

class TodoForm extends React.Component {
	constructor() {
		super();
		this.state = {
			inputValue: '',
		};
	}

	onSubmit = e => {
		e.preventDefault();
		const { inputValue } = this.state;
		const { uid } = this.props;
		firebase
			.database()
			.ref('users/' + uid + '/todoList')
			.push(inputValue);
	};

	render() {
		const { inputValue } = this.state;
		const { hideForm } = this.props;
		return (
			<form onSubmit={this.onSubmit}>
				<FormControl
					value={inputValue}
					onChange={e =>
						this.setState({
							inputValue: e.target.value,
						})
					}
					placeholder="Enter you todo item"
				/>
				<div className="add-form-buttons">
					<div>
						<Button
							type="submit"
							disabled={inputValue === ''}>
							Add todo item
						</Button>
						<Button onClick={hideForm}>Cancel</Button>
					</div>
					<div>
						<span data-desc={data[0]}>
							<FaFileTextO />
						</span>
						<span data-desc={data[1]}>
							<FaTags />
						</span>
						<span data-desc={data[2]}>
							<FaFlagO />
						</span>
						<span data-desc={data[3]}>
							<FaCommentO />
						</span>
					</div>
				</div>
			</form>
		);
	}
}

const data = [
	'Project. Choose by typing #',
	'Tag. Choose by typing @',
	'Priority',
	'Comment',
];

export default TodoForm;

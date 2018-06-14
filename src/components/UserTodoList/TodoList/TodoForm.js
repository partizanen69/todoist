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
import Downshift from './Downshift';

class TodoForm extends React.Component {
	constructor() {
		super();
		this.state = {
			inputValue: '',
			showDownshift: false,
			project: '',
			tags: [],
			downshiftContent: '',
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

	addProj = () => {
		const { inputValue } = this.state;
		!inputValue &&
			this.setState({
				inputValue: '#',
				showDownshift: true,
				downshiftContent: 'proj',
			});

		inputValue &&
			inputValue !== '#' &&
			this.setState({
				inputValue: inputValue + ' #',
				showDownshift: true,
				downshiftContent: 'proj',
			});
	};

	addTag = () => {
		const { inputValue } = this.state;
		!inputValue &&
			this.setState({
				inputValue: '@',
				showDownshift: true,
				downshiftContent: 'tag',
			});

		inputValue &&
			inputValue !== '@' &&
			this.setState({
				inputValue: inputValue + ' @',
				showDownshift: true,
				downshiftContent: 'tag',
			});
	};

	onChangeHandler = e => {
		this.setState({
			inputValue: e.target.value,
		});
		this.isShowDownshift(e.target.value);
	};

	isShowDownshift = val => {
		this.setState({
			showDownshift: /^#$/.test(val) || / #$/.test(val),
		});
	};

	setProjTag = project => {
		const { inputValue } = this.state;
		this.setState({
			project: project,
			showDownshift: false,
			inputValue: /^#$/.test(inputValue)
				? ''
				: / #$/.test(inputValue) && inputValue.slice(0, -2),
		});
	};

	render() {
		const {
			inputValue,
			showDownshift,
			project,
			downshiftContent,
		} = this.state;
		const { hideForm, userDatabase } = this.props;
		return (
			<form onSubmit={this.onSubmit}>
				{project && <div>{project}</div>}
				<FormControl
					value={inputValue}
					onChange={this.onChangeHandler}
					placeholder="Enter you todo item"
				/>
				{showDownshift && (
					<Downshift
						userDatabase={userDatabase}
						setProjTag={this.setProjTag}
						downshiftContent={downshiftContent}
					/>
				)}
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
							<FaFileTextO onClick={this.addProj} />
						</span>
						<span data-desc={data[1]}>
							<FaTags onClick={this.addTag} />
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

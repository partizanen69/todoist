import React from 'react';
import {
	FaTags,
	FaFileTextO,
	FaFlagO,
	FaCommentO,
	FaClose,
} from 'react-icons/lib/fa/';
import { FormControl, Button } from 'react-bootstrap';

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
			tags: ['Tag 1'],
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

	setProjTag = value => {
		const { inputValue, downshiftContent, tags } = this.state;
		if (downshiftContent === 'proj') {
			this.setState({
				project: value,
				showDownshift: false,
				inputValue: /^#$/.test(inputValue)
					? ''
					: / #$/.test(inputValue) &&
					  inputValue.slice(0, -2),
			});
		}

		if (downshiftContent === 'tag') {
			const tagArr = tags;
			tagArr.push(value);
			this.setState({
				tags: tagArr,
				showDownshift: false,
				inputValue: /^@$/.test(inputValue)
					? ''
					: / @$/.test(inputValue) &&
					  inputValue.slice(0, -2),
			});
		}
	};

	delTag(idx, e) {
		this.state.tags.splice(idx, 1);
		this.setState({ tags: this.state.tags });
	}

	render() {
		const {
			inputValue,
			showDownshift,
			project,
			downshiftContent,
			tags,
		} = this.state;
		const { hideForm, userDatabase } = this.props;
		return (
			<form onSubmit={this.onSubmit}>
				{project && (
					<div className="project">
						{project}
						<span>
							<FaClose
								onClick={() =>
									this.setState({ project: '' })
								}
							/>
						</span>
					</div>
				)}
				{tags &&
					tags.map((item, idx) => (
						<div key={idx} className="tag">
							{item}
							<span>
								<FaClose
									onClick={this.delTag.bind(
										this,
										idx
									)}
								/>
							</span>
						</div>
					))}
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

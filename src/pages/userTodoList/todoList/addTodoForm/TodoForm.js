import React from 'react';
import { FaClose } from 'react-icons/lib/fa/';
import { FormControl, Button } from 'react-bootstrap';

import firebase from '../../../../firebase/firebase';
import 'react-tagsinput/react-tagsinput.css';
import Downshift from './todoForm/Downshift';
import SettingsButtons from './todoForm/SettingsButtons';

class TodoForm extends React.Component {
	constructor() {
		super();
		this.state = {
			inputValue: '',
			showDownshift: false,
			project: '',
			tags: [],
			downshiftContent: '',
			filterValue: '',
			filteredArray: [],
			priority: 'low',
			comment: '',
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
			this.setState(
				{
					inputValue: '#',
				},
				() => {
					this.isShowDownshift(this.state.inputValue);
				}
			);

		inputValue &&
			inputValue !== '#' &&
			this.setState(
				{
					inputValue: inputValue + ' #',
				},
				() => {
					this.isShowDownshift(this.state.inputValue);
				}
			);
	};

	addTag = () => {
		const { inputValue } = this.state;
		!inputValue &&
			this.setState(
				{
					inputValue: '@',
				},
				() => {
					this.isShowDownshift(this.state.inputValue);
				}
			);

		inputValue &&
			inputValue !== '@' &&
			this.setState(
				{
					inputValue: inputValue + ' @',
				},
				() => {
					this.isShowDownshift(this.state.inputValue);
				}
			);
	};

	onChangeHandler = e => {
		this.setState({ inputValue: e.target.value }, () => {
			const { inputValue } = this.state;
			this.isShowDownshift(inputValue);
		});
	};

	isShowDownshift = val => {
		let showProj = /^#/.test(val) || / #/.test(val);
		let showTag = /^@/.test(val) || / @/.test(val);
		let downshiftContent = showProj
			? 'proj'
			: showTag
				? 'tag'
				: '';
		let filterValue =
			/^#/.test(val) || /^@/.test(val)
				? val.slice(1)
				: / #/.test(val)
					? val.slice(val.search(/ #/) + 2)
					: / @/.test(val)
						? val.slice(val.search(/ @/) + 2)
						: '';

		this.setState(
			{
				showDownshift: showProj || showTag,
				downshiftContent,
				filterValue,
			},
			() => {
				this.filter();
			}
		);
	};

	filter = () => {
		const { downshiftContent, filterValue } = this.state;
		const { projects, tags } = this.props.userDatabase;
		const arrayToFilter =
			downshiftContent === 'proj'
				? Object.values(projects)
				: downshiftContent === 'tag'
					? Object.values(tags)
					: [];
		const regExp = new RegExp(filterValue, 'gi');
		const filteredArray = arrayToFilter.filter(item =>
			regExp.test(item)
		);
		this.setState({ filteredArray });
	};

	setProjTag = value => {
		const { inputValue, downshiftContent, tags } = this.state;
		if (downshiftContent === 'proj') {
			this.setState({
				project: value,
				showDownshift: false,
				inputValue: /^#/.test(inputValue)
					? ''
					: / #$/.test(inputValue) &&
					  inputValue.slice(0, inputValue.search(/ #/)),
			});
		}

		if (downshiftContent === 'tag') {
			const tagArr = tags;
			tagArr.push(value);
			this.setState({
				tags: tagArr,
				showDownshift: false,
				inputValue: /^@/.test(inputValue)
					? ''
					: / @$/.test(inputValue) &&
					  inputValue.slice(0, inputValue.search(/ @/)),
			});
		}
	};

	delTag(idx, e) {
		const { tags } = this.state;
		tags.splice(idx, 1);
		this.setState({ tags: tags });
	}

	setPriority = (val, e) => {
		this.setState({ priority: val });
	};

	setComment = (val, e) => {
		this.setState({ comment: val });
	};

	render() {
		const {
			inputValue,
			showDownshift,
			project,
			downshiftContent,
			tags,
			filterValue,
			filteredArray,
			priority,
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
						filterValue={filterValue}
						filteredArray={filteredArray}
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
					<SettingsButtons
						addTag={this.addTag}
						addProj={this.addProj}
						setPriority={this.setPriority}
						priority={priority}
						setComment={this.setComment}
					/>
				</div>
			</form>
		);
	}
}

export default TodoForm;

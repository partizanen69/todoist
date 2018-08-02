import React from 'react';
import Downshift from 'downshift';
import { FaClose } from 'react-icons/lib/fa/';
import { FormControl } from 'react-bootstrap';

import Styles from './Styles';

class ChooseTags extends React.Component {
	constructor() {
		super();
		this.state = {
			tags: [],
			selectedTags: [],
		};
	}

	static getDerivedStateFromProps(props, state) {
		const tags = props.tags
			? props.tags.map((item, key) => {
					return { value: item };
			  })
			: [];
		return { tags };
	}

	addTag = tag => {
		const { selectedTags } = this.state;
		if (!selectedTags.includes(tag.value)) {
			selectedTags.push(tag.value);
			this.setState({ selectedTags }, () =>
				this.props.chooseTag(this.state.selectedTags)
			);
		}
	};

	delTag = key => {
		const { selectedTags } = this.state;
		selectedTags.splice(key, 1);
		this.setState({ selectedTags }, () =>
			this.props.chooseTag(this.state.selectedTags)
		);
	};

	render() {
		const { tags, selectedTags } = this.state;
		return (
			<Styles>
				<Downshift
					onChange={selection => this.addTag(selection)}
					itemToString={item => (item ? item.value : '')}>
					{({
						getInputProps,
						getItemProps,
						getLabelProps,
						isOpen,
						inputValue,
						highlightedIndex,
						selectedItem,
					}) => (
						<div>
							<FormControl
								type="text"
								{...getInputProps()}
								placeholder="Filter by tags"
							/>
							{isOpen ? (
								<div>
									{tags
										.filter(
											item =>
												!inputValue ||
												item.value
													.toLowerCase()
													.includes(
														inputValue.toLowerCase()
													)
										)
										.map((item, index) => (
											<div
												{...getItemProps({
													key: item.value,
													index,
													item,
													style: {
														backgroundColor:
															highlightedIndex ===
															index
																? 'lightgray'
																: 'white',
													},
												})}>
												{item.value}
											</div>
										))}
								</div>
							) : null}
						</div>
					)}
				</Downshift>
				<div>
					{selectedTags &&
						selectedTags.map((item, key) => {
							return (
								<span key={key}>
									{item}
									<i>
										<FaClose
											onClick={() =>
												this.delTag(key)
											}
										/>
									</i>
								</span>
							);
						})}
				</div>
			</Styles>
		);
	}
}

export default ChooseTags;

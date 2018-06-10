import React from 'react';
import { FaTag } from 'react-icons/lib/fa/';

import EditTagInput from './EditTagInput';
import EditTagButton from './EditTagButton';

class TagList extends React.Component {
	constructor() {
		super();
		this.state = {
			editTagId: '',
			props: {}
		};
	}

	editTag = (tagId, e) => {
		console.log(tagId);
		this.setState({editTagId: tagId});
	}

	cancelEdit = () => {
		this.setState({editTagId: ''})
	}

	saveTag = () => this.setState({editTagId: ''})
	
	static getDerivedStateFromProps(props, state) {
		return { props: props }
	}

	render() {
		const { tags } = this.state.props.userDatabase;
		const { uid } = this.state.props;
		const { editTagId } = this.state;

		return (
			<div className="tags-list-container">
				{tags && Object.keys(tags).map(key => (
					<div className="tags-row" key={key}>
						<div>
							<FaTag className="circle"/>
						</div>						
						<div>
							{editTagId ===  key
								? <EditTagInput 
									tagId={key} 
									saveTag={this.saveTag}
									uid={uid}
									value={tags[key]}
									cancelEdit={this.cancelEdit}
								  /> 
								: tags[key]
							}
						</div>
						<div>
							<EditTagButton 
								tagId={key} 
								uid={uid}
								editTag={this.editTag} 
							/>
						</div>
					</div>
				))}
			</div>
		);
	}
}

export default TagList;
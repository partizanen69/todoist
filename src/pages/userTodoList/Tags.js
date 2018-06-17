import React from 'react';
import { Panel } from 'react-bootstrap';
import { IoAndroidAdd } from 'react-icons/lib/io/';
import { FaTags } from 'react-icons/lib/fa/';

import Styles from './tags/Styles';
import ToggleArrow from '../../components/ToggleArrow/ToggleArrow';
import AddTag from './tags/AddTag';
import TagList from './tags/TagList';

class Tags extends React.Component {
	constructor() {
		super();
		this.state = {
			open: true,
			openAddTagForm: false,
		};
	}

	toggle = () => {
		const { open } = this.state;
		this.setState({ open: !open });
	};

	openAddTagForm = e => {
		const { open } = this.state;
		open && e.stopPropagation();
		this.setState({ openAddTagForm: true });
	};

	cancelTagForm = () => {
		this.setState({ openAddTagForm: false });
	};

	render() {
		const { uid, userDatabase } = this.props;
		const { open, openAddTagForm } = this.state;

		return (
			<Styles>
				<Panel onToggle={() => true} expanded={open}>
					<Panel.Heading onClick={this.toggle}>
						<Panel.Title>
							<ToggleArrow open={open} />
							<span className="panel-title-name">
								<FaTags />
								Tags
							</span>
							<span className="add-tag-button">
								<IoAndroidAdd
									onClick={this.openAddTagForm}
								/>
							</span>
						</Panel.Title>
					</Panel.Heading>
					<Panel.Collapse>
						<Panel.Body>
							{openAddTagForm && (
								<AddTag
									uid={uid}
									cancelTagForm={this.cancelTagForm}
								/>
							)}
							<TagList
								uid={uid}
								userDatabase={userDatabase}
							/>
							<div
								className="add-tag-link"
								onClick={this.openAddTagForm}>
								<span>
									<IoAndroidAdd />
								</span>
								Add tag
							</div>
						</Panel.Body>
					</Panel.Collapse>
				</Panel>
			</Styles>
		);
	}
}

export default Tags;

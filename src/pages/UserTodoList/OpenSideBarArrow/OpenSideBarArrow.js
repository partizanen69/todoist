import React from 'react';

import Styles from './Styles';

class OpenSideBarArrow extends React.Component {
	constructor() {
		super();
	}

	render() {
		const { isSideBarOpen } = this.props;
		return (
			<Styles isSideBarOpen={isSideBarOpen}>
				<div onClick={this.props.openSideBar}>
					<svg
						version="1.1"
						id="Capa_1"
						x="0px"
						y="0px"
						width="20px"
						height="30px"
						viewBox="0 0 532.158 532.157">
						<g>
							<path d="M355.349,266.078L230.464,461.539c-13.648,21.364-7.393,49.743,13.966,63.391c7.656,4.89,16.212,7.228,24.67,7.228    c15.141,0,29.963-7.491,38.721-21.193l140.675-220.173c9.626-15.067,9.626-34.358,0-49.425L307.821,21.192    C294.173-0.172,265.789-6.421,244.43,7.227c-21.365,13.647-27.614,42.032-13.966,63.391L355.349,266.078z" />
							<path d="M122.305,532.157c15.141,0,29.964-7.491,38.721-21.193l140.674-220.173c9.627-15.067,9.627-34.358,0-49.425    L161.026,21.192C147.373-0.172,118.995-6.421,97.636,7.227C76.271,20.874,70.022,49.259,83.67,70.618l124.885,195.46    L83.67,461.539c-13.648,21.364-7.393,49.743,13.966,63.391C105.292,529.825,113.848,532.157,122.305,532.157z" />
						</g>
					</svg>
				</div>
			</Styles>
		);
	}
}

export default OpenSideBarArrow;

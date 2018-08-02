import React from 'react';
import { FaMinus } from 'react-icons/lib/fa/';
import { IoAndroidAdd } from 'react-icons/lib/io/';

import Styles from './Styles';

class ShowHideFilter extends React.Component {
	render() {
		const { isFilterShow, toggleFilter } = this.props;
		return (
			<Styles>
				<span onClick={toggleFilter}>
					{isFilterShow ? (
						<i>
							<i>
								<FaMinus />
							</i>Hide filter options
						</i>
					) : (
						<i>
							<i>
								<IoAndroidAdd />
							</i>Show filter options
						</i>
					)}
				</span>
			</Styles>
		);
	}
}

export default ShowHideFilter;

import React from 'react';
import { FaCheck, FaClose } from 'react-icons/lib/fa/';

import Styles from './Styles';

class PassValidationPopUp extends React.Component {
	render() {
		const {
			passLength,
			specChar,
			upperLetter,
			passMatch,
		} = this.props;
		return (
			<Styles
				passLength={passLength}
				specChar={specChar}
				upperLetter={upperLetter}
				passMatch={passMatch}>
				<div>
					<i>{passLength ? <FaCheck /> : <FaClose />}</i>
					<div>
						Pass lenght shall not be less than 8
						characters
					</div>
				</div>
				<div>
					<i>{specChar ? <FaCheck /> : <FaClose />}</i>
					<div>
						Pass shall contain at least one special symbol
					</div>
				</div>
				<div>
					<i>{upperLetter ? <FaCheck /> : <FaClose />}</i>
					<div>
						Pass shall contain lowercase and uppercase
						letters
					</div>
				</div>
				<div>
					<i>{passMatch ? <FaCheck /> : <FaClose />}</i>
					<div>"Pass" and "Confirm pass" shall match</div>
				</div>
				<div className="triangle" />
			</Styles>
		);
	}
}

export default PassValidationPopUp;

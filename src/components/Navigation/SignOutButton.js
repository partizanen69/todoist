import React from 'react';

import { auth } from '../../firebase/';
import { FaSignOut } from 'react-icons/lib/fa/';

class SignOutLink extends React.Component {
	signOut = e => {
		e.preventDefault();
		auth.doSignOut();
	};

	render() {
		return (
			<span className="sign-out" onClick={this.signOut}>
				<FaSignOut /> Sign out
			</span>
		);
	}
}

export default SignOutLink;

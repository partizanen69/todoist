import React from 'react';

import { auth } from '../../firebase/';

class SignOutLink extends React.Component {
	signOut = e => {
		e.preventDefault();
		auth.doSignOut();
	};

	render() {
		return (
			<a href="#" onClick={this.signOut}>
				Sign out
			</a>
		);
	}
}

export default SignOutLink;

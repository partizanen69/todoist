import React from 'react';

import { auth } from '../firebase/';

const SignOutButton = () =>
	<button
		onClick={auth.doSignOut}
	>
		Sign out
	</button>

export default SignOutButton;
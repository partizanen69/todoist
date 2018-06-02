import React from 'react';

class LandingPage extends React.Component {
	render() {
		return (
			<div>
				<p>
					Welcome to TODO list application developed by Oleksii Ablitsov - junior
					fullstack web developer.
				</p>
				<p>To develop this app I used:</p>
				<ol>
					<li>Google firebase as backend platform. Specifically:</li>
					<ul>
						<li>firebase authentication;</li>
						<li>firebase real time database;</li>
						<li>firebase hosting.</li>
					</ul>
					<li>s</li>
				</ol>
				<p>
					Sorce code of the application can be reviewed at{' '}
					<a href="https://github.com/partizanen69/todoist">GitHub</a>
				</p>
			</div>
		);
	}
}

export default LandingPage;

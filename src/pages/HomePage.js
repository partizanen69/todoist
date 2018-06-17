import React from 'react';

class HomePage extends React.Component {
	render() {
		return (
			<div>
				<p>
					Welcome to TODO list application developed by
					Oleksii Ablitsov - junior fullstack web developer.
				</p>
				<p>To develop this app I used:</p>
				<ol>
					<li>
						Google firebase as backend platform.
						Specifically:
					</li>
					<ul>
						<li>firebase authentication;</li>
						<li>firebase real time database;</li>
						<li>firebase hosting.</li>
					</ul>
					<li>The following main front end tools:</li>
					<ul>
						<li>React</li>
						<li>React router</li>
						<li>React bootstrap</li>
						<li>Styled components</li>
						<li>
							Please see complete list at package.json
							file
						</li>
					</ul>
				</ol>
				<p>
					Sorce code of the application can be reviewed at{' '}
					<a href="https://github.com/partizanen69/todoist">
						GitHub
					</a>
				</p>
			</div>
		);
	}
}

export default HomePage;

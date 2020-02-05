import React from 'react';

function Landing({ auth, history }) {
	if (auth) {
		history.push('/surveys');
	}
	return (
		<div style={{ textAlign: 'center' }}>
			<h1>
				Emaily!
			</h1>
			Collect feedback form your users
		</div>
	);
}

export default Landing;
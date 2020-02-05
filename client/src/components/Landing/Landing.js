import React from 'react';
import MailLogo from '../../assets/mail_white.svg';

function Landing({ auth, history }) {
	if (auth) {
		history.push('/surveys');
	}
	return (
		<div className="center">
			<div className="red accent-2" style={{ borderRadius: '50%', padding: '3rem', width: 'fit-content', margin: ' 3rem auto 0' }}>
				<img src={MailLogo} style={{ height: '10rem' }} />
			</div>
			<h1>Emaily!</h1>
			<h4>Collect feedback form your users</h4>
		</div>
	);
}

export default Landing;
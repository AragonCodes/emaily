import React from 'react';
import { Link } from 'react-router-dom';
import Payments from './Payments';
import MailLogo from '../../assets/mail_white.svg'
import styles from './Header.module.css';

function Header({ auth }) {
	function renderContent() {
		switch (auth) {
			case null:
				return;
			case false:
				return <li><a href="/auth/google">Login With Google</a></li>;
			default:
				return [
					<li key="1"><Payments /></li>,
					<li key="3" style={{ margin: '0 10px' }}>
						Credits: {auth.credits}
					</li>,
					<li key="2"><a href="/api/logout">Logout</a></li>
				]
		}
	};

	return (
		<nav className="red accent-2">
			<div className="nav-wrapper" style={{ padding: '0 1rem' }}>
				<Link
					style={{ height: '100%' }}
					to={auth ? '/surveys' : '/'}
					className="left brand-logo valign-wrapper"
				>
					<span className="valign-wrapper" style={{ height: '100%' }}>
						<span className={styles.logoText}>Emaily</span>
						<img src={MailLogo} style={{ height: '3rem', marginLeft: '.5rem' }} />
					</span>
				</Link>
				<ul className="right nav-mobile">
					{renderContent()}
				</ul>
			</div>
		</nav>
	);
}

export default Header;

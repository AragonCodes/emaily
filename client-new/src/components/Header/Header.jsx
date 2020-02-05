import React from 'react';
import { Link } from 'react-router-dom';
import Payments from './Payments';

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
		<nav>
			<div className="nav-wrapper">
				<Link
					to={auth ? '/surveys' : '/'}
					className="left brand-logo"
				>
					<i className="material-icons right">mail_outline</i> Emaily
				</Link>
				<ul className="right">
					{renderContent()}
				</ul>
			</div>
		</nav>
	);
}

export default Header;

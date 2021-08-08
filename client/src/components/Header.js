import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

const Header = ({auth}) => {
	console.log(auth);
	const renderContent = () => {
		switch (auth) {
			case null:
				return;
			case false:
				return (
					<li><a href="/auth/google">Login With Google</a></li>
				);
			default:
				return <li><a href="/api/logout">Logout</a></li>;
		}
	};

	return (
		<div>
			<nav>
				<div className="nav-wrapper">
					<Link to="/" className="left brand-logo">Emaily</Link>
					<ul className="right">
						{renderContent()}
					</ul>
				</div>
			</nav>
		</div>
	);
};

const mapStateToProps = state => {
	return {
		auth: state.auth
	};
};

export default connect(mapStateToProps)(Header);
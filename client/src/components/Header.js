import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

const Header = (props) => {
	console.log(props.auth)
	const renderContent = () => {
		switch (props.auth) {
			case null:
				return;
			case false:
				return (
					<li><Link to="/auth/google">Login With Google</Link></li>
				);
			default:
				return <li><Link to="/api/logout">Logout</Link></li>;
		}
	};

	return (
		<div>
			<nav>
				<div className="nav-wrapper">
					<Link
						to={props.auth ? "/surveys" : '/'}
						className="left brand-logo"
					>
						Emaily
					</Link>
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
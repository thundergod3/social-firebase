import React from "react";
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import authAction from "../../../store/redux/actions/authAction";

const Header = () => {
	const { authReducer } = useSelector((state) => state);
	const { isAuthenticated } = authReducer;

	const dispatch = useDispatch();
	const { userLogoutRequest } = authAction;

	return (
		<nav className="navbar navbar-default">
			<div className="container-fluid">
				<div className="navbar-header">
					<button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
						<span className="icon-bar" />
						<span className="icon-bar" />
						<span className="icon-bar" />
					</button>
					<Link className="navbar-brand" to="/">
						SOCIAL FIREBASE
					</Link>
				</div>
				<div className="collapse navbar-collapse" id="myNavbar">
					<ul className="nav navbar-nav navbar-right">
						{!isAuthenticated ? (
							<li>
								<Link to="/login">Login</Link>
							</li>
						) : (
							<li>
								<Link to="/" onClick={() => dispatch(userLogoutRequest())}>
									Logout
								</Link>
							</li>
						)}
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Header;

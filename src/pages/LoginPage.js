import React from "react";

import { useDispatch, useSelector } from "react-redux";
import authAction from "../store/redux/actions/authAction";
import { Redirect } from "react-router-dom";

const LoginPage = () => {
	const { authReducer } = useSelector((state) => state);
	const { authLoading, isAuthenticated } = authReducer;

	const dispatch = useDispatch();
	const { googleLoginRequest, twitterLoginRequest } = authAction;

	console.log(isAuthenticated);

	if (isAuthenticated === true) return <Redirect to="/" />;

	return (
		isAuthenticated !== null && (
			<div className="container-fluid">
				<div className="row text-center">
					<div className="col-sm-12 jumbotron login-page-content">
						<h1>SOCIAL FIREBASE | {new Date().getFullYear()}</h1>
						<h2>
							<i>
								Login with your favourite <b>Social NetWork </b> to start writting!
							</i>
						</h2>
					</div>
					<div className="row login-page-button-container">
						<div className="col-sm-12">
							<button
								className="btn btn-danger btn-lg col-sm-6"
								onClick={() => dispatch(googleLoginRequest())}>
								Login with Google
							</button>
							<button
								className="btn btn-info btn-lg col-sm-6"
								onClick={() => dispatch(twitterLoginRequest())}>
								Login with Twitter
							</button>
						</div>
					</div>
				</div>
			</div>
		)
	);
};

export default LoginPage;

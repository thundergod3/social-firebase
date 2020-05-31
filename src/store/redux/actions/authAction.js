import * as types from "../../../constants/types";

class authAction {
	googleLoginRequest = () => {
		return {
			type: types.GOOGLE_LOGIN_REQUEST,
		};
	};

	twitterLoginRequest = () => {
		return {
			type: types.TWITTER_LOGIN_REQUEST,
		};
	};

	getUserRequest = () => {
		return {
			type: types.GET_USER_REQUEST,
		};
	};
	getUserSucceeded = (userData) => {
		return {
			type: types.GET_USER_SUCCEEDED,
			userData,
		};
	};

	userLogoutRequest = () => {
		return {
			type: types.USER_LOGOUT_REQUEST,
		};
	};
	userLogoutSucceeded = () => {
		return {
			type: types.USER_LOGOUT_SUCCEEDED,
		};
	};

	authLoading = () => {
		return {
			type: types.AUTH_LOADING,
		};
	};
	authLoaded = () => {
		return {
			type: types.AUTH_LOADED,
		};
	};

	authenticateRequest = () => {
		return {
			type: types.AUTHENTICATE_REQUEST,
		};
	};
	authenticateSucceeded = () => {
		return {
			type: types.AUTHENTICATE_SUCCEEDED,
		};
	};
	authenticatFailed = () => {
		return {
			type: types.AUTHENTICATE_FAILED,
		};
	};
}

export default new authAction();

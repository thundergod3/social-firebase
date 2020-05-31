import { takeLatest, takeEvery, put, select, call } from "redux-saga/effects";

import authService from "../../services/authService";

import * as types from "../../constants/types";
import authAction from "../redux/actions/authAction";

function* googleLogin() {
	try {
		yield localStorage.setItem("authenticated", true);

		yield authService.googleLogin();
		yield put(authAction.authenticateSucceeded());
	} catch (error) {
		console.log(error);
	}
}

function* twitterLogin() {
	try {
		yield localStorage.setItem("authenticated", true);
		yield authService.twitterLogin();
		yield put(authAction.authenticateSucceeded());
	} catch (error) {
		console.log(error);
	}
}

function* userLogout() {
	try {
		yield localStorage.removeItem("authenticated");
		yield authService.logoutUser();
		yield put(authAction.authenticatFailed());
	} catch (error) {
		console.log(error);
	}
}

function* getUser() {
	try {
		const responseAuth = yield call(authService.getUser);
		yield put(authAction.getUserSucceeded(responseAuth));
	} catch (error) {
		console.log(error);
	}
}

function* checkAuthenticated() {
	const checkAuth = localStorage.getItem("authenticated");
	if (checkAuth) {
		yield put(authAction.getUserRequest());
		yield put(authAction.authenticateSucceeded());
	} else {
		yield put(authAction.authenticatFailed());
	}
}

export default function* authSaga() {
	yield takeLatest(types.GOOGLE_LOGIN_REQUEST, googleLogin);
	yield takeLatest(types.TWITTER_LOGIN_REQUEST, twitterLogin);
	yield takeLatest(types.USER_LOGOUT_REQUEST, userLogout);
	yield takeLatest(types.GET_USER_REQUEST, getUser);
	yield takeLatest(types.AUTHENTICATE_REQUEST, checkAuthenticated);
}

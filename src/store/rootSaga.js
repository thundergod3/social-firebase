import { fork, all } from "redux-saga/effects";

import noteSaga from "./saga/noteSaga";
import authSaga from "./saga/authSaga";

export default function* rootSaga() {
	yield all([fork(noteSaga)]);
	yield all([fork(authSaga)]);
}

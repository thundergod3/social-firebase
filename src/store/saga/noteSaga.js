import { takeLatest, put, select } from "redux-saga/effects";

import noteService from "../../services/noteService";

import * as types from "../../constants/types";
import noteAction from "../redux/actions/noteAction";

import { v4 as uuidv4 } from "uuid";
import { history } from "../../config/history";

function* fetchNote() {
	yield put(noteAction.noteLoading());
	try {
		const response = yield noteService.fetchNote();
		yield put(noteAction.fetchNoteSucceeded(response));
		yield put(noteAction.noteLoaded());
	} catch (error) {
		yield put(noteAction.noteLoaded());
		console.log(error);
	}
}

function* fetchNoteDetail({ noteId }) {
	try {
		const { noteList } = yield select((state) => state.noteReducer);
		console.log(noteList);
		if (noteList.length !== 0) {
			yield put(noteAction.fetchNoteDetailLocalSucceeded(noteId));
		} else {
			const responseNote = yield noteService.fetchNoteDetail(noteId);
			yield put(noteAction.fetchNoteDetailSucceeded(responseNote));
		}
	} catch (error) {
		console.log(error);
	}
}

function* createNote({ noteForm }) {
	try {
		const {
			authReducer: {
				userData: { uid },
			},
		} = yield select((state) => state);
		const newNote = {
			...noteForm,
			noteId: uuidv4(),
			userUid: uid,
		};
		yield put(noteAction.createNoteSucceeded(newNote));
		yield noteService.createNote(newNote);
	} catch (error) {
		console.log(error);
	}
}

function* delteNote({ noteId }) {
	try {
		yield put(noteAction.deleteNoteSucceeded(noteId));
		yield noteService.delteNote(noteId);
	} catch (error) {
		console.log(error);
	}
}

function* editNote({ noteForm, noteId }) {
	try {
		yield noteService.editNote(noteForm, noteId);
		history.push("/");
	} catch (error) {
		console.log(error);
	}
}

function* commentNote({ noteId, noteComment }) {
	try {
		yield put(noteAction.commentNoteSucceeded(noteComment));
		yield noteService.commentNote(noteId, noteComment);
	} catch (error) {
		console.log(error);
	}
}

export default function* noteSaga() {
	yield takeLatest(types.FETCH_NOTE_REQUEST, fetchNote);
	yield takeLatest(types.FETCH_NOTE_DETAIL_REQUEST, fetchNoteDetail);
	yield takeLatest(types.CREATE_NOTE_REQUEST, createNote);
	yield takeLatest(types.EDIT_NOTE_REQUEST, editNote);
	yield takeLatest(types.DELETE_NOTE_REQUEST, delteNote);
	yield takeLatest(types.COMMENT_NOTE_REQUEST, commentNote);
}

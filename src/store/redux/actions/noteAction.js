import * as types from "../../../constants/types";

class noteAction {
	fetchNoteRequest = () => {
		return {
			type: types.FETCH_NOTE_REQUEST,
		};
	};
	fetchNoteSucceeded = (noteList) => {
		return {
			type: types.FETCH_NOTE_SUCCEEDED,
			noteList,
		};
	};

	createNoteRequest = ({ title, body }) => {
		const noteForm = { title, body };
		return {
			type: types.CREATE_NOTE_REQUEST,
			noteForm,
		};
	};
	createNoteSucceeded = (noteForm) => {
		return {
			type: types.CREATE_NOTE_SUCCEEDED,
			noteForm,
		};
	};

	deleteNoteRequest = (noteId) => {
		return {
			type: types.DELETE_NOTE_REQUEST,
			noteId,
		};
	};
	deleteNoteSucceeded = (noteId) => {
		return {
			type: types.DELETE_NOTE_SUCCEEDED,
			noteId,
		};
	};

	editNoteRequest = ({ title, body }, noteId) => {
		const noteForm = { title, body };
		console.log(noteId);
		return {
			type: types.EDIT_NOTE_REQUEST,
			noteForm,
			noteId,
		};
	};

	fetchNoteDetailRequest = (noteId) => {
		return {
			type: types.FETCH_NOTE_DETAIL_REQUEST,
			noteId,
		};
	};
	fetchNoteDetailSucceeded = (noteDetail) => {
		return {
			type: types.FETCH_NOTE_DETAIL_SUCCEEDED,
			noteDetail,
		};
	};

	fetchNoteDetailLocalSucceeded = (noteId) => {
		return {
			type: types.FETCH_NOTE_DETAIL_LOCAL_SUCCEEDED,
			noteId,
		};
	};

	commentNoteRequest = (noteId, noteComment) => {
		return {
			type: types.COMMENT_NOTE_REQUEST,
			noteId,
			noteComment,
		};
	};
	commentNoteSucceeded = (noteComment) => {
		return {
			type: types.COMMENT_NOTE_SUCCEEDED,
			noteComment,
		};
	};

	noteLoading = () => {
		return {
			type: types.NOTE_LOADING,
		};
	};
	noteLoaded = () => {
		return {
			type: types.NOTE_LOADED,
		};
	};
}

export default new noteAction();

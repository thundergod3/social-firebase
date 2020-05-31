import * as types from "../../../constants/types";

const initalState = {
	noteList: [],
	noteDetail: {},
	noteLoading: false,
};

const noteReducer = (state = initalState, action) => {
	switch (action.type) {
		case types.FETCH_NOTE_SUCCEEDED: {
			return {
				...state,
				noteList: action.noteList,
			};
		}

		case types.CREATE_NOTE_SUCCEEDED: {
			return {
				...state,
				noteList: [...state.noteList, action.noteForm],
			};
		}

		case types.DELETE_NOTE_SUCCEEDED: {
			return {
				...state,
				noteList: state.noteList.filter((note) => note.noteId !== action.noteId),
			};
		}

		case types.FETCH_NOTE_DETAIL_SUCCEEDED: {
			return {
				...state,
				noteDetail: action.noteDetail,
			};
		}

		case types.FETCH_NOTE_DETAIL_LOCAL_SUCCEEDED: {
			return {
				...state,
				noteDetail: state.noteList.find((note) => note.noteId === action.noteId),
			};
		}

		case types.COMMENT_NOTE_SUCCEEDED: {
			return {
				...state,
				noteDetail: {
					...state.noteDetail,
					comments: [...state.noteDetail.comments, action.noteComment],
				},
			};
		}

		case types.NOTE_LOADING: {
			return {
				...state,
				noteLoading: true,
			};
		}
		case types.NOTE_LOADED: {
			return {
				...state,
				noteLoading: false,
			};
		}

		default: {
			return state;
		}
	}
};

export default noteReducer;

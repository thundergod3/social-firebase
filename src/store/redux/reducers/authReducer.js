import * as types from "../../../constants/types";

const intitalState = {
	userData: {},
	isAuthenticated: null,
	authLoading: false,
};

const authReducer = (state = intitalState, action) => {
	switch (action.type) {
		case types.GET_USER_SUCCEEDED: {
			return {
				...state,
				userData: action.userData,
			};
		}

		case types.AUTH_LOADING: {
			return {
				...state,
				authLoading: false,
			};
		}
		case types.AUTH_LOADED: {
			return {
				...state,
				authLoading: true,
			};
		}

		case types.AUTHENTICATE_SUCCEEDED: {
			return {
				...state,
				isAuthenticated: true,
			};
		}
		case types.AUTHENTICATE_FAILED: {
			return {
				...state,
				isAuthenticated: false,
				userData: {},
			};
		}

		default: {
			return state;
		}
	}
};

export default authReducer;

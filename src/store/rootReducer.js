import { combineReducers } from "redux";
import noteReducer from "./redux/reducers/noteReducer";
import authReducer from "./redux/reducers/authReducer";

const rootReducer = combineReducers({
	noteReducer,
	authReducer,
});

export default rootReducer;

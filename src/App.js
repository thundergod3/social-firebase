import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";

import { useDispatch } from "react-redux";
import authAction from "./store/redux/actions/authAction";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import NoteDetailPage from "./pages/NoteDetailPage";
import NoteEditPage from "./pages/NoteEditPage";
import Header from "./components/layout/header/Header";

import "./App.scss";

const App = () => {
	const dispatch = useDispatch();
	const { authenticateRequest } = authAction;

	useEffect(() => {
		dispatch(authenticateRequest());
	}, []);

	return (
		<>
			<Header />
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route path="/login" component={LoginPage} />
				<Route path="/note/:noteId" component={NoteDetailPage} />
				<Route path="/edit/:noteId" component={NoteEditPage} />
			</Switch>
		</>
	);
};

export default App;

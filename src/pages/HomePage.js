import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import noteAction from "../store/redux/actions/noteAction";
import authAction from "../store/redux/actions/authAction";

import NoteForm from "../components/notes/noteForm/NoteForm";
import NoteList from "../components/notes/noteList/NoteList";
import Loading from "../components/utils/loading/Loading";

const HomePage = () => {
	const {
		authReducer: {
			isAuthenticated,
			userData: { photoURL, displayName },
		},
	} = useSelector((state) => state);

	const dispatch = useDispatch();
	const { fetchNoteRequest } = noteAction;
	const { getUserRequest, authenticateRequest } = authAction;

	useEffect(() => {
		dispatch(authenticateRequest());
	}, []);

	useEffect(() => {
		dispatch(fetchNoteRequest());
		dispatch(getUserRequest());
	}, []);

	if (!isAuthenticated) return <Redirect to="/login" />;

	return (
		<div className="container-fluid ">
			<div className="row">
				<div className="col-sm-2 text-center">
					{displayName ? (
						<>
							<img
								src={photoURL}
								height="100px"
								className="img img-responsive img-circle"
								style={{ padding: "20px" }}
							/>
							<h4 className="username">Welcome {displayName}</h4>
						</>
					) : (
						<Loading />
					)}
				</div>
				<div className="col-sm-10">
					<NoteForm />
					<NoteList />
				</div>
			</div>
		</div>
	);
};

export default HomePage;

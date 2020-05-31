import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import noteAction from "../store/redux/actions/noteAction";

import Loading from "../components/utils/loading/Loading";
import CommentForm from "../components/notes/commentForm/CommentForm";
import CommentList from "../components/notes/commentList/CommentList";

const NoteDetailPage = ({ match }) => {
	const {
		noteReducer: { noteDetail },
	} = useSelector((state) => state);

	const dispatch = useDispatch();
	const { fetchNoteDetailRequest } = noteAction;

	useEffect(() => {
		dispatch(fetchNoteDetailRequest(match.params.noteId));
	}, []);

	return Object.keys(noteDetail).length === 0 ? (
		<Loading />
	) : (
		<div className="container-fluid">
			<div className="row">
				<div className="col-sm-10 col-sm-offset-1">
					<h1>{noteDetail.title}</h1>
					<p>{noteDetail.body}</p>
					<CommentForm noteId={match.params.noteId} />
					<CommentList />
					<br />
					<Link to="/"> &#171; Back</Link>
				</div>
			</div>
		</div>
	);
};

export default NoteDetailPage;

import React from "react";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import noteAction from "../../../store/redux/actions/noteAction";

const NoteItem = ({ note: { title, body, noteId, uid } }) => {
	const {
		authReducer: {
			userData: { userUid },
		},
	} = useSelector((state) => state);

	const dispatch = useDispatch();

	return (
		<div className="jumbotron">
			<Link to={`/note/${noteId}`}>
				<h2>{title}</h2>
			</Link>
			<p>{body}</p>
			{userUid === uid && (
				<>
					<button
						className="btn btn-danger btn-xs"
						onClick={() => dispatch(noteAction.deleteNoteRequest(noteId))}>
						Delete
					</button>
					<button className="btn btn-info btn-xs pull-right">
						<Link to={`/edit/${noteId}`}>Update</Link>
					</button>
				</>
			)}
		</div>
	);
};

export default NoteItem;

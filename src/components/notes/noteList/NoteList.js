import React from "react";

import { useSelector } from "react-redux";
import NoteItem from "../noteItem/NoteItem";

import Loading from "../../utils/loading/Loading";

const NoteList = () => {
	const {
		noteReducer: { noteList, noteLoading },
	} = useSelector((state) => state);

	return (
		<>
			{noteLoading ? (
				<Loading />
			) : noteList.length === 0 ? (
				"You don't have any notes"
			) : (
				noteList.map((note) => <NoteItem note={note} key={note.noteId} />)
			)}
		</>
	);
};

export default NoteList;

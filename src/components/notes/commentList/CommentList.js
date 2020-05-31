import React from "react";

import { useSelector } from "react-redux";
import CommentItem from "../commentItem/CommentItem";

const CommentList = () => {
	const {
		noteReducer: {
			noteDetail: { comments },
		},
	} = useSelector((state) => state);

	return <>{comments && comments.map((comment) => <CommentItem key={comment.noteId} comment={comment} />)}</>;
};

export default CommentList;

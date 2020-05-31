import React from "react";

const CommentItem = ({ comment: { noteId, commentBody } }) => {
	return <div> &#8594; {commentBody}</div>;
};

export default CommentItem;

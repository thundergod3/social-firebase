import React from "react";

import { useDispatch, useSelector } from "react-redux";
import noteAction from "../../../store/redux/actions/noteAction";

import { Formik } from "formik";
import * as yup from "yup";

const CommentForm = ({ noteId }) => {
	const {
		authReducer: {
			userData: { uid },
		},
	} = useSelector((state) => state);

	const dispatch = useDispatch();
	const { commentNoteRequest } = noteAction;

	const yupSchema = yup.object({
		commentBody: yup.string().required(),
	});

	return (
		<Formik
			initialValues={{
				commentBody: "",
			}}
			validationSchema={yupSchema}
			onSubmit={(values, action) => {
				const comment = {
					commentBody: values.commentBody,
					uid,
				};
				dispatch(commentNoteRequest(noteId, comment));
				action.resetForm();
			}}>
			{(props) => (
				<>
					<div className="form-group">
						<textarea
							typeof="text"
							name="commentBody"
							className="form-control no-border"
							placeholder="Write comment ..."
							value={props.values.commentBody}
							onChange={props.handleChange("commentBody")}
							onBlur={props.handleBlur("commentBody")}></textarea>
						{props.touched.commentBody && (
							<p className="text-danger" style={{ marginTop: "10px" }}>
								{props.errors.commentBody}
							</p>
						)}
					</div>
					<div className="form-group" onClick={props.handleSubmit}>
						<button className="btn btn-success">Add comment</button>
					</div>
				</>
			)}
		</Formik>
	);
};

export default CommentForm;

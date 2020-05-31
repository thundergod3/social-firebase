import React from "react";

import { useDispatch } from "react-redux";
import noteAction from "../../../store/redux/actions/noteAction";

import { Formik } from "formik";
import * as yup from "yup";

const NoteForm = () => {
	const dispatch = useDispatch();
	const { createNoteRequest } = noteAction;

	const yupSchema = yup.object({
		title: yup.string().required(),
		body: yup.string().required(),
	});

	return (
		<Formik
			initialValues={{
				title: "",
				body: "",
			}}
			onSubmit={(values, actions) => {
				dispatch(createNoteRequest(values));
				actions.resetForm();
			}}
			validationSchema={yupSchema}>
			{(props) => (
				<>
					<div className="form-group">
						<input
							onChange={props.handleChange("title")}
							onBlur={props.handleBlur("title")}
							type="text"
							className="form-control no-border"
							placeholder="Title..."
							value={props.values.title}
						/>
						{props.touched.title && (
							<p className="text-danger" style={{ marginTop: "10px" }}>
								{props.errors.title}
							</p>
						)}
					</div>
					<div className="form-group">
						<textarea
							onChange={props.handleChange("body")}
							onBlur={props.handleBlur("body")}
							type="text"
							className="form-control no-border"
							placeholder="Body..."
							value={props.values.body}
						/>
						{props.touched.body && (
							<p className="text-danger" style={{ marginTop: "10px" }}>
								{props.errors.body}
							</p>
						)}
					</div>
					<div className="form-group">
						<button onClick={props.handleSubmit} type="submit" className="btn btn-primary col-sm-12">
							Save
						</button>
					</div>
					<br />
					<br />
					<br />
				</>
			)}
		</Formik>
	);
};

export default NoteForm;

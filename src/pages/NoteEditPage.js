import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import noteAction from "../store/redux/actions/noteAction";

import { Formik } from "formik";
import Loading from "../components/utils/loading/Loading";

const NoteEditPage = ({ match }) => {
	const {
		noteReducer: {
			noteDetail: { title, body },
		},
	} = useSelector((state) => state);

	const dispatch = useDispatch();
	const { fetchNoteDetailRequest, editNoteRequest } = noteAction;

	useEffect(() => {
		dispatch(fetchNoteDetailRequest(match.params.noteId));
	}, []);

	return (
		<Formik
			enableReinitialize
			initialValues={{
				title: title ? title : "",
				body: body ? body : "",
			}}
			onSubmit={(values, actions) => {
				dispatch(editNoteRequest(values, match.params.noteId));
			}}>
			{(props) => (
				<>
					{title ? (
						<div className="container-fluid">
							<div className="row">
								<div className="col-sm-6 col-sm-offset-3">
									<div className="form-group">
										<input
											onChange={props.handleChange("title")}
											onBlur={props.handleBlur("title")}
											type="text"
											className="form-control no-border"
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
											value={props.values.body}
										/>
										{props.touched.body && (
											<p className="text-danger" style={{ marginTop: "10px" }}>
												{props.errors.body}
											</p>
										)}
									</div>
									<div className="form-group">
										<button
											onClick={props.handleSubmit}
											type="submit"
											className="btn btn-primary col-sm-12">
											Update
										</button>
									</div>
								</div>
							</div>
						</div>
					) : (
						<Loading />
					)}
				</>
			)}
		</Formik>
	);
};

export default NoteEditPage;

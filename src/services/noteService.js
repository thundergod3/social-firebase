import { database } from "../config/firebase";

class noteService {
	constructor() {
		this.database = database;
	}

	fetchNote = () => {
		const noteListFb = [];
		return database
			.collection("notes")
			.get()
			.then((snapshot) => {
				snapshot.forEach((doc) => {
					noteListFb.push(doc.data());
				});
				return noteListFb;
			});
	};

	fetchNoteDetail = (noteId) => {
		return new Promise((resolve, reject) => {
			database
				.collection("notes")
				.get()
				.then((snapshot) => {
					snapshot.forEach((note) => {
						database
							.collection("notes")
							.doc(note.id)
							.get()
							.then((noteDetail) => {
								if (noteDetail.data().noteId === noteId) {
									return resolve(noteDetail.data());
								}
							});
					});
				});
		});
	};

	createNote = (noteForm) => {
		return database.collection("notes").add(noteForm);
	};

	delteNote = (noteId) => {
		return database
			.collection("notes")
			.get()
			.then((snapshot) => {
				snapshot.forEach((note) => {
					database
						.collection("notes")
						.doc(note.id)
						.get()
						.then((noteNeedDelete) => {
							noteNeedDelete.data().noteId === noteId &&
								database.collection("notes").doc(note.id).delete();
						});
				});
			});
	};

	editNote = (noteForm, noteId) => {
		return database
			.collection("notes")
			.get()
			.then((snapshot) => {
				snapshot.forEach((note) => {
					database
						.collection("notes")
						.doc(note.id)
						.get()
						.then((noteNeedEdit) => {
							console.log(noteNeedEdit.data().noteId);
							console.log(noteId);
							noteNeedEdit.data().noteId === noteId &&
								database.collection("notes").doc(note.id).update({
									title: noteForm.title,
									body: noteForm.body,
								});
						});
				});
			});
	};

	commentNote = (noteId, noteComment) => {
		return new Promise((resolve, reject) => {
			database
				.collection("notes")
				.get()
				.then((snapshot) => {
					snapshot.forEach((note) => {
						database
							.collection("notes")
							.doc(note.id)
							.get()
							.then((noteCommentResponse) => {
								if (noteCommentResponse.data().noteId === noteId) {
									return resolve(noteCommentResponse.data().comments);
								}
							});
					});
				});
		}).then((data) => {
			if (!data) data = [];
			data.push(noteComment);

			database
				.collection("notes")
				.get()
				.then((snapshot) => {
					snapshot.forEach((note) => {
						database
							.collection("notes")
							.doc(note.id)
							.get()
							.then((noteNeedComment) => {
								noteNeedComment.data().noteId === noteId &&
									database.collection("notes").doc(note.id).update({
										comments: data,
									});
							});
					});
				});
		});
	};
}

export default new noteService();

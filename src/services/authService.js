import { auth, googleProvider, twitterProvider } from "../config/firebase";

class authService {
	constructor() {
		this.auth = auth;
		this.googleProvider = googleProvider;
		this.twitterProvider = twitterProvider;
	}

	googleLogin = () => {
		return auth.signInWithPopup(googleProvider);
	};

	twitterLogin = () => {
		return auth.signInWithPopup(twitterProvider);
	};

	getUser = () => {
		return new Promise((resolve, reject) => {
			auth.onAuthStateChanged((user) => {
				if (user) {
					resolve(user.toJSON());
				} else {
					resolve(user);
				}
			});
		});
	};

	logoutUser = () => {
		return auth.signOut();
	};
}

export default new authService();

import * as firebase from "firebase";

let firebaseConfig = {
	apiKey: "AIzaSyDj1JWndagS8SwdI5csSObQO3pbcEIaANw",
	authDomain: "social-firebase-3ef2b.firebaseapp.com",
	databaseURL: "https://social-firebase-3ef2b.firebaseio.com",
	projectId: "social-firebase-3ef2b",
	storageBucket: "social-firebase-3ef2b.appspot.com",
	messagingSenderId: "871821520797",
	appId: "1:871821520797:web:95490377ff9b46c3a54974",
	measurementId: "G-JEZN64FDQD",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const database = firebase.firestore();
export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const twitterProvider = new firebase.auth.TwitterAuthProvider();

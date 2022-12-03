import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import { getFunctions } from "firebase/functions";

// const firebaseConfig = {
//   apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
//   authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
//   messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
// };

const firebaseConfig = {
	apiKey: "AIzaSyAhGvPRBY3dF701nrLS4ELnDjOXu97lxWE",
	authDomain: "sandboxc1377aca1.firebaseapp.com",
	databaseURL: "https://sandboxc1377aca1.firebaseio.com",
	projectId: "sandboxc1377aca1",
	storageBucket: "sandboxc1377aca1.appspot.com",
	messagingSenderId: "608369415433",
	appId: "1:608369415433:web:c24daec2ff8b25e1f3efd8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase

// const app = initializeApp(firebaseConfig);
// if (!firebase.apps.length) {
//   firebase.initializeApp({});
// }

// const functions = getFunctions(app);

const db = getFirestore(app);
const auth = getAuth(app);

export { auth, db };

import { auth } from "../config/firebase.config";
import {
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signOut,
} from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";

const UserAuthContext = createContext({});
export const useAuth = () => useContext(UserAuthContext);

export const UserAuthContextProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, async (user) => {
			if (user) {
				setUser({
					mail: user.email,
					name: user.displayName,
					token: await user.getIdToken(),
					data: user.providerData,
				});
				// console.log(user);
			} else setUser(null);
			setLoading(false);
		});
		return () => unsubscribe;
	}, []);

	const signup = (email, password) => {
		return createUserWithEmailAndPassword(auth, email, password);
	};
	const login = (email, password) => {
		return signInWithEmailAndPassword(auth, email, password);
	};
	const logout = async () => {
		await signOut(auth);
	};

	return (
		<UserAuthContext.Provider value={{ user, signup, login, logout }}>
			{!loading && children}
		</UserAuthContext.Provider>
	);
};

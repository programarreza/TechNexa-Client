import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { toast } from "react-hot-toast";

export const AuthContext = createContext()
const AuthProvider = ({ children }) => {

	const [user, setUser] = useState(null)

	console.log(12, user);

	const createUser = (email, password) => {
		return createUserWithEmailAndPassword(auth, email, password)
	}

	const login = (email, password) => {
		return signInWithEmailAndPassword(auth, email, password)
	}

	// login with google
	const googleProvider = new GoogleAuthProvider()
	const googleLogin = () => {
		signInWithPopup(auth, googleProvider)
			.then(result => {
				console.log(result.user);
				toast.success('Login Successfully')
			})
			.catch(error => {
				console.log(error);
				toast.error(error.message)
			})
		return
	}

	// observer
	useEffect(() => {
		const unSubscribe = onAuthStateChanged(auth, (user) => {
			setUser(user)
		})
		return () => {
			unSubscribe()
		}
	}, [])


	const logout = () => {
		return signOut(auth)
	}

	// profile update
	const profileUpdate = (name, photo) => {
		return updateProfile(name, photo)
	}


	const authInfo = {
		user,
		createUser,
		login,
		googleLogin,
		logout,
		profileUpdate,
	}

	return (
		<AuthContext.Provider value={authInfo}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;

AuthProvider.propTypes = {
	children: PropTypes.node,
}
import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { toast } from "react-hot-toast";

export const AuthContext = createContext()
const AuthProvider = ({ children }) => {
	const [loading, setLoading] =useState(true)
	const [user, setUser] = useState(null)

	// console.log(12, user);

	const createUser = (email, password) => {
		setLoading(true)
		return createUserWithEmailAndPassword(auth, email, password)
	}

	const login = (email, password) => {
		setLoading(true)
		return signInWithEmailAndPassword(auth, email, password)
	}

	// login with google
	const googleProvider = new GoogleAuthProvider()
	const googleLogin = () => {
		setLoading(true)
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

	
	
	const logout = () => {
		setLoading(true)
		return signOut(auth)
	}

	// profile update
	const profileUpdate = (name, photo) => {
		setLoading(true)
		return updateProfile(name, photo)
	}
	
	// observer
	useEffect(() => {
		const unSubscribe = onAuthStateChanged(auth, (user) => {
			setUser(user)
			setLoading(false)
		})
		return () => {
			unSubscribe()
		}
	}, [])

	const authInfo = {
		user,
		loading,
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
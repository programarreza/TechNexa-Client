import { createContext } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";

export const AuthContext = createContext()
const AuthProvider = ({ children }) => {

	const createUser = (email, password) => {
		return createUserWithEmailAndPassword(auth, email, password)
	}

	
	const authInfo = {
		createUser,
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
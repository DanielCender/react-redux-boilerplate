import { googleAuthProvider, firebase } from '../firebase/firebase';

export const login = uid => ({
	type: 'LOGIN',
	uid,
});

export const startLogin = () => {
	return dispatch => {
		return firebase.auth().signInWithPopup(googleAuthProvider);
	};
};

export const logout = () => ({
	type: 'LOGOUT',
});

export const startLogout = () => {
	return () => {
		return firebase.auth().signOut();
	};
};

import React, { Children, useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import auth from '../firebase/firebase.init';
import axios from 'axios';

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {

	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	const createUser = (email, password) =>{
		setLoading(true);
		return createUserWithEmailAndPassword(auth, email, password);
	}

	const signInWithGoogle = () =>{
		setLoading(true);
		return signInWithPopup(auth, googleProvider);
	}

	const signInUser = (email, password) =>{
		setLoading(true);
		return signInWithEmailAndPassword(auth, email, password);
	}

	const signOutUser = () =>{
		setLoading(true);
		return signOut(auth);
	}

	useEffect(()=> {
		const unSubscribe = onAuthStateChanged(auth, currentUser =>{
			setUser(currentUser);
			console.log('captured state', currentUser);
			
			//
			if(currentUser?.email){
				const user = { email: currentUser?.email};

				axios.post('http://localhost:5000/jwt', user, {
					withCredentials: true
				})
					.then(res => {
						console.log('login token',res.data);
						setLoading(false);
					})
			}
			else{
				axios.post('http://localhost:5000/logout', {}, {
					withCredentials: true
				})
				.then(res => {
					console.log('logout token', res.data);
					setLoading(false);
				})
			}

		})

		return ()=>{
			unSubscribe();
		}
	}, [])

	const authInfo = {
		user, 
		loading,
		createUser,
		signInUser,
		signOutUser,
		signInWithGoogle,
	}
	return (
		<AuthContext.Provider value={authInfo}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;
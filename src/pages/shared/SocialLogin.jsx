import React, { useContext } from 'react';
import AuthContext from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {

	const navigate = useNavigate();

	const { signInWithGoogle } = useContext(AuthContext);

	const handleGoogleSignIn = () =>{
		signInWithGoogle()
			.then(result =>{
				console.log(result.user);
			})
			navigate('/')

			.catch(error =>{
				console.log(error.message);
			})
	}
	return (
		<div className='m-4 text-center'>
			{/* <div className="divider">OR</div> */}
			<button onClick={handleGoogleSignIn} className='btn w-11/12 btn-accent'>Google</button>
		</div>
	);
};

export default SocialLogin;
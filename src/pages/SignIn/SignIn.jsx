import Lottie from 'lottie-react';
import React, { useContext } from 'react';

import loginLottieJSON from '../../assets/lottie/login.json'
import AuthContext from '../../context/AuthContext';
import SocialLogin from '../shared/SocialLogin';

const SignIn = () => {

	const { signInUser } = useContext(AuthContext);

	const handleSignIn = e =>{
		e.preventDefault();

		const form = e.target;
		const email = form.email.value;
		const password = form.password.value;

		console.log(email, password);

		signInUser(email, password)
			.then(result =>{
				console.log('sign in user', result.user);
			})
			.catch(error =>{
				console.log(error.message);
			})
	}
	return (
		<div>
		<div className="hero bg-base-200 min-h-screen">
			<div className="hero-content flex-col lg:flex-row-reverse lg:gap-32">
				<div className="text-center lg:text-left rounded-lg">
				<Lottie  animationData={loginLottieJSON}></Lottie>
				
				</div>
				<div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
				<form onSubmit={handleSignIn} className="card-body">
				<h1 className="text-3xl font-bold text-center">Login now!</h1>
					<div className="form-control">
					<label className="label">
						<span className="label-text">Email</span>
					</label>
					<input name='email' type="email" placeholder="email" className="input input-bordered" required />
					</div>
					<div className="form-control">
					<label className="label">
						<span className="label-text">Password</span>
					</label>
					<input name='password' type="password" placeholder="password" className="input input-bordered" required />
					<label className="label">
						<a href="#" className="label-text-alt link link-hover">Forgot password?</a>
					</label>
					</div>
					<div className="form-control mt-6">
					<button className="btn bg-gradient-to-t from-teal-950 to-rose-900 text-white">Login</button>
					</div>
				</form>
				<SocialLogin></SocialLogin>
				</div>
			</div>
			</div>
	</div>
	);
};

export default SignIn;
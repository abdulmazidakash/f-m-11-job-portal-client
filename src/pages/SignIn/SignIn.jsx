import Lottie from 'lottie-react';
import React, { useContext } from 'react';

import loginLottieJSON from '../../assets/lottie/login.json'
import AuthContext from '../../context/AuthContext';
import SocialLogin from '../shared/SocialLogin';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Typewriter } from 'react-simple-typewriter';

const SignIn = () => {

	const { signInUser } = useContext(AuthContext);
	const location = useLocation();
	const navigate = useNavigate();
	console.log('in signIn page', location);
	const from = location?.state || '/';

	const handleSignIn = e =>{
		e.preventDefault();

		const form = e.target;
		const email = form.email.value;
		const password = form.password.value;

		console.log(email, password);

		signInUser(email, password)
			.then(result =>{
				console.log('sign in user', result.user.email);
				const user = {email: result.user.email};
				axios.post('https://milestone-11-job-portal-server.vercel.app/jwt', user, {
					withCredentials: true
				})
					.then(res =>{
						console.log(res.data);
					})
			})
			// navigate(from)
			.catch(error =>{
				console.log(error.message);
			})
	}
	return (
		<div>
			<h1 className='text-4xl font-bold text-center my-8 text-cyan-700'>
				<Typewriter
				words={['Login Now!']}
				cursor
				cursorStyle={'|'}
				loop={Infinity}
				typeSpeed={70}
				delaySpeed={1000}
				deleteSpeed={50}

				></Typewriter>
			</h1>
		<div className="hero bg-base-200 min-h-screen my-8 rounded-lg">
			<div className="hero-content flex-col lg:flex-row-reverse lg:gap-32">
				<div className="text-center lg:text-left rounded-lg">
				<Lottie className='rounded-lg'  animationData={loginLottieJSON}></Lottie>
				
				</div>
				<div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
				<form onSubmit={handleSignIn} className="card-body">
				
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
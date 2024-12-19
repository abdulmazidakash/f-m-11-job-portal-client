
import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';
import auth from '../../firebase/firebase.init';
import jobIcon from '../../assets/job-portal-logo.png'

const Navbar = () => {

	const {user, signOutUser } = useContext(AuthContext);
	// console.log(user);

	const handleSignOut = ()=>{
		
		signOutUser()
			.then(() =>{
				console.log('successful logout user');
			})
			.catch(error =>{
				console.log('error logout', error);
			})
	}

	const links = <>
		<li><NavLink to='/'>Home</NavLink></li>
		<li><NavLink to='/myApplications'>My Application</NavLink></li>
		<li><NavLink to='/addJob'>Add Job</NavLink></li>
		<li><NavLink to='/myPostedJobs'>My Posted Jobs</NavLink></li>
	</>
	return (
		<div>
			<div className="navbar bg-gradient-to-bl from-sky-200 to-slate-200 rounded-b-lg">
				<div className="navbar-start">
					<div className="dropdown">
					<div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
						<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-5 w-5"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M4 6h16M4 12h8m-8 6h16" />
						</svg>
					</div>
					<ul
						tabIndex={0}
						className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow font-semibold">
						{links}
					</ul>
					</div>
					<Link to='/' className="btn btn-ghost text-xl">
					<img className='w-12' src={jobIcon} alt="" />
					<h3 className='text-3xl'>Job Portal</h3>
					</Link>
					
				</div>
				<div className="navbar-center hidden lg:flex">
					<ul className="menu menu-horizontal px-1 font-semibold">
					{links}
					</ul>
				</div>
				<div className="navbar-end font-semibold gap-2">
					{
						 user? <>
						<button className='btn btn-success text-white'> <p>{user?.email}</p></button>
						<button onClick={handleSignOut} className="btn bg-gradient-to-br from-rose-700 to-cyan-900 text-white">Log Out</button>
						
						 </> : <>
						<Link to='/register'><button className='btn btn-accent'>Register</button></Link>
						<Link to='/signIn'>
							<button className="btn btn-success">Sign In</button>
						</Link>
						 </>
					}
				</div>
				</div>
		</div>
	);
};

export default Navbar;


// import { useContext } from 'react'
// import logo from '../assets/images/logo.png'
// import { AuthContext } from '../providers/AuthProvider'
// import { Link } from 'react-router-dom'
// const Navbar = () => {
// //   const { user, logOut } = useContext(AuthContext)
//   return (
//     <div className='navbar bg-base-100 shadow-sm container px-4 mx-auto'>
//       <div className='flex-1'>
//         <Link to='/' className='flex gap-2 items-center'>
//           {/* <img className='w-auto h-7' src={logo} alt='' /> */}
//           <span className='font-bold'>SoloSphere</span>
//         </Link>
//       </div>
//       <div className='flex-none'>
//         <ul className='menu menu-horizontal px-1'>
//           <li>
//             <Link to='/'>Home</Link>
//           </li>
//           <li>
//             <Link to='/jobs'>All Jobs</Link>
//           </li>

//           {/* {!user && (
//             <li>
//               <Link to='/login'>Login</Link>
//             </li>
//           )} */}
//         </ul>

//         {user && (
//           <div className='dropdown dropdown-end z-50'>
//             <div
//               tabIndex={0}
//               role='button'
//               className='btn btn-ghost btn-circle avatar'
//             >
//               <div title={user?.displayName} className='w-10 rounded-full'>
//                 <img
//                   referrerPolicy='no-referrer'
//                   alt='User Profile Photo'
//                   src={user?.photoURL}
//                 />
//               </div>
//             </div>
//             <ul
//               tabIndex={0}
//               className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
//             >
//               <li>
//                 <Link to='/add-job' className='justify-between'>
//                   Add Job
//                 </Link>
//               </li>
//               <li>
//                 <Link to='/my-posted-jobs'>My Posted Jobs</Link>
//               </li>
//               <li>
//                 <Link to='/my-bids'>My Bids</Link>
//               </li>
//               <li>
//                 <Link to='/bid-requests'>Bid Requests</Link>
//               </li>
//               <li className='mt-2'>
//                 <button
//                 //   onClick={logOut}
//                   className='bg-gray-200 block text-center'
//                 >
//                   Logout
//                 </button>
//               </li>
//             </ul>
//           </div>
//         )}
//       </div>
//     </div>
//   )
// }

// export default Navbar
import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { Typewriter } from 'react-simple-typewriter';
import axios from 'axios';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const MyApplication = () => {

	const {user } = useAuth();
	const [jobs, setJobs] = useState([]);

	const axiosSecure = useAxiosSecure();
	
	useEffect(()=>{

		// if(user?.email){
		// 	fetch(`https://milestone-11-job-portal-server.vercel.app/job-application?email=${user.email}`)
		// 	.then(res => res.json())
		// 	.then(data => setJobs(data))
		// 	.catch(err =>{
		// 		console.log(err.message);
		// 	})
		// }

		// if(user?.email){
		// 	axios.get(`https://milestone-11-job-portal-server.vercel.app/job-application?email=${user.email}`, {
		// 		withCredentials: true,
		// 	})
		// 		// .then(res => console.log(setJobs(res.data)))
		// 		.then(res => setJobs(res.data))
		// 	}

		if(user?.email){
			axiosSecure.get(`/job-application?email=${user.email}`)
			.then(res => setJobs(res.data))
		}
		}
		, [user?.email])
	return (
		<div>

			<h1 className="text-4xl font-bold text-center my-8">
								 Welcome to{' '}
								 <span className="text-cyan-500">
									 <Typewriter
										 words={['My Job Application!']}
										 loop={Infinity}
										 cursor
										 cursorStyle="|"
										 typeSpeed={70}
										 deleteSpeed={50}
										 delaySpeed={1000}
									 />
								 </span>
							 </h1>
			<button className='btn btn-success btn-outline mt-8'>My Application: {jobs.length}</button>
			<div className="overflow-x-auto border-2 border-gray-300 rounded-lg my-8">
				<table className="table">
					{/* head */}
					<thead className='bg-gradient-to-br from-sky-700 to-teal-700 text-white'>
					<tr>
						<th>
						<label>
							<input type="checkbox" className="checkbox" />
						</label>
						</th>
						<th>Name</th>
						<th>Job</th>
						<th>Favorite Color</th>
						<th></th>
					</tr>
					</thead>
					<tbody>
					{/* row 1 */}
					{
						jobs.map(job => <tr 
						key={job._id}
						>
							<th>
							<label>
								<input type="checkbox" className="checkbox" />
							</label>
							</th>
							<td>
							<div className="flex items-center gap-3">
								<div className="avatar">
								<div className="mask mask-squircle h-12 w-12">
									<img
									src={job.company_logo}
									alt="Avatar Tailwind CSS Component" />
								</div>
								</div>
								<div>
								<div className="font-bold">{job.title}</div>
								<div className="text-sm opacity-50">{job.location}</div>
								</div>
							</div>
							</td>
							<td>
							{job.company}
							<br />
							<span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
							</td>
							<td>Purple</td>
							<th>
							<button className="btn btn-error btn-xs">Delete</button>
							</th>
						</tr>)
					}



					</tbody>
					{/* foot */}
					<tfoot>
					<tr>
						<th></th>
						<th>Name</th>
						<th>Job</th>
						<th>Favorite Color</th>
						<th></th>
					</tr>
					</tfoot>
				</table>
				</div>
		</div>
	);
};

export default MyApplication;
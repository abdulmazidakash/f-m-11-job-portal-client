import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';

const MyApplication = () => {

	const {user } = useAuth();
	const [jobs, setJobs] = useState([]);
	
	useEffect(()=>{

		if(user?.email){
			fetch(`http://localhost:5000/job-application?email=${user.email}`)
			.then(res => res.json())
			.then(data => setJobs(data))
			.catch(err =>{
				console.log(err.message);
			})
	}
		}
		, [user?.email])
	return (
		<div>
			<button className='btn btn-success btn-outline my-8'>my application: {jobs.length}</button>
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
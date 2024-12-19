import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { Link } from 'react-router-dom';

const MyPostedJobs = () => {

	const [jobs, setJobs] = useState([]);
	const { user } = useAuth();

	useEffect(()=>{
		if(user?.email){
			fetch(`http://localhost:5000/jobs?email=${user.email}`)
			.then(res => res.json())
			.then(data => setJobs(data))
	}
		}, [user?.email])
	return (
		<div>
			<button className='btn btn-outline btn-success my-8'>My posted jobs: {jobs.length}</button>
			<div className="overflow-x-auto my-6 border-2 border-gray-200 rounded-lg">
				<table className="table">
					{/* head */}
					<thead className='bg-gradient-to-br from-sky-700 to-teal-700 text-white'>
					<tr>
						<th></th>
						<th>Job Title</th>
						<th>Deadline</th>
						<th>Application Count</th>
						<th>View Application</th>
					</tr>
					</thead>
					<tbody>
					{/* row 1 */}
					{
						jobs.map((job, index) => 
							<tr key={index}>
						<th>{index + 1}</th>
						<td>{job.title}</td>
						<td>{job.applicationDeadline}</td>
						<td>{job.applicationCount}</td>
						<td>
							<Link to={`/viewApplications/${job._id}`}>
								<button className='btn btn-link'>View Applications</button>
							</Link>
						</td>
					</tr>
						)
					}


					</tbody>
				</table>
				</div>
		</div>
	);
};

export default MyPostedJobs;
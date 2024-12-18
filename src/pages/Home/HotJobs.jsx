import React, { useEffect, useState } from 'react';
import HotJobCard from './HotJobCard';
import { div } from 'motion/react-client';

const HotJobs = () => {

	const [jobs, setJobs] = useState([]);
	console.log(jobs);

	useEffect(()=>{
		fetch('http://localhost:5000/jobs')
			.then(res => res.json())
			.then(data =>{
				setJobs(data);
			})
	}, [])

	return (
		<div>
			<h1 className='text-4xl font-bold text-center'>Jobs of the day</h1>
			<p className='text-center font-semibold mt-2'>Search and connect with the right candidates faster.</p>
			<div className='grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2 my-8'>
			{
				jobs.map(job => <HotJobCard key={job._id} job={job}></HotJobCard> )
			}
		</div>
		</div>
	);
};

export default HotJobs;
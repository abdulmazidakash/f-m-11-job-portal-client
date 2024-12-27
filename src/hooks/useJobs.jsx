import axios from 'axios';
import React, { useEffect, useState } from 'react';

const useJobs = (sort, search, minSalary, maxSalary) => {
	const [jobs, setJobs] = useState();
	const [loading, setLoading] = useState(true);



	useEffect(() => {
		axios.get(`https://milestone-11-job-portal-server.vercel.app/jobs?sort=${sort}&search=${search}&min=${minSalary}&max=${maxSalary}`)
			.then((res) => {
				setLoading(false);
				setJobs(res.data);
			})
			.catch((error) => {
				setLoading(false);
				console.error("Error fetching jobs:", error);
			});
	}, [sort, search, minSalary, maxSalary]);
	

	return {jobs, loading};
};

export default useJobs;
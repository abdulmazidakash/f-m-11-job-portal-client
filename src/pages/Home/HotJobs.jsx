import React, { useEffect, useState } from 'react';
import HotJobCard from './HotJobCard';
import 'animate.css'; // লাইব্রেরি ইমপোর্ট
import { Typewriter } from 'react-simple-typewriter';


const HotJobs = () => {
    const [jobs, setJobs] = useState([]);
    console.log(jobs);

    useEffect(() => {
        fetch('http://localhost:5000/jobs')
            .then(res => res.json())
            .then(data => {
                setJobs(data);
            });
    }, []);

    return (
        <div>
            {/* <h1 className="text-4xl font-bold text-center animate__animated animate__flip animate__slower animate__infinite">
                Jobs of the day
            </h1> */}
			<div className="text-center my-8">
            <h1 className="text-4xl font-bold">
                {/* Welcome to{' '} */}
                <span className="text-cyan-500">
                    <Typewriter
                        words={['Jobs of the day!', 'Your Next Step!', 'Frontend Magic!']}
                        loop={Infinity}
                        cursor
                        cursorStyle="|"
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                </span>
            </h1>
        </div>
            <p className="text-center font-semibold mt-2">
                Search and connect with the right candidates faster.
            </p>
            <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-2 my-8">
                {jobs.map(job => (
                    <HotJobCard key={job._id} job={job}></HotJobCard>
                ))}
            </div>
        </div>
    );
};

export default HotJobs;

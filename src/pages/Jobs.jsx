import React, { useState } from 'react';
import useJobs from '../hooks/useJobs';
import HotJobCard from './Home/HotJobCard';
import { Typewriter } from 'react-simple-typewriter';
import { BiSearch } from 'react-icons/bi';

const Jobs = () => {
  const [sort, setSort] = useState(false);
  const [search, setSearch] = useState('');
  const [minSalary, setMinSalary] = useState('');
  const [maxSalary, setMaxSalary] = useState('');
  const { jobs, loading } = useJobs(sort, search, minSalary, maxSalary);

  if (loading) {
    return <h2 className="text-center text-2xl text-blue-600">Loading...</h2>;
  }

  return (
    <div className="w-full  bg-gray-100 p-4 rounded-lg my-8">
      {/* Header */}
      <h2 className="text-center mt-8 text-3xl font-bold text-sky-700">
        <Typewriter
          words={['All Jobs']}
          loop={Infinity}
          delaySpeed={1000}
          typeSpeed={70}
          deleteSpeed={50}
          cursor
          cursorStyle="|"
        />
      </h2>

      {/* Search and Sort */}
      <div className="w-11/12 mx-auto bg-white shadow-md py-5 px-3 flex flex-wrap items-center gap-4 rounded-lg mt-6">
        <button
          onClick={() => setSort(!sort)}
          className={`btn ${sort ? 'bg-green-500 text-white' : 'bg-gray-500 text-white'} px-4 py-2 rounded-lg`}
        >
          {sort ? 'Sorted by Salary' : 'Sort by Salary'}
        </button>
        <div className="flex items-center gap-2 flex-grow">
          <BiSearch className="text-4xl text-blue-600" />
          <input
            onKeyUp={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Search by location"
            className="input w-full max-w-lg px-4 py-2 border border-gray-300 rounded-lg"
          />
        </div>
        <div className="flex gap-2 flex-grow justify-end">
          <input
            onKeyUp={(e) => setMinSalary(e.target.value)}
            type="number"
            placeholder="Min Salary"
            className="input max-w-xs px-4 py-2 border border-gray-300 rounded-lg"
          />
          <input
            onKeyUp={(e) => setMaxSalary(e.target.value)}
            type="number"
            placeholder="Max Salary"
            className="input max-w-xs px-4 py-2 border border-gray-300 rounded-lg"
          />
        </div>
      </div>

      {/* Job Cards */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 my-8 px-4">
        {jobs.map((job) => (
          <HotJobCard key={job._id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default Jobs;

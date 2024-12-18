import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { MdLocationOn } from "react-icons/md";
import { BsLightningCharge } from "react-icons/bs";
import { BiTime } from "react-icons/bi";

const JobDetails = () => {

	const { _id, title, location, category,  salaryRange, description, requirements, company, company_logo} = useLoaderData()
	// console.log(job);
	return (
		<div>
		<div className="card  bg-white shadow-2xl rounded-lg p-5 border-2 border-gray-300 my-8">
			{/* কার্ডের হেডার */}
			<div className="flex justify-between items-start mb-4">
				<div className="flex items-center gap-3">
				{/* কোম্পানি লোগো */}
				<div className="bg-rose-200 text-white rounded-lg p-2">
					{/* <BsLightningCharge size={24} /> */}
					<img src={company_logo} className='w-14' alt="" />
				</div>
				{/* কোম্পানির নাম এবং লোকেশন */}
				<div>
					<h2 className="text-lg font-semibold text-gray-800">{company}</h2>
					<div className="flex items-center gap-1 text-sm text-gray-500">
					<MdLocationOn />
					<span>{location}</span>
					</div>
				</div>
				</div>
				{/* আইকন */}
				<div className="text-green-400">
				<BsLightningCharge size={20} />
				</div>
			</div>

			{/* পজিশন এবং সময় */}
			<h3 className="text-lg font-bold text-gray-800 mb-2">
				{title}
			</h3>
			<div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
				<BiTime />
				<span>Fulltime</span>
				<span>•</span>
				<span>4 minutes ago</span>
			</div>

			{/* বর্ণনা */}
			<p className="text-sm text-gray-600 mb-4 leading-relaxed">
				{description}
			</p>

			{/* স্কিলস */}
			<div className="flex gap-2 mb-4 flex-wrap">
			{
					requirements.map((skill, index) => <p
					key={index}
					className=' badge badge-outline'>{skill}</p>)
				}
			</div>

			{/* বেতন এবং বাটন */}
			<div className="flex justify-between items-center">
				<div className="text-xl  font-semibold text-blue-500">Salary: ${salaryRange.max} - ${salaryRange.min}</div>

				<Link to={`/jobApply/${_id}`}>
					<button className="btn  btn-accent">Apply Now</button>
				</Link>
			</div>
			</div>
	</div>
	);
};

export default JobDetails;
import { object } from 'motion/react-client';
import React from 'react';

const AddJob = () => {

	const handleAddJob = e =>{
		e.preventDefault();

		const formData = new FormData(e.target);
		// console.log(formData.entries());
		const initialData = Object.fromEntries(formData.entries());
		console.log(initialData);
		const {min, max, currency, ...newJob} = initialData;
		console.log(min, max, currency, newJob);
		newJob.salaryRange = { min, max, currency};
		console.log(newJob);
	}
	return (
		<div>
			<div className="bg-gray-100  flex items-center justify-center p-4 my-8 rounded-lg">
      <form
        onSubmit={handleAddJob}
        className="bg-white shadow-md rounded-lg p-6 w-full max-w-4xl"
      >
        {/* ফর্ম হেডার */}
        <div className="flex items-center gap-4 mb-6">
          {/* <img
            src=''
            alt="Company Logo"
            className="w-16 h-16 rounded-full"
          /> */}
          <h2 className="text-2xl font-bold text-gray-700">
            Add Job Information
          </h2>
        </div>

        {/* ফর্ম ইনপুটস */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					{/* Company */}
		<div>
            <label className="block text-gray-600 mb-1">Company</label>
            <input
              type="text"
              name="company"
            //   value={jobData.company}
            //   onChange={handleChange}
              className="w-full border px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
              placeholder="Enter Company Name"
            />
          </div>
          {/* Job Title */}
          <div>
            <label className="block text-gray-600 mb-1">Job Title</label>
            <input
              type="text"
              name="title"
            //   value={jobData.title}
            //   onChange={handleChange}
              className="w-full border px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
              placeholder="Enter Job Title"
            />
          </div>

          {/* Location */}
          <div>
            <label className="block text-gray-600 mb-1">Location</label>
            <input
              type="text"
              name="location"
            //   value={jobData.location}
            //   onChange={handleChange}
              className="w-full border px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
              placeholder="Enter Location"
            />
          </div>

		  		{/*hr name*/}
				  <div>
            <label className="block text-gray-600 mb-1">HR Name</label>
            <input
              type="text"
              name="hr_name"
            //   value={jobData.title}
            //   onChange={handleChange}
              className="w-full border px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
              placeholder="Enter hr_name"
            />
          </div>

		{/* hr email*/}
					<div>
            <label className="block text-gray-600 mb-1">HR Email</label>
            <input
              type="text"
              name="hr_email"
            //   value={jobData.title}
            //   onChange={handleChange}
              className="w-full border px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
              placeholder="Enter hr email"
            />
          </div>

		    {/* company logo */}
		<div>
            <label className="block text-gray-600 mb-1">Company Logo</label>
            <input
              type="text"
              name="company_logo"
            //   value={jobData.title}
            //   onChange={handleChange}
              className="w-full border px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
              placeholder="Enter company_logo"
            />
          </div>

          {/* Job Type */}
          <div>
            <label className="block text-gray-600 mb-1">Job Type</label>
            <select
              name="jobType"
            //   value={jobData.jobType}
            //   onChange={handleChange}
              className="w-full border px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            >
              <option value="Hybrid">Hybrid</option>
              <option value="Remote">Remote</option>
              <option value="On-site">On-site</option>
            </select>
          </div>

          {/* Job Field */}
          <div>
            <label className="block text-gray-600 mb-1">Pick a job Field</label>
            <select
              name="jobType"
            //   value={jobData.jobType}
            //   onChange={handleChange}
              className="w-full border px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            >
              <option value="engineering">Engineering</option>
              <option value="marketing">Marketing</option>
              <option value="finance">Finance</option>
            </select>
          </div>

          {/* Salary Range */}
          <div>
            <label className="block text-gray-600 mb-1">Salary Range</label>
            <div className="flex gap-2">
              <input
                type="number"
                name="salaryRange.min"
                // value={jobData.salaryRange.min}
                // onChange={handleChange}
                className="w-1/2 border px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                placeholder="Min"
              />
              <input
                type="number"
                name="salaryRange.max"
                // value={jobData.salaryRange.max}
                // onChange={handleChange}
                className="w-1/2 border px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                placeholder="Max"
              />
            </div>
          </div>

          {/* currency */}
          <div>
            <label className="block text-gray-600 mb-1">Currency</label>
            <select
              name="currency"
            //   value={jobData.jobType}
            //   onChange={handleChange}
              className="w-full border px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            >
              <option value="Hybrid">BDT</option>
              <option value="Remote">USD</option>
              <option value="On-site">INR</option>
            </select>
          </div>
        </div>




        {/* Description */}
        <div className="mt-4">
          <label className="block text-gray-600 mb-1">Description</label>
          <textarea
            name="description"
            // value={jobData.description}
            // onChange={handleChange}
            rows="4"
            className="w-full border px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            placeholder="Enter Job Description"
          ></textarea>
        </div>

        {/* requirements */}
        <div className="mt-4">
          <label className="block text-gray-600 mb-1">Job Requirements</label>
          <textarea
            name="requirements"
            // value={jobData.description}
            // onChange={handleChange}
            rows="4"
            className="w-full border px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            placeholder="Enter Job requirements"
          ></textarea>
        </div>
        {/* responsibility */}
        <div className="mt-4">
          <label className="block text-gray-600 mb-1">Job Responsibility</label>
          <textarea
            name="responsibility"
            // value={jobData.description}
            // onChange={handleChange}
            rows="4"
            className="w-full border px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            placeholder="Enter Job responsibility"
          ></textarea>
        </div>



        {/* সাবমিট বাটন */}
        <div className="flex justify-end mt-6">
          <button
            type="submit"
            className="btn btn-success hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-lg transition duration-300"
          >
            Add Job
          </button>
        </div>
      </form>
    </div>
		</div>
	);
};

export default AddJob;
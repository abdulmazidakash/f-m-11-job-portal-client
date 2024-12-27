import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';

const JobApply = () => {

	const {user} = useAuth();
	const navigate = useNavigate();

	const {id }= useParams();
	console.log(id);

	const handleJobApply = e =>{
		e.preventDefault();

		const form = e.target;
		const linkedIn = form.linkedIn.value;
		const github = form.github.value;
		const resume = form.resume.value;

		// console.log(linkedIn, github, resume);

		const jobsApplication = {
			job_id: id,
			applicant_email: user.email,
			linkedIn,
			github,
			resume

		}

		fetch('https://milestone-11-job-portal-server.vercel.app/job-applications', {
			method: 'POST',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify(jobsApplication)
		})
			.then(res => res.json())
			.then(data =>{
				// console.log(data);
				if(data.insertedId){
					Swal.fire({
						title: "Success!",
						icon: "success",
						draggable: true
					  });
				}
				navigate('/myApplications')
			})
	}
	return (
		<div>
			<div className="flex items-center justify-center py-8 bg-rose-100 rounded-lg my-8">
      <form
        onSubmit={handleJobApply}
        className="w-full max-w-sm bg-white p-6 rounded-lg shadow-md"
      >
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-4">
          Apply Job
        </h2>

        {/* নাম ইনপুট */}
        <div className="mb-4">
          <label className="block text-gray-600 font-medium mb-1" htmlFor="name">
            LinkedIn URL
          </label>
          <input
            type="url"
            name="linkedIn"
            id="name"
            placeholder="LinkedIn URL"
            // value={formData.name}
            // onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        {/* ইমেইল ইনপুট */}
        <div className="mb-4">
          <label
            className="block text-gray-600 font-medium mb-1"
            htmlFor="email"
          >
            Github URL
          </label>
          <input
            type="url"
            name="github"
            id="email"
            placeholder="Github URL"
            // value={formData.email}
            // onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>
        {/* ইমেইল ইনপুট */}
        <div className="mb-4">
          <label
            className="block text-gray-600 font-medium mb-1"
            htmlFor="email"
          >
            Resume URL
          </label>
          <input
            type="url"
            name="resume"
            id="email"
            placeholder="Resume URL"
            // value={formData.email}
            // onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>



        {/* সাবমিট বাটন */}
        <button
          type="submit"
          className="w-full btn btn-success hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg"
        >
          Apply
        </button>
      </form>
    </div>
		</div>
	);
};

export default JobApply;
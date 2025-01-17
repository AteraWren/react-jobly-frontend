import React, { useState, useEffect } from "react";
import JoblyApi from "../api";
import JobCard from "./JobCard";

function JobsPage({ currentUser }) {
	const [jobs, setJobs] = useState([]);

	useEffect(() => {
		async function getJobs() {
			let jobs = await JoblyApi.getJobs();
			setJobs(jobs);
		}
		getJobs();
	}, []);

	async function applyToJob(id) {
		await JoblyApi.applyToJob(currentUser.username, id);
	}

	return (
		<div className="JobsPage">
			{jobs.length ? (
				jobs.map((job) => (
					<JobCard
						key={job.id}
						job={job}
						hasApplied={currentUser.applications.includes(job.id)}
						applyToJob={applyToJob}
					/>
				))
			) : (
				<p>No jobs found.</p>
			)}
		</div>
	);
}

export default JobsPage;

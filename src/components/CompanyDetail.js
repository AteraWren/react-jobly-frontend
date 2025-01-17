import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from "../api";
import JobCard from "./JobCard";

function CompanyDetail({ currentUser }) {
	const { handle } = useParams();
	const [company, setCompany] = useState(null);

	useEffect(() => {
		async function getCompany() {
			let company = await JoblyApi.getCompany(handle);
			setCompany(company);
		}
		getCompany();
	}, [handle]);

	async function applyToJob(id) {
		await JoblyApi.applyToJob(currentUser.username, id);
	}

	if (!company) return <p>Loading...</p>;

	return (
		<div className="CompanyDetail">
			<h1>{company.name}</h1>
			<p>{company.description}</p>
			{company.jobs.map((job) => (
				<JobCard
					key={job.id}
					job={job}
					hasApplied={currentUser.applications.includes(job.id)}
					applyToJob={applyToJob}
				/>
			))}
		</div>
	);
}

export default CompanyDetail;

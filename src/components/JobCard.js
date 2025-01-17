import React, { useState, useEffect } from "react";
import JoblyApi from "../api";

function JobCard({ job, hasApplied, applyToJob }) {
	const [applied, setApplied] = useState(hasApplied);

	async function handleApply() {
		if (applied) return;
		await applyToJob(job.id);
		setApplied(true);
	}

	return (
		<div className="JobCard">
			<h2>{job.title}</h2>
			<p>Salary: {job.salary}</p>
			<p>Equity: {job.equity}</p>
			<button
				onClick={handleApply}
				disabled={applied}
			>
				{applied ? "Applied" : "Apply"}
			</button>
		</div>
	);
}

export default JobCard;

import React from "react";

function HomePage({ currentUser }) {
	return (
		<div>
			<h1>Welcome to Jobly!</h1>
			{currentUser ? (
				<p>Welcome back, {currentUser.username}!</p>
			) : (
				<p>Please log in or sign up to continue.</p>
			)}
		</div>
	);
}

export default HomePage;

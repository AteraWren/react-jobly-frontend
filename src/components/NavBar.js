import React from "react";
import { Link } from "react-router-dom";

function NavBar({ currentUser, logout }) {
	return (
		<nav>
			<Link to="/">Home</Link>
			<Link to="/companies">Companies</Link>
			<Link to="/jobs">Jobs</Link>
			{currentUser ? (
				<>
					<span>Welcome, {currentUser.username}</span>
					<Link to="/profile">Profile</Link>
					<button onClick={logout}>Logout</button>
				</>
			) : (
				<>
					<Link to="/login">Login</Link>
					<Link to="/signup">Signup</Link>
				</>
			)}
		</nav>
	);
}

export default NavBar;

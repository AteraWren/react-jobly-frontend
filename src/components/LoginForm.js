import React, { useState } from "react";

function LoginForm({ login }) {
	const [formData, setFormData] = useState({
		username: "testuser",
		password: "password",
	});

	function handleChange(evt) {
		const { name, value } = evt.target;
		setFormData((fData) => ({
			...fData,
			[name]: value,
		}));
	}

	function handleSubmit(evt) {
		evt.preventDefault();
		login(formData);
	}

	return (
		<div>
			<h1>Login</h1>
			<form onSubmit={handleSubmit}>
				<label htmlFor="username">Username</label>
				<input
					id="username"
					name="username"
					value={formData.username}
					onChange={handleChange}
				/>
				<label htmlFor="password">Password</label>
				<input
					id="password"
					name="password"
					type="password"
					value={formData.password}
					onChange={handleChange}
				/>
				<button type="submit">Login</button>
			</form>
		</div>
	);
}

export default LoginForm;

import React, { useState } from "react";

function SignupForm({ signup }) {
	const [formData, setFormData] = useState({
		username: "",
		password: "",
		firstName: "",
		lastName: "",
		email: "",
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
		signup(formData);
	}

	return (
		<div>
			<h1>Signup</h1>
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
				<label htmlFor="firstName">First Name</label>
				<input
					id="firstName"
					name="firstName"
					value={formData.firstName}
					onChange={handleChange}
				/>
				<label htmlFor="lastName">Last Name</label>
				<input
					id="lastName"
					name="lastName"
					value={formData.lastName}
					onChange={handleChange}
				/>
				<label htmlFor="email">Email</label>
				<input
					id="email"
					name="email"
					value={formData.email}
					onChange={handleChange}
				/>
				<button type="submit">Signup</button>
			</form>
		</div>
	);
}

export default SignupForm;

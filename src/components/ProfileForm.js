import React, { useState } from "react";
import JoblyApi from "../api";

function ProfileForm({ currentUser, updateUser }) {
	const [formData, setFormData] = useState({
		username: currentUser.username,
		firstName: currentUser.firstName,
		lastName: currentUser.lastName,
		email: currentUser.email,
		password: "",
	});

	const [formErrors, setFormErrors] = useState([]);

	function handleChange(evt) {
		const { name, value } = evt.target;
		setFormData((fData) => ({
			...fData,
			[name]: value,
		}));
	}

	async function handleSubmit(evt) {
		evt.preventDefault();
		let profileData = {
			firstName: formData.firstName,
			lastName: formData.lastName,
			email: formData.email,
			password: formData.password,
		};

		let username = formData.username;
		try {
			let updatedUser = await JoblyApi.updateUser(username, profileData);
			updateUser(updatedUser);
		} catch (errors) {
			setFormErrors(errors);
		}
	}

	return (
		<div>
			<h1>Profile</h1>
			<form onSubmit={handleSubmit}>
				<label htmlFor="username">Username</label>
				<input
					id="username"
					name="username"
					value={formData.username}
					onChange={handleChange}
					disabled
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
				<label htmlFor="password">Confirm password to make changes</label>
				<input
					id="password"
					name="password"
					type="password"
					value={formData.password}
					onChange={handleChange}
				/>
				{formErrors.length ? (
					<div>
						{formErrors.map((error) => (
							<p key={error}>{error}</p>
						))}
					</div>
				) : null}
				<button type="submit">Save Changes</button>
			</form>
		</div>
	);
}

export default ProfileForm;

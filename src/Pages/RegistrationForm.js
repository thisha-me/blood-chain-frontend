import React from "react";
import { useState } from "react";
import { Web3Button } from "@thirdweb-dev/react";

const CONTRACT_ADDRESS = "0x53A1F65Ab31E7F971082947fb79D335C77549a9c";

const RegistrationForm = () => {
	const [formData, setFormData] = useState({
		username: '',
		contactNum: '',
		email: '',
		age: '',
		bloodType: ''
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	// const [step, setStep] = useState(1);

	const handleSubmit = (e) => {
		// Logic for handling registration
		e.preventDefault();
		console.log('Registered!');
		console.log('Form submitted:', formData);
	};

	return (
		<div className="flex items-center justify-center h-screen mt-16 mb-16">
			<div className="w-full max-w-xl mx-auto m-4 p-4 bg-white rounded-md shadow-lg">
				<h1 className="text-3xl text-center mb-4">BloodChain Registration Form</h1>
				<form onSubmit={handleSubmit}>
					<div className="mb-4">
						<label className="block text-sm font-medium text-gray-600">
							Username:
						</label>
						<input
							type="text"
							name="username"
							value={formData.username}
							onChange={handleChange}
							className="mt-1 p-2 w-full border rounded-md"
						/>
					</div>

					<div className="mb-4">
						<label className="block text-sm font-medium text-gray-600">
							Contact Number:
						</label>
						<input
							type="text"
							name="contactNum"
							value={formData.contactNum}
							onChange={handleChange}
							className="mt-1 p-2 w-full border rounded-md"
						/>
					</div>

					<div className="mb-4">
						<label className="block text-sm font-medium text-gray-600">
							Email:
						</label>
						<input
							type="text"
							name="email"
							value={formData.email}
							onChange={handleChange}
							className="mt-1 p-2 w-full border rounded-md"
						/>
					</div>

					<div className="mb-4">
						<label className="block text-sm font-medium text-gray-600">
							Age:
						</label>
						<input
							type="text"
							name="age"
							value={formData.age}
							onChange={handleChange}
							className="mt-1 p-2 w-full border rounded-md"
						/>
					</div>

					<div className="mb-4">
						<label className="block text-sm font-medium text-gray-600">
							Blood Type:
						</label>
						<select
							name="bloodType"
							value={formData.bloodType}
							onChange={handleChange}
							className="mt-1 p-2 w-full border rounded-md"
						>
							<option value="">Select Blood Type</option>
							{bloodTypes.map((type) => (
								<option key={type} value={type}>
									{type}
								</option>
							))}
						</select>
					</div>
					<div className="text-center">
						<Web3Button
							contractAddress={CONTRACT_ADDRESS}
							action={(contract) => {
								contract.call("registerUser", [formData.username, formData.contactNum, formData.email, formData.age, formData.bloodType])
							}}
						>
							Register
						</Web3Button>
					</div>
				</form>
			</div>
		</div>
	);
};

const bloodTypes = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

export default RegistrationForm;

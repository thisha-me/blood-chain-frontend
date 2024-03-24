import React, { useState } from "react";
import { Web3Button } from "@thirdweb-dev/react";

const CONTRACT_ADDRESS ="0x5fD3E4da3bEcB422A9b1a4958ff435A1F24ccFc1";

const BloodReqForm = () => {
	const [formData, setFormData] = useState({
		pname: '',
		contactNum: '',
		district: '',
		province: '',
		donationCenter: '',
		bloodType: ''
	})

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('Form submitted:', formData);
		// You can perform actions with the form data here
	};

	return (
		<div className="flex items-center justify-center h-screen mt-16 mb-16">
			<div className="w-full max-w-xl mx-auto m-4 p-4 bg-white rounded-md shadow-lg">
				<h1 className="text-3xl text-center mb-4">Blood Request Form</h1>
				<form onSubmit={handleSubmit}>
					<div className="mb-4">
						<label className="block text-sm font-medium text-gray-600">
							Patient Name:
						</label>
						<input
							type="text"
							name="pname"
							value={formData.pname}
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
						<div className="mb-2 font-medium text-gray-600">Location</div>
						<label className="block text-sm font-medium text-gray-600">
							Province:
						</label>
						<select
							name="province"
							value={formData.province}
							onChange={handleChange}
							className="mt-1 p-2 w-full border rounded-md"
						>
							<option value="">Select Province</option>
							{provinces.map((province) => (
								<option key={province} value={province}>
									{province}
								</option>
							))}
						</select>
					</div>

					<div className="mb-4">
						<label className="block text-sm font-medium text-gray-600">
							District:
						</label>
						<select
							name="district"
							value={formData.district}
							onChange={handleChange}
							className="mt-1 p-2 w-full border rounded-md"
						>
							<option value="">Select District</option>
							{formData.province &&
								districts[formData.province].map((district) => (
									<option key={district} value={district}>
										{district}
									</option>
								))}
						</select>
					</div>

					<div className="mb-4">
						<label className="block text-sm font-medium text-gray-600">
							Donation Center:
						</label>
						<input
							type="text"
							name="donationCenter"
							value={formData.donationCenter}
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
								contract.call("submitBloodReq", [
									formData.pname,
									formData.contactNum,
									formData.district,
									formData.province,
									formData.donationCenter,
									formData.bloodType
								]);
							}}
						>
							Submit
						</Web3Button>
					</div>
				</form>
			</div>
		</div>
	)
}

const provinces = [
	'Central',
	'Eastern',
	'North Central',
	'Northern',
	'North Western',
	'Sabaragamuwa',
	'Southern',
	'Uva',
	'Western'
];

const districts = {
	'Central': ['Kandy', 'Matale', 'Nuwara Eliya'],
	'Eastern': ['Ampara', 'Batticaloa', 'Trincomalee'],
	'North Central': ['Anuradhapura', 'Polonnaruwa'],
	'Northern': ['Jaffna', 'Kilinochchi', 'Mannar', 'Mullaitivu', 'Vavuniya'],
	'North Western': ['Kurunegala', 'Puttalam'],
	'Sabaragamuwa': ['Kegalle', 'Ratnapura'],
	'Southern': ['Galle', 'Hambantota', 'Matara'],
	'Uva': ['Badulla', 'Monaragala'],
	'Western': ['Colombo', 'Gampaha', 'Kalutara']
}

const bloodTypes = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

export default BloodReqForm;
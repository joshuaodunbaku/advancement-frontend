import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import ErrorMessage from "../../ErrorMessage";
import schema from "../../../Utils/yup-schema-validators/employer-schema";
import Select from "react-select";
import { industryOptions } from "../../../the-advancement-place";

const EmployerForm = ({ setFormData, setPage }) => {
	// Yup Integration with "react-hook-form"
	const {
		register,
		handleSubmit,
		control,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
		defaultValues: {
			industry: [],
		},
	});

	const onSubmit = (data) => {
		setFormData(data);
		setPage(2);
		console.log(data);
	};

	return (
		<Form className="bg-light p-4 rounded-4 border border-2">
			<h3>Employer Info</h3>

			<Row className="mb-3">
				<Form.Group
					className="my-2 my-sm-3"
					as={Col}
					sm="6"
					controlId="firstName"
				>
					<Form.Label>Firstname</Form.Label>
					<Form.Control
						required
						type="text"
						placeholder="Firstname"
						{...register("fname")}
					/>
					<ErrorMessage source={errors.fname} />
				</Form.Group>

				<Form.Group
					className="my-2 my-sm-3"
					as={Col}
					sm="6"
					controlId="lastName"
				>
					<Form.Label>Lastname</Form.Label>
					<Form.Control
						required
						type="text"
						placeholder="Lastname"
						{...register("lname")}
					/>
					<ErrorMessage source={errors.lname} />
				</Form.Group>

				<Form.Group
					className="my-2 my-sm-3"
					as={Col}
					sm="6"
					controlId="password"
				>
					<Form.Label>Password</Form.Label>
					<Form.Control
						required
						type="password"
						placeholder="Password"
						{...register("pw")}
					/>
					<ErrorMessage source={errors.pw} />
				</Form.Group>

				<Form.Group
					className="my-2 my-sm-3"
					as={Col}
					sm="6"
					controlId="confirmPassword"
				>
					<Form.Label>Confirm Password</Form.Label>
					<Form.Control
						required
						type="password"
						placeholder="Confirm Password"
						{...register("confirmPassword")}
					/>
					<ErrorMessage source={errors.confirmPassword} />
				</Form.Group>

				<Form.Group className="my-2 my-sm-3" as={Col} sm="6" controlId="email">
					<Form.Label>Email</Form.Label>
					<Form.Control
						required
						type="email"
						placeholder="name@mail.com"
						{...register("email")}
					/>
					<ErrorMessage source={errors.email} />
				</Form.Group>

				<Form.Group className="my-2" as={Col} sm="6" controlId="phoneNumber">
					<Form.Label>Phone number</Form.Label>
					<Form.Control
						required
						type="tel"
						placeholder="07012345678"
						{...register("phone")}
					/>
					<ErrorMessage source={errors.phone} />
				</Form.Group>

				<Form.Group
					className="my-2 my-sm-3"
					as={Col}
					sm="6"
					controlId="companyName"
				>
					<Form.Label>Company Name</Form.Label>
					<Form.Control
						required
						type="text"
						placeholder="Company Name"
						{...register("company_name")}
					/>
					<ErrorMessage source={errors.company_name} />
				</Form.Group>

				<Form.Group
					className="my-2 my-sm-3"
					as={Col}
					sm="6"
					controlId="position"
				>
					<Form.Label>Address</Form.Label>
					<Form.Control
						required
						type="text"
						placeholder="Address..."
						{...register("address")}
					/>
					<ErrorMessage source={errors.address} />
				</Form.Group>

				<Form.Group
					className="my-2 my-sm-3"
					as={Col}
					sm="6"
					controlId="industry"
				>
					<Form.Label>Industry</Form.Label>
					<Controller
						name="industry"
						control={control}
						render={({ field: { onChange, value } }) => (
							<Select
								required
								isMulti
								placeholder="Industry..."
								{...register("industry")}
								// value={industryOptions.find((e) => e.value === value)}
								options={industryOptions}
								onChange={(val) => onChange(val)}
							/>
						)}
					/>
					<ErrorMessage source={errors.industry} />
				</Form.Group>

				<Form.Group
					className="my-2 my-sm-3"
					as={Col}
					sm="6"
					controlId="company email"
				>
					<Form.Label>Company Email</Form.Label>
					<Form.Control
						required
						type="text"
						placeholder="Company Email"
						{...register("company_email")}
					/>
				</Form.Group>
			</Row>
			<div className="text-center">
				<Button
					variant="primary"
					type="submit"
					onClick={handleSubmit(onSubmit)}
				>
					Create My Account
				</Button>
			</div>
		</Form>
	);
};

export default EmployerForm;

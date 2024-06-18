import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import ErrorMessage from "../../Components/ErrorMessage";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { MyContainer } from "../../Components/Styles/GlobalStyle.css";
import * as yup from "yup";

const schema = yup.object().shape({
	fname: yup.string().required("First name is required!"),
	lname: yup.string().required("Last name is required!"),
	email: yup
		.string()
		.email()
		.required("A correct email format johndoe@gmail.com is required"),
	phone: yup
		.string()
		.test(
			"len",
			"Phone number must be 11 characters",
			(val) => val.length === 11
		)
		.required("Phone number is required"),
	// phone: yup.number("Phone number is not valid").integer().min(11).max(14).required("Phone number is required"),
	sex: yup.string().max(1).required("Gender is required!"),

	// age: yup.string.required("Enter your phone number"),
});

const EditProfilePage = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
		defaultValues: {
			fname: "Bola",
			lname: "Tinubu",
			email: "Bolatinubu@email.com",
			phone: "08012345678",
			sex: "2",
		},
	});

	const onSubmit = (data) => {
		console.log("the data", data);
	};

	return (
		<>
			<MyContainer $padding_y="30px" className="container">
				<p className="display-6">Edit Profile</p>
				<Form className="bg-light p-4 rounded-4 border border-2">
					<h4>User Info</h4>
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
								placeholder="Firstname..."
								{...register("fname")}
							/>
							<ErrorMessage source={errors.fname} />
						</Form.Group>

						<Form.Group
							className="my-2 my-sm-3"
							as={Col}
							sm="6"
							controlId="lastname"
						>
							<Form.Label>Lastname</Form.Label>
							<Form.Control
								required
								type="text"
								placeholder="Lastname..."
								{...register("lname")}
							/>
							<ErrorMessage source={errors.lname} />
						</Form.Group>

						<Form.Group
							className="my-2 my-sm-3"
							as={Col}
							sm="6"
							controlId="email"
						>
							<Form.Label>Email</Form.Label>
							<Form.Control
								required
								type="email"
								placeholder="name@mail.com"
								{...register("email")}
							/>
							<ErrorMessage source={errors.email} />
						</Form.Group>

						<Form.Group
							className="my-2"
							as={Col}
							sm="6"
							controlId="phoneNumber"
						>
							<Form.Label>Phone number</Form.Label>
							<Form.Control
								type="tel"
								placeholder="Phone number..."
								{...register("phone")}
							/>
							<ErrorMessage source={errors.phone} />
						</Form.Group>

						<Form.Group
							className="my-2 my-sm-3"
							as={Col}
							sm="6"
							controlId="gender"
						>
							<Form.Label>Gender</Form.Label>
							<Form.Select
								required
								aria-label="Default select example"
								placeholder="Select..."
								{...register("sex")}
							>
								<option>Select...</option>
								<option value="1">Male</option>
								<option value="2">Female</option>
							</Form.Select>
							<ErrorMessage source={errors.sex} />
						</Form.Group>
					</Row>
					<div className="text-center">
						<Button
							variant="primary"
							type="submit"
							onClick={handleSubmit(onSubmit)}
						>
							Update Profile
						</Button>
					</div>
				</Form>
			</MyContainer>
		</>
	);
};

export default EditProfilePage;

import React from "react";
import { MyContainer } from "../../Components/Styles/GlobalStyle.css";
import { Button, Col, Form, Row } from "react-bootstrap";
import ErrorMessage from "../../Components/ErrorMessage";
import { useForm } from "react-hook-form";
import schema from "../../Utils/yup-schema-validators/add-user-schema";
import { yupResolver } from "@hookform/resolvers/yup";

const AddUserPage = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	const onSubmit = (data) => {
		console.log("the data", data);
	};

	return (
		<>
			<MyContainer $padding_y="30px" className="container">
				<p className="display-6">Add a new User</p>
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

						<div className="my-3">
							<h4>Assign Authorities</h4>
							{[
								{ title: "Admin", status: false },
								{ title: "Moderator", status: true },
								{ title: "Manager", status: true },
								{ title: "Chatter", status: false },
								{ title: "Collab Manager", status: false },
								{ title: "Avatar", status: true },
							].map(({ title, status }, index) => (
								<Form.Check
									key={index}
									inline
									label={`${title} Role`}
									name={`group ${index}`}
									type="switch"
									id={`inline-check-${index}`}
									className="py-2"
									checked={status}
								/>
							))}
						</div>
					</Row>
					<div className="text-center">
						<Button
							variant="primary"
							type="submit"
							onClick={handleSubmit(onSubmit)}
						>
							Add New User
						</Button>
					</div>
				</Form>
			</MyContainer>
		</>
	);
};

export default AddUserPage;

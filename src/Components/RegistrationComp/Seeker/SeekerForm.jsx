import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import ErrorMessage from "../../ErrorMessage";
import Select from "react-select";
import schema from "../../../Utils/yup-schema-validators/seeker-schema";
import { industryOptions } from "../../../the-advancement-place";

const SeekerForm = ({ setFormData, setPage }) => {
	// const [date, setDate] = useState(new Date().toLocaleDateString());
	// console.log(date);
	// Yup Integration with "react-hook-form"
	const {
		register,
		handleSubmit,
		control,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	const onSubmit = (data) => {
		console.log("the data", data);
		setPage(2);
		setFormData(data);
	};

	return (
		<>
			<Form className="bg-light p-4 rounded-4 border border-2">
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
						controlId="password"
					>
						<Form.Label>Password</Form.Label>
						<Form.Control
							required
							type="password"
							placeholder="Password..."
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
							type="password"
							placeholder="Confirm Password..."
							{...register("confirmPassword")}
						/>
						<ErrorMessage source={errors.confirmPassword} />
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

					<Form.Group className="my-2" as={Col} sm="6" controlId="phoneNumber">
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

					<Form.Group
						className="my-2 my-sm-3"
						as={Col}
						sm="6"
						controlId="experience"
					>
						<Form.Label>Years of Experience</Form.Label>
						<Form.Select
							required
							aria-label="Default select example"
							placeholder="Select..."
							{...register("years_of_experience")}
						>
							<option value={"0"}>Select...</option>
							<option value="1">1 year</option>
							<option value="2">2 years</option>
							<option value="3">3 years</option>
							<option value="4">4 years</option>
							<option value="5-10">5 to 10 years</option>
							<option value="11-15">11 to 15 years</option>
							<option value="16-20">16 to 20 years</option>
						</Form.Select>
						<ErrorMessage source={errors.years_of_experience} />
					</Form.Group>

					<Form.Group
						className="my-2 my-sm-3"
						as={Col}
						sm="6"
						controlId="qualification"
					>
						<Form.Label>Higest Qualification</Form.Label>
						<Form.Select
							required
							aria-label="Default select example"
							placeholder="Select..."
							{...register("highest_qualification")}
						>
							<option>Select...</option>
							<option value="High School (SSCE)">High School (SSCE)</option>
							<option value="Degree">Degree</option>
							<option value="Diploma">Diploma</option>
							<option value="HND">HND</option>
							<option value="M.Sc">M.Sc</option>
							<option value="B.Sc">B.Sc</option>
							<option value="N.C.E">N.C.E</option>
							<option value="O.N.D">O.N.D</option>
							<option value="Others">Others</option>
						</Form.Select>
						<ErrorMessage source={errors.highest_qualification} />
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
						controlId="availability"
					>
						<Form.Label>Availability</Form.Label>
						<Form.Select
							required
							aria-label="Default select example"
							placeholder="Select..."
							{...register("availability")}
						>
							<option>Select...</option>
							<option value="1">1</option>
							<option value="2">2</option>
						</Form.Select>
						<ErrorMessage source={errors.availability} />
					</Form.Group>

					<Form.Group
						className="my-2 my-sm-3"
						as={Col}
						controlId="preferredLocation"
					>
						<Form.Label>Preferred Location</Form.Label>
						<Form.Select {...register("preferred_location")}>
							<option>Choose...</option>
							<option>...</option>
						</Form.Select>
						<ErrorMessage source={errors.preferred_location} />
					</Form.Group>

					<Form.Group
						as={Col}
						sm="6"
						controlId="formFile"
						className="my-2 my-sm-3"
					>
						<Form.Label>Upload a CV</Form.Label>
						<Form.Control
							type="file"
							accept=".pdf,.doc,.docx"
							{...register("cv")}
						/>
						<ErrorMessage source={errors.cv} />
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
		</>
	);
};

export default SeekerForm;

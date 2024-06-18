import * as yup from "yup";
import React from "react";
import logo from "../Assets/logo.png";
import Showcase from "../Components/Showcase/Showcase";
import { Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import WordSpan from "../Components/WordSpan";
import ErrorMessage from "../Components/ErrorMessage";

const StaffLogin = () => {
	const schema = yup.object().shape({
		email: yup
			.string()
			.email("A correct email format johndoe@gmail.com is required")
			.required("Email is required"),
		pw: yup
			.string()
			.min(6, "Password must be a min of 6 characters!")
			.required("Input correct password"),
	});

	// Yup Integration with "react-hook-form"
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	const onSubmit = (data) => {
		console.log(data);
	};

	return (
		<>
			<Showcase height={"80vh"} align={"center"} justify={"center"}>
				<div className="align-self-center justify-self-center">
					<div
						className="container mx-auto"
						// style={{ height: "500px" }}
					>
						<main
							className="form-signin m-auto"
							style={{ minWidth: "320px", maxWidth: "350px" }}
						>
							<Form className="text-center text-dark">
								<img
									className="mb-4"
									src={logo}
									alt=""
									width="90"
									height="120"
								/>
								<h1 className="h3 mb-3 fw-normal text-white">
									<WordSpan>Staff </WordSpan>Sign In Page
								</h1>

								<div className="form-floating mb-3">
									<input
										type="email"
										className="form-control rounded-bottom-0 mb-1"
										id="floatingInput"
										placeholder="name@example.com"
										{...register("email")}
									/>
									<label htmlFor="floatingInput">Email address</label>
									<ErrorMessage source={errors.email} />
								</div>
								<div className="form-floating mb-3">
									<input
										type="password"
										className="form-control rounded-top-0 mb-1"
										id="floatingPassword"
										placeholder="Password"
										{...register("pw")}
									/>
									<label htmlFor="floatingPassword">Password</label>
									<ErrorMessage source={errors.pw} />
								</div>
								<button
									className="btn btn-outline-secondary w-100 my-2 py-2"
									type="submit"
									onClick={handleSubmit(onSubmit)}
								>
									Sign In
								</button>
								<p className="mt-5 mb-3 text-white">&copy; 2024</p>
							</Form>
						</main>
					</div>
				</div>
			</Showcase>
		</>
	);
};

export default StaffLogin;

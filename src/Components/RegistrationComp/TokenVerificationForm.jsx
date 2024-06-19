import * as yup from "yup";

import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import ErrorMessage from "../ErrorMessage";
import { Link } from "react-router-dom";

const TokenVerificationForm = ({ setPage, submit }) => {
	const [isChecked, setIsChecked] = useState(false);

	const schema = yup.object().shape({
		otp: yup.string().required("OTP is required!"),
		terms_and_conditions: yup
			.boolean()
			.isTrue("Please accept the Terms and Conditions to continue!")
			.required("Required!"),
	});

	// Yup Integration with "react-hook-form"
	const {
		register,
		handleSubmit,
		control,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
		defaultValues: {
			terms_and_conditions: false,
		},
	});

	const onSubmit = (data) => {
		submit(data);
		setIsChecked(!isChecked);
	};

	return (
		<div>
			<Form className="bg-light p-4 rounded-4 border border-2">
				<h4 className="text-center">Verification</h4>
				<Row className="mb-3">
					<div className="d-flex flex-column align-items-center">
						<Form.Group
							className="my-2 my-sm-3"
							as={Col}
							sm="6"
							controlId="otp"
						>
							<Form.Label>O T P</Form.Label>
							{isChecked && (
								<p className="text-success fw-6 p-0 m-0">
									Message sent to inbox, check spam if not found!
								</p>
							)}
							<Form.Control
								required
								type="text"
								placeholder="Token"
								{...register("otp")}
							/>
							<ErrorMessage source={errors.otp} />
						</Form.Group>
						<div className="text-center">
							<Form.Group
								className="d-flex justify-content-center"
								controlId="terms_and_conditions"
							>
								<Controller
									name="terms_and_conditions"
									control={control}
									render={({ field }) => (
										<>
											<Form.Check
												type="checkbox"
												checked={field.value}
												onChange={(e) => {
													field.onChange(e.target.checked);
												}}
											/>
											<Form.Label>
												<Link
													className="ps-2 link-primary link-offset-2 link-underline-opacity-25"
													target="_blank"
													to={"/jobs"}
												>
													I accept Terms and Conditions
												</Link>
											</Form.Label>
										</>
									)}
								/>
							</Form.Group>
							<ErrorMessage source={errors.terms_and_conditions} />
						</div>
					</div>
				</Row>
				<div className="text-center d-flex flex-column align-items-center flex-sm-row justify-content-center gap-3">
					<Button
						variant="primary"
						onClick={() => {
							setPage(1);
						}}
						style={{ minWidth: "11rem" }}
					>
						Go Back
					</Button>
					<Button
						variant="primary"
						type="submit"
						onClick={handleSubmit(onSubmit)}
						style={{ width: "11rem" }}
					>
						Create My Account
					</Button>
					<Button variant="primary" style={{ width: "11rem" }}>
						Request OTP
					</Button>
				</div>
			</Form>
		</div>
	);
};

export default TokenVerificationForm;

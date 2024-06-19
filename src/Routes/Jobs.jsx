import React, { useState } from "react";
import { Hover, MyContainer } from "../Components/Styles/GlobalStyle.css";
import { Badge, Button, Col, FloatingLabel, Form, Row } from "react-bootstrap";
import WordSpan from "../Components/WordSpan";
import { industryOptions, locationOptions } from "../the-advancement-place";
import Select from "react-select";
import { useNavigate } from "react-router-dom";
import schema from "../Utils/yup-schema-validators/job-search-schema";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import ErrorMessage from "../Components/ErrorMessage";

const Jobs = () => {
	const navigate = useNavigate();

	const {
		register,
		handleSubmit,
		control,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	const onSubmit = (data) => {
		console.log(data);
	};

	const customStyles = {
		control: (provided, state) => ({
			...provided,
			backgroundColor: "#f0f0e8",
			borderColor: "#cecec8ca",
			borderRadius: "2px",
			padding: "10px 0px",
			boxShadow: state.isFocused
				? "0 0 0 0.25rem rgba(0, 123, 255, 0.25)"
				: "none",
			"&:hover": {
				borderColor: "transparent",
			},
			"&:focus": {
				boxShadow: "0 0 0 0.25rem rgba(0, 123, 255, 0.25)",
			},
			// height: "48px", // Match Bootstrap's default form control height
			minHeight: "48px", // Ensures the minimum height is 38px
		}),
		dropdownIndicator: (provided) => ({
			...provided,
			color: "rgba(0, 123, 255, 0.75)", // customize color of the dropdown arrow
		}),
	};

	return (
		<>
			<MyContainer $padding_y="40px" className="container">
				<h3 className="bungee-regular mb-4">Find you dream Job</h3>
				<div className="border shadow py-4 px-5 bg-white-subtle rounded-4">
					<Row className="align-items-center">
						<Col sm className="d-flex flex-column pt-3 pb-3">
							<label
								className="fw-bold mb-2 fs-6 mt-auto"
								htmlFor="floatingInput1"
							>
								What
							</label>
							<FloatingLabel
								controlId="floatingInput1"
								label="Job title"
								className="mb-1"
							>
								<Form.Control
									className="border bg-transparent border-0 outline-none"
									type="text"
									placeholder="name@example.com"
									{...register("what")}
								/>
								<ErrorMessage source={errors.what} />
							</FloatingLabel>
						</Col>
						<Col sm className="d-flex flex-column pt-3 pb-3">
							<label
								className="fw-bold mb-2 fs-6 mt-auto"
								htmlFor="floatingInput2"
							>
								Where
							</label>
							<Controller
								name="where"
								control={control}
								render={({ field }) => (
									<Select
										isMulti
										styles={customStyles}
										placeholder={"Job location"}
										name="whereOption"
										{...register("where")}
										onChange={(val) => field.onChange(val)}
										value={field.value}
										options={locationOptions}
										className="border-0 bg-secondary"
										classNamePrefix="select"
									/>
								)}
							/>
							<ErrorMessage source={errors.where} />
						</Col>
						<Col sm className="d-flex flex-column pt-3 pb-3">
							<label
								className="fw-bold mb-2 fs-6 mt-auto"
								htmlFor="floatingInput3"
							>
								Industry
							</label>
							<Controller
								name="industries"
								control={control}
								render={({ field }) => (
									<Select
										isMulti
										styles={customStyles}
										placeholder={"Job sector..."}
										name="industryOption"
										onChange={(val) => field.onChange(val)}
										value={field.value}
										options={industryOptions}
										className="border-0 bg-secondary"
										classNamePrefix="select"
									/>
								)}
							/>
							<ErrorMessage source={errors.industries} />
						</Col>
					</Row>
				</div>

				<div className="mt-5">
					<h3 className="fw-bold">Recomended Jobs</h3>
					{Array.from({ length: 10 }).map(() => (
						<div className="p-2">
							<Hover>
								<div
									className="btn text-start border border-secondary-subtle p-3 rounded-3 onHover"
									onClick={() => navigate("job-description")}
								>
									<div className="mb-2">
										<Badge
											className={`ms-auto text-dark fw-bold bg-primary-subtle fw-bolder align-self-start p-2 me-3`}
										>
											<span>Date: 12/12/1212</span>
										</Badge>
										<Badge
											className={`ms-auto text-dark fw-bold bg-success-subtle fw-bolder align-self-start p-2`}
										>
											<span>2 positions</span>
										</Badge>
									</div>
									<div className="mb-2">
										<h3 className="py-2">
											<WordSpan>Data Analyst</WordSpan>
										</h3>
										<div className="d-flex gap-sm-3 flex-column flex-sm-row">
											<small className="fw-bold">Toronto-canada</small>
											<small className="fw-bold">Full-Time</small>
											<small className="fw-bold">80,000 up to 120,000</small>
										</div>
									</div>
									<div className="mb-2">
										<p>
											Lorem ipsum dolor sit amet consectetur adipisicing elit.
											Sed, neque cum quasi impedit quam aut officia tempora.
											Inventore, praesentium possimus sunt repudiandae excepturi
											cumque nobis voluptatum voluptatem. Debitis veniam
											consequatur sed voluptatum assumenda, amet quia tenetur
											accusamus magni nesciunt itaque.
										</p>
									</div>
									<Badge
										className={`ms-auto bg-danger-subtle text-secondary fw-bolder align-self-start p-2`}
									>
										Job Industry
									</Badge>
								</div>
							</Hover>
						</div>
					))}
				</div>
			</MyContainer>
		</>
	);
};

export default Jobs;

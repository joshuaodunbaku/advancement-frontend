import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import ErrorMessage from "../ErrorMessage";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "../../Utils/yup-schema-validators/post-job-schema";
import Select from "react-select";
import {
	experienceLevelOption,
	industryOptions,
	locationOptions,
	minimumQualificationOption,
	workTypeOptions,
} from "../../the-advancement-place";

const PostJobDetailsForm = ({ setPage, page }) => {
	// Yup Integration with "react-hook-form"
	const {
		register,
		handleSubmit,
		control,
		watch,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
		defaultValues: {
			confidential: false,
			monthly_salary_min: 0,
			monthly_salary_max: 0,
		},
	});

	const onSubmit = (data) => {
		console.log("the data", data);
		setPage(++page);
		// setFormData(data);
	};

	const confidentialValue = watch("confidential");

	return (
		<>
			<Form className="bg-light p-4 rounded-4 border border-2">
				<Row className="mb-3">
					<Form.Group
						className="my-2 my-sm-3"
						as={Col}
						sm="6"
						controlId="job_title"
					>
						<Form.Label>Job title</Form.Label>
						<Form.Control
							required
							type="text"
							placeholder="Job title..."
							{...register("job_title")}
						/>
						<ErrorMessage source={errors.job_title} />
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
							render={({ field: { value, onChange } }) => (
								<Select
									placeholder="Industry..."
									value={industryOptions.find((e) => e.value === value)}
									{...register("industry")}
									options={industryOptions}
									onChange={(val) => {
										console.log(value);
										return onChange(val.value);
									}}
								/>
							)}
						/>

						<ErrorMessage source={errors.industry} />
					</Form.Group>

					<Form.Group
						className="my-2 my-sm-3"
						as={Col}
						sm="6"
						controlId="work_type"
					>
						<Form.Label>Work Type</Form.Label>
						<Controller
							name="work_type"
							control={control}
							render={({ field: { onChange, value } }) => (
								<Select
									required
									placeholder="Work type..."
									value={workTypeOptions.find((e) => e.value === value)}
									{...register("work_type")}
									options={workTypeOptions}
									onChange={(val) => onChange(val.value)}
								/>
							)}
						/>
						<ErrorMessage source={errors.work_type} />
					</Form.Group>

					<Form.Group
						className="my-2 my-sm-3"
						as={Col}
						sm="6"
						controlId="minimum_qualification"
					>
						<Form.Label>Level of Qualification</Form.Label>
						<Controller
							name="minimum_qualification"
							control={control}
							render={({ field: { onChange, value } }) => (
								<Select
									required
									value={minimumQualificationOption.find(
										(e) => e.value === value
									)}
									placeholder="Minimum Qualification..."
									{...register("minimum_qualification")}
									options={minimumQualificationOption}
									onChange={(val) => onChange(val.value)}
								/>
							)}
						/>
						<ErrorMessage source={errors.minimum_qualification} />
					</Form.Group>

					<Form.Group
						className="my-2 my-sm-3"
						as={Col}
						sm="6"
						controlId="location"
					>
						<Form.Label>Location</Form.Label>
						<Controller
							name="location"
							control={control}
							render={({ field: { onChange, value } }) => (
								<Select
									required
									placeholder="Location..."
									{...register("location")}
									value={locationOptions.find((e) => e.value === value)}
									onChange={(val) => onChange(val.value)}
									options={locationOptions}
								/>
							)}
						/>

						<ErrorMessage source={errors.location} />
					</Form.Group>

					<Form.Group
						className="my-2 my-sm-3"
						as={Col}
						sm="6"
						controlId="years_of_experience"
					>
						<Form.Label>Years of experience</Form.Label>
						<Controller
							name="years_of_experience"
							control={control}
							render={({ field: { onChange, value } }) => (
								<Select
									required
									placeholder="Years of experience..."
									{...register("years_of_experience")}
									value={experienceLevelOption.find((e) => e.value === value)}
									options={experienceLevelOption}
									onChange={(val) => onChange(val.value)}
								/>
							)}
						/>
						<ErrorMessage source={errors.years_of_experience} />
					</Form.Group>

					<div className="col row ps-3">
						<Form.Label>Monthly Salary</Form.Label>
						<div className="ps-2 col">
							<Form.Group controlId="formMonthlySalaryMin">
								<Form.Label>Min</Form.Label>
								<Controller
									name="monthly_salary_min"
									control={control}
									disabled={confidentialValue}
									render={({ field }) => (
										<Form.Control
											type="number"
											{...field}
											{...register("monthly_salary_min")}
											isInvalid={!!errors.monthly_salary_min}
										/>
									)}
								/>
								{errors.monthly_salary_min && (
									<Form.Control.Feedback type="invalid">
										{errors.monthly_salary_min.message}
									</Form.Control.Feedback>
								)}
							</Form.Group>
						</div>
						<div className="col">
							<Form.Group controlId="formMonthlySalaryMax">
								<Form.Label>Max</Form.Label>
								<Controller
									name="monthly_salary_max"
									control={control}
									disabled={confidentialValue}
									render={({ field }) => (
										<Form.Control
											type="number"
											{...field}
											{...register("monthly_salary_max")}
											isInvalid={!!errors.monthly_salary_max}
										/>
									)}
								/>
								{errors.monthly_salary_max && (
									<Form.Control.Feedback type="invalid">
										<ErrorMessage source={errors.monthly_salary_max} />
									</Form.Control.Feedback>
								)}
							</Form.Group>
						</div>
						<div className="mt-2">
							<Form.Group controlId="formConfidential">
								<Controller
									name="confidential"
									control={control}
									render={({ field }) => (
										<Form.Check
											type="checkbox"
											label="Confidential"
											checked={field.value}
											onChange={(e) => {
												field.onChange(e.target.checked);
											}}
										/>
									)}
								/>
							</Form.Group>
							<ErrorMessage source={errors.confidential} />
						</div>
					</div>
					<Form.Group
						className="my-2 my-sm-3"
						as={Col}
						sm="6"
						controlId="no_of_available_openings"
					>
						<Form.Label>No of available Openings</Form.Label>
						<Form.Control
							required
							type="text"
							placeholder="No of available Openings..."
							{...register("no_of_available_openings")}
						/>
						<ErrorMessage source={errors.no_of_available_openings} />
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

export default PostJobDetailsForm;

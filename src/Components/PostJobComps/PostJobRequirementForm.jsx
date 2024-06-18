import React from "react";
import * as yup from "yup";

import { Button, Form, Row } from "react-bootstrap";
import ErrorMessage from "../ErrorMessage";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const PostJobRequirementForm = ({ submit, setPage, page }) => {
	const schema = yup.object().shape({
		job_summary: yup.string().required("Required!"),
		job_description: yup.string().required("Required!"),
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
		submit(data);
		setPage(++page);
	};

	return (
		<>
			<Form className="bg-light p-4 rounded-4 border border-2">
				<h4 className="lead">Job Description/Summary</h4>
				<Row className="mb-3">
					<Form.Group className="my-2 my-sm-3" controlId="job_summary">
						<Form.Label>Job Summary</Form.Label>
						<textarea
							style={{ minHeight: "200px" }}
							className="form-control"
							placeholder="Job summary here..."
							{...register("job_summary")}
						></textarea>
						<ErrorMessage source={errors.job_summary} />
					</Form.Group>

					<Form.Group className="my-2 my-sm-3" controlId="job_description">
						<Form.Label>Job Description</Form.Label>
						<textarea
							style={{ minHeight: "200px" }}
							className="form-control"
							{...register("job_description")}
							placeholder="Job description here..."
						></textarea>
						<ErrorMessage source={errors.job_description} />
					</Form.Group>
				</Row>
				<div className="text-center">
					<Button
						variant="primary"
						onClick={() => {
							setPage(--page);
						}}
						className="mx-3"
					>
						Prev
					</Button>
					<Button
						variant="primary"
						type="submit"
						onClick={handleSubmit(onSubmit)}
					>
						Next
					</Button>
				</div>
			</Form>
		</>
	);
};

export default PostJobRequirementForm;

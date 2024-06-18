import React from "react";
import { Badge, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

const PostJobPreview = ({ submit, setPage, page }) => {
	const onSubmit = (data) => {
		submit(data);
	};

	// Yup Integration with "react-hook-form"
	const { handleSubmit } = useForm();
	return (
		<div className="bg-light p-4 rounded-4 border border-2">
			<h4 className="text-center">Job Preview</h4>

			<div className="row mb-4">
				<div className="col-12 col-sm-9 align-self-center my-3 py-2">
					<h4>Senior Sofware Engineer</h4>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore,
						in!
					</p>
					{["Full Time", "Ogun State"].map((val, idx) => (
						<Badge key={idx} className="bg-success-subtle text-muted me-1">
							<span>{val}</span>
						</Badge>
					))}
					<br />
					<Badge className="bg-success-subtle text-muted">
						Salary Range:{" "}
						<small className="fw-bolder text-success">#70,000 - #100,000</small>
					</Badge>
				</div>
			</div>

			<hr className="mb-5" />

			<div className="mb-3">
				<h4>Job Summary</h4>
				<p>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga eius,
					fugiat tempore nostrum accusantium sequi ab esse officia eum
					laudantium magni accusamus aliquam repellat cupiditate voluptates,
					aperiam ad saepe incidunt ipsa laboriosam deserunt nemo soluta. Neque
					beatae aspernatur excepturi minima?
				</p>
			</div>

			<hr className="mb-3" />

			<div className="mb-3">
				<h4>Job Description</h4>
				<p>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga eius,
					fugiat tempore nostrum accusantium sequi ab esse officia eum
					laudantium magni accusamus aliquam repellat cupiditate voluptates,
					aperiam ad saepe incidunt ipsa laboriosam deserunt nemo soluta. Neque
					beatae aspernatur excepturi minima?
				</p>
			</div>

			<hr className="mb-3" />

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
					Create My Account
				</Button>
			</div>
		</div>
	);
};

export default PostJobPreview;

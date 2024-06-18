import React, { useState } from "react";
import PostJobDetailsForm from "../../Components/PostJobComps/PostJobDetailsForm";
import PostJobRequirementForm from "../../Components/PostJobComps/PostJobRequirementForm";
import PostJobPreview from "../../Components/PostJobComps/PostJobPreview";
import { MyContainer } from "../../Components/Styles/GlobalStyle.css";
import { ProgressBar } from "react-bootstrap";

const PostJobPage = () => {
	const [formData, setFormData] = useState({});
	const [page, setPage] = useState(1);

	const onSubmit = (data) => {
		console.log("the data", data);
	};

	const formPageDisplay = () => {
		return page === 1 ? (
			<PostJobDetailsForm
				setFormData={setFormData}
				setPage={setPage}
				page={page}
				formData={formData}
			/>
		) : page === 2 ? (
			<PostJobRequirementForm
				setFormData={setFormData}
				setPage={setPage}
				page={page}
				submit={onSubmit}
			/>
		) : (
			<PostJobPreview
				setFormData={setFormData}
				setPage={setPage}
				page={page}
				submit={onSubmit}
			/>
		);
	};

	return (
		<>
			<MyContainer $padding_y="15px">
				<div className="container py-md-5 py-3">
					<div>
						<h2 className="fw-bold">Fill Job Details</h2>
						<p className="lead fs-6">Get started now!</p>
					</div>
					<ProgressBar
						className={`mb-2 w-50 mx-auto border bg-light`}
						now={page === 1 ? 33.3 : page === 2 ? 66.6 : 100}
					/>
					{formPageDisplay(setPage)}
				</div>
			</MyContainer>
		</>
	);
};

export default PostJobPage;

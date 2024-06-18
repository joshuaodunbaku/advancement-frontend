import React, { useEffect, useState } from "react";
import SeekerForm from "./SeekerForm";
import TokenVerificationForm from "../TokenVerificationForm";
import { ProgressBar } from "react-bootstrap";
import { MyContainer } from "../../Styles/GlobalStyle.css";
import WordSpan from "../../WordSpan";

const SeekerRegComp = () => {
	const [page, setPage] = useState(2);
	const [formData, setFormData] = useState(1);

	const onSubmit = (data) => {
		console.log("the data", data);
	};

	useEffect(() => {
		formPageDisplay();
	}, [page]);

	const formPageDisplay = () => {
		return page === 1 ? (
			<SeekerForm
				setFormData={setFormData}
				setPage={setPage}
				formData={formData}
			/>
		) : (
			<TokenVerificationForm setPage={setPage} submit={onSubmit} />
		);
	};

	return (
		<>
			<MyContainer $padding_y="15px">
				<div className="container py-md-5 py-3">
					<div className="text-center">
						<h2 className="fw-bold">
							Create an account as a <WordSpan>Seeker</WordSpan>
						</h2>
						<p className="lead fs-6">Get started now!</p>
					</div>
					<ProgressBar
						className={`mb-2 w-50 mx-auto border bg-light`}
						now={page === 1 ? 50 : 100}
					/>
					{formPageDisplay(setPage)}
				</div>
			</MyContainer>
		</>
	);
};

export default SeekerRegComp;

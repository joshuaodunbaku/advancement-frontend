import React, { useEffect, useState } from "react";
import { MyContainer } from "../../Styles/GlobalStyle.css";
import { ProgressBar } from "react-bootstrap";
import EmployerForm from "./EmployerForm";
import TokenVerificationForm from "../TokenVerificationForm";
import WordSpan from "../../WordSpan";

const EmployerRegComp = () => {
	const [page, setPage] = useState(1);
	const [formData, setFormData] = useState(1);

	const onSubmit = (data) => {
		console.log("the data", data);
	};

	useEffect(() => {
		formPageDisplay();
	}, [page]);

	const formPageDisplay = () => {
		return page === 1 ? (
			<EmployerForm
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
							Create an account as an <WordSpan>Employer</WordSpan>
						</h2>
						<p className="lead fs-6">Get started now!</p>
					</div>
					<ProgressBar
						className="mb-2 w-50 mx-auto border bg-light"
						now={page === 1 ? 50 : 100}
					/>
					{formPageDisplay()}
				</div>
			</MyContainer>
		</>
	);
};

export default EmployerRegComp;

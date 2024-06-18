import React from "react";
import Showcase from "../Components/Showcase/Showcase";
import NotFoundImg from "../Assets/page-not-found.jpg";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
	const navigate = useNavigate();
	return (
		<>
			<Showcase align={"center"} height={"80vh"} bg_image={NotFoundImg}>
				<h1 className="display-3 fw-bold">Page Not Found</h1>
				<button className="btn btn-link" onClick={() => navigate("/")}>
					Home
				</button>
			</Showcase>
		</>
	);
};

export default NotFoundPage;

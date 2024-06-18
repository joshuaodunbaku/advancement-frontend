import React from "react";
import { MyContainer } from "../Components/Styles/GlobalStyle.css";
import { FaLocationDot } from "react-icons/fa6";
import WordSpan from "../Components/WordSpan";
import { Button } from "react-bootstrap";

const JobDescription = () => {
	return (
		<>
			<MyContainer $padding_y="20px">
				<div className="container">
					<div className="mb-4" id="head">
						<h2>
							<WordSpan>Senior Web Developer</WordSpan>
						</h2>
						<div className="d-flex gap-3 align-items-center text-muted">
							<small className="">Posted 3 hours ago</small>
							<span>
								<FaLocationDot /> Quarry Rd
							</span>
							<br />
							<span>Job Type: Full Time</span>
						</div>
					</div>
					<hr />
					<div id="body">
						<h4 className="text-muted py-1 mb-2">Job Summary</h4>
						<p className="fw-normal mb-3">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum
							perspiciatis atque ducimus.
						</p>
						<hr />
						<h4 className="text-muted py-1 mb-2">Job Description</h4>
						<p className="fw-normal mb-3">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum
							perspiciatis atque ducimus quod quam repellendus ipsum velit
							nostrum numquam sapiente officiis, doloribus aspernatur corrupti
							distinctio explicabo maxime earum adipisci veritatis non eos!
							Perspiciatis recusandae autem ipsum, reiciendis doloremque dolores
							doloribus delectus architecto ullam eius, alias ad tenetur
							adipisci expedita sapiente.
						</p>
						<hr className="my-4" />

						{/* <h3 className="text-muted">About Client</h3> */}
					</div>
					<Button variant="" className="btn-outline-danger">
						Report Post
					</Button>
				</div>
			</MyContainer>
		</>
	);
};

export default JobDescription;

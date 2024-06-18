import React from "react";
import Showcase from "../Components/Showcase/Showcase";
import { Link } from "react-router-dom";
import { MyContainer } from "../Components/Styles/GlobalStyle.css";
import { Card } from "react-bootstrap";
// import img_src from "../Assets/tutti-job-offer-1.png";
import { quickStart } from "../the-advancement-place";
import { Wrapper } from "../Components/Styles/Services.css";
import WordSpan from "../Components/WordSpan";

const Services = () => {
	return (
		<>
			<Wrapper>
				<Showcase align="start" height={"20vh"}>
					<div className="container">
						<h1 className="px-4">
							{/* Our {capitalizeFirstLetter(slashToSpace(useLocation().pathname))} */}
							Our <WordSpan>Services</WordSpan>
						</h1>
					</div>
				</Showcase>

				<MyContainer
					className="d-flex align-items-center justify-content-center"
					$padding_y="30px"
					height="70vh"
				>
					<div className="container">
						<div className="row align-items-center justify-content-center">
							{quickStart.map(({ name, text, img_src, email, link }, index) => (
								<div key={index} className="col-12 col-sm-6 col-lg-3 col-xl-3">
									<Card
										bg={"light"}
										text={"dark"}
										className="mb-2 text-center rounded-5 py-2 hover"
										style={{ minHeight: "400px" }}
									>
										<Card.Body>
											<h3 className="text-nowrap fs-5 fw-bold">{name}</h3>
											<Card.Img
												className="rounded-0 py-3"
												variant="top"
												src={img_src}
												height={"200px"}
											/>
											<Card.Text>{text}</Card.Text>
											<Link to={link.path} className="btn btn-link">
												Start Now
											</Link>
										</Card.Body>
									</Card>
								</div>
							))}
						</div>
					</div>
				</MyContainer>
			</Wrapper>
		</>
	);
};

export default Services;

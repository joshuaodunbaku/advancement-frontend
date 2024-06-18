import React from "react";
import { LandingPage } from "../Components/Styles/Home.css";
import Image1 from "../Assets/svg/undraw_career_progress_ivdb.svg";
import CardCarousell from "../Components/CardCarousell";
import {
	quickStart,
	the_advancement_place_services,
} from "../the-advancement-place";
import { Link } from "react-router-dom";
import WordSpan from "../Components/WordSpan";
import { MyContainer } from "../Components/Styles/GlobalStyle.css";

const Home = () => {
	return (
		<>
			<LandingPage
				className="py-2 px-md-4 center coloredShapesBg border-bottom border-1 border-md-3"
				style={{ backgroundColor: "#242321" }}
			>
				<div className="container center text-dark">
					<div className="row">
						<img
							src={Image1}
							alt="img"
							className="landingImg d-block d-md-none mx-auto"
						/>
						<div className="col-md-6 col-12 center px-md-5">
							<div className="d-flex flex-column justify-content-around">
								<h1
									className="bungee-regular animate__animated animate__headShake animate__slow animate__repeat-3 animate__delay-.5s	"
									style={{ color: "#f78419" }}
								>
									<span
										className="fw-bolder bungee-regular"
										style={{
											textShadow: "black 5px 5px",
											fontSize: "4.4rem",
											// fontFamily: "ariel",
										}}
									>
										Job Center
									</span>
								</h1>
								<p className="noto-sans-font my-3 fs-5">
									Connecting opportunities between individuals and organizations
									founded on principles of innovation & integrity.
								</p>

								<div className="d-flex flex-column flex-sm-row gap-2 justify-self-end mt-3">
									<Link
										to={"/services"}
										type="button"
										className="btn btn-warning text-bolder rounded-5 rounded-start-0 btn-lg px-4 fs-6 text-nowrap fw-bold me-4"
										style={{
											backgroundColor: "#f78419",
											boxShadow: "black 3px 3px",
										}}
									>
										Get Started
									</Link>
									<Link
										to={"/about"}
										type="button"
										className="btn btn-warning text-bolder rounded-5 rounded-start-0 btn-lg px-4 fs-6 text-nowrap fw-bold"
										style={{
											backgroundColor: "#f78419",
											boxShadow: "black 3px 3px",
										}}
									>
										Learn More
									</Link>
								</div>
							</div>
						</div>
						<div
							className="col-md-6 col-12 text-center flex-row flex-wrap justify-content-center d-none d-md-block "
							id="hero"
						>
							<img src={Image1} alt="img" className="landingImg" />
						</div>
					</div>
				</div>
			</LandingPage>

			<MyContainer $padding_x="10px" $padding_y="50px" className="">
				<div className="container text-center shadow-lg p-5">
					<div className="row">
						<div className="display-6 display-md-5 noto-sans-font mb-3">
							<WordSpan style={{ color: "#0d6efd" }}>Quick </WordSpan>Start
						</div>
						{quickStart
							.slice(0, 3)
							.map(({ name, text, email, link, img_src_blue }, index) => (
								<div key={index} className="col-12 col-md-6 col-lg py-3">
									<div>
										<img
											src={img_src_blue}
											alt=""
											width={"100px"}
											height={"100px"}
										/>
										<h3 className="text-primary">{name}</h3>
										<p>{text}</p>
										<small className="text-primary">{email}</small>
										<div>
											<Link
												to={link.path}
												className="btn btn-primary rounded-0"
												variant="primary"
											>
												{link.text}
											</Link>
										</div>
									</div>
								</div>
							))}
					</div>
				</div>
			</MyContainer>

			<MyContainer
				className="py-5 container-fluid"
				style={{ backgroundColor: "#242321", minHeight: "500px" }}
			>
				<CardCarousell cards={the_advancement_place_services} />
			</MyContainer>

			<MyContainer>
				<div
					className="container rounded-5 text-light text-center d-flex flex-column justify-content-center align-items-center py-5 contourLine"
					style={{ backgroundColor: "#207098" }}
				>
					<h1>
						Get started <WordSpan>Now</WordSpan>
					</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
						cumque facilis, quas architecto voluptas ea, ipsa obcaecati modi id
						odio magnam enim esse recusandae nisi reprehenderit quos placeat
						suscipit illo.
					</p>
					<div className="d-flex flex-column flex-sm-row">
						<Link
							to={"services"}
							className="btn btn-outline-transparent btn-lg text-light m-2 fs-6 text-nowrap fw-bold"
							style={{ backgroundColor: "#f78419" }}
						>
							Get started
						</Link>
						<Link
							to={"contact"}
							className="btn btn-outline-transparent btn-lg text-light m-2 fs-6 text-nowrap fw-bold"
							style={{ backgroundColor: "#f78419" }}
						>
							Contact us
						</Link>
					</div>
				</div>
			</MyContainer>
		</>
	);
};

export default Home;

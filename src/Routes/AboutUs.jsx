import React from "react";
import Showcase from "../Components/Showcase/Showcase";
import { useLocation } from "react-router-dom";
import { MyContainer } from "../Components/Styles/GlobalStyle.css";
import WordSpan from "../Components/WordSpan";
import Image2 from "../Assets/pexels-heyho-7534170.jpg";
import { capitalizeFirstLetter, slashToSpace } from "../Utils/helpers";

const AboutUs = () => {
	const myLocation = useLocation();
	return (
		<>
			<Showcase align="start" height={"40vh"}>
				<div className="container">
					<h1 className="px-4">
						{capitalizeFirstLetter(slashToSpace(myLocation.pathname))}{" "}
						<WordSpan color={"goldishBrown"}>Us</WordSpan>
					</h1>
				</div>
			</Showcase>

			<MyContainer
				className="container-fluid center px-md-5 px-3"
				$padding_y="40px"
				height="400"
			>
				<div className="container row center shadow-lg p-3 p-md-5">
					<div className="col-12 col-md-8 p-3">
						<h3 className="fw-bolder">
							<WordSpan color={"goldishBrown"}>Our </WordSpan>Mission?
						</h3>
						<p className="fs-6 lh-sm noto-sans-font fw-normal">
							The Advancement Place: Bridging Connections, Empowering
							Communities. We are dedicated to connecting individuals,
							organizations, and the global community to foster growth, enable
							collaboration, and inspire collective progress towards a brighter
							future.
						</p>
					</div>
					<div className="col-12 col-md-4">
						<img
							src={require("../Assets/3d-casual-life-looking-through-resumes.png")}
							alt=""
							style={{ maxWidth: "300px", height: "250px" }}
						/>
					</div>
				</div>
			</MyContainer>

			<MyContainer
				$padding_y="50px"
				className="container-fluid d-flex flex-column justify-content-center align-items-center px-md-5 px-3 aboutShowcase"
				style={{
					backgroundImage:
						"linear-gradient( to right bottom, #0e315ac1, #ac6701)",
				}}
			>
				<div className="container row text-light">
					<h3 className="fs-1 fw-bolder mb-4 noto-sans-font d-md-none align-self-start">
						Our <WordSpan color={"goldishBrown"}>Goal</WordSpan>
					</h3>
					<div className="col-md-5 col-12">
						<img
							src={Image2}
							alt="OURGOAL"
							style={{ maxHeight: "450px" }}
							width={"100%"}
						/>
					</div>
					<div className="col-md-7 col-12 text-light my-auto pt-4 px-md-5">
						<h3 className="fs-1 fw-bolder noto-sans-font d-none d-md-block">
							Our <WordSpan color={"goldishBrown"}>Goal</WordSpan>
						</h3>
						<p className="m-n3 noto-sans-font">
							Our goal is to create jobs yearly while reducing the rate of
							unemployment.
						</p>
					</div>
				</div>
			</MyContainer>

			<MyContainer className="center px-md-5 px-3" $padding_y="40px">
				<div className="container shadow-lg p-3 p-md-5">
					<h3 className="fw-bolder">
						What <WordSpan color={"goldishBrown"}>We</WordSpan> Are
					</h3>
					<div className="p-3">
						<p className="fs-6 lh-sm noto-sans-font fw-normal">
							We are a{" "}
							<b className="fw-bolder text-body-secondary">futuristic</b>,{" "}
							<b className="fw-bolder text-body-secondary">innovative</b>,{" "}
							<b className="fw-bolder text-body-secondary">
								technologically driven
							</b>{" "}
							and an
							<b className="fw-bolder text-body-secondary">
								{" "}
								environmentally conscious
							</b>{" "}
							company. <br />
							<br />
							We are job center aimed at serving the people.
							<br />
							Our aim is to streamline job search processes. Provide career
							counselling, skill development programs to address under
							employment in our communities. <br />
							<br />
							Our proposal involves the creation of a virtual and physical space
							that will Serve as a hub for job seekers to access employment
							opportunities, both locally and nationally. <br />
							<br />
							We partner with organizations who provide skill development
							programs tailored to meet the current demands of the job market.
							Organize job fairs and recruitment drives in partnership with
							local businesses and multinational corporations. <br />
							<br />
							Our mission is to enhance employment opportunities and support
							economic advancement in Ogun State.
						</p>
					</div>
				</div>
			</MyContainer>
		</>
	);
};

export default AboutUs;

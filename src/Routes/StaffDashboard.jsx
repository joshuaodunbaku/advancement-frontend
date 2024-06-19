import React from "react";
import { ReactComponent as Icon1 } from "../Assets/svg/user-plus-solid.svg";
import { ReactComponent as Icon2 } from "../Assets/svg/users-solid.svg";
import { ReactComponent as Icon3 } from "../Assets/svg/square-plus-solid.svg";
import { ReactComponent as Icon4 } from "../Assets/svg/briefcase-solid.svg";
import { ReactComponent as Icon5 } from "../Assets/svg/user-tie-solid.svg";
import { ReactComponent as Icon6 } from "../Assets/svg/user-gear-solid.svg";
import { ReactComponent as Icon7 } from "../Assets/svg/screwdriver-wrench-solid.svg";
import { ReactComponent as Icon8 } from "../Assets/svg/key-solid.svg";
import Carousel from "react-multi-carousel";
import WordSpan from "../Components/WordSpan";
import { useNavigate } from "react-router-dom";
import { Hover } from "../Components/Styles/GlobalStyle.css";

const StaffDashboard = () => {
	const navigate = useNavigate();
	const responsive = {
		superLargeDesktop: {
			// the naming can be any, depends on you.
			breakpoint: { max: 4000, min: 3000 },
			items: 4,
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 2,
		},
		tablet: {
			breakpoint: { max: 1024, min: 564 },
			items: 2,
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
		},
	};
	return (
		<>
			<div className="py-2 py-md-4">
				<div className="container-md">
					<h1 className="fw-bold mt-4">
						Hello{" "}
						<WordSpan>
							<span className="bungee-regular">User</span>
						</WordSpan>
					</h1>
					{/* SHOWS ON xs SCREEN SIZE */}
					<div className="row d-md-none my-3 mx-3">
						<Carousel
							responsive={responsive}
							infinite={true}
							autoPlay={true}
							autoPlaySpeed={4000}
							customTransition="all 1s"
							transitionDuration={500}
						>
							{[
								{
									color: "primary-subtle",
									title: "Unverified email",
									number: 35,
								},
								{ color: "secondary-subtle", title: "New posts", number: 35 },
								{
									color: "success-subtle",
									title: "Reported Posts",
									number: 35,
								},
								{ color: "danger-subtle", title: "Active staff", number: 35 },
							].map(({ color, title, number }, idx) => (
								<div key={idx} className="col-12 col-sm-6 col-lg-3 w-100">
									<div className="mx-2">
										<div
											className={`rounded-5 circle border bg-${color} bg-gradient d-flex flex-column align-items-center justify-content-evenly p-2`}
											style={{ height: "12rem" }}
										>
											<h1 className="fw-bold">{number}</h1>
											<h4
												className="bebas-neue-regular p-1"
												style={{ letterSpacing: "0.10em" }}
											>
												{title}
											</h4>
										</div>
									</div>
								</div>
							))}
						</Carousel>
					</div>

					{/* SHOWS ON md SCREEN SIZE */}
					<div className="d-none d-md-block my-3">
						<div className="row g-2 gx-4">
							{[
								{
									color: "primary-subtle",
									title: "Unverified email",
									number: 35,
								},
								{ color: "secondary-subtle", title: "New posts", number: 35 },
								{
									color: "success-subtle",
									title: "Reported Posts",
									number: 35,
								},
								{ color: "danger-subtle", title: "Active staff", number: 35 },
							].map(({ color, title, number }, idx) => (
								<div key={idx} className="btn col-12 col-sm-6 col-lg-3">
									<div
										className={`rounded-5 circle border bg-${color} bg-gradient d-flex flex-column align-items-center justify-content-evenly p-2`}
										style={{ height: "12rem" }}
									>
										<h1 className="fw-bold">{number}</h1>
										<h4
											className="bebas-neue-regular p-1"
											style={{ letterSpacing: "0.10em" }}
										>
											{title}
										</h4>
									</div>
								</div>
							))}
							{/* </Carousel> */}
						</div>
					</div>

					<h3 className="mt-5 fw-bold noto-sans-font">
						Quick<WordSpan color={"lightBlue"}> Menu</WordSpan>
					</h3>
					<div className="py-3 d-flex flex-row flex-wrap mb-3 align-items-center justify-content-between gap-2 my-3">
						{[
							{ title: "Add User", IconSrc: Icon1, link: "add-user" },
							{ title: "View Users", IconSrc: Icon2, link: "view-users" },
							{ title: "Post a Job", IconSrc: Icon3, link: "post-a-job" },
							{ title: "Job Seekers", IconSrc: Icon4, link: "job-seekers" },
							{ title: "Employers", IconSrc: Icon5, link: "employers" },
							{ title: "Edit Profile", IconSrc: Icon6, link: "edit-profile" },
							{ title: "Settings", IconSrc: Icon7, link: "settings" },
							{ title: "Change Password", IconSrc: Icon8, link: "change-password" },
						].map(({ title, IconSrc, link }, idx) => (
							<button key={idx} className="btn" onClick={() => navigate(link)}>
								<div className="text-center">
									<Hover>
										<div className="p-4 bg-light border border-2 text-center flex-fill rounded-3 onHover">
											<IconSrc
												className="danger"
												color="red"
												width={75}
												height={35}
											/>
											{/* <img style={{color: "red"}} src={IconSrc} alt="img" width={100} height={50} /> */}
										</div>
									</Hover>
									<small className="lead fs-6 noto-sans-font fw-bold">{title}</small>
								</div>
							</button>
						))}
					</div>
					<div className="row g-2">
						<div className="col-12 col-md-8">
							<div
								className="border rounded-3 d-flex flex-column align-items-center justify-content-center bg-danger-subtle p-4"
								style={{ minHeight: "13rem" }}
							>
								<h3>A header here</h3>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Eveniet nam minima.
								</p>
							</div>{" "}
						</div>
						<div className="col-12 col-md-4">
							<div
								className="border rounded-3 d-flex flex-column align-items-start justify-content-center bg-success-subtle p-4"
								style={{ minHeight: "13rem" }}
							>
								<h3 className="fw-bold">Notifications here</h3>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Eveniet nam minima.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default StaffDashboard;

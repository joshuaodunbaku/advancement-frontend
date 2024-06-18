import React, { useEffect } from "react";
import Logo from "../Assets/logo.png";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
	const { pathname } = useLocation();
	const scrollToTop = () => {
		window.scrollTo({ top: 0, left: 0, behavior: "smooth", duration: "3000" });
	};
	useEffect(() => scrollToTop(), [pathname]);

	return (
		<>
			<div className="container mt-auto">
				<footer className="d-flex flex-wrap justify-content-between align-items-center my-3 border-top">
					<p className="col-md-4 mb-0 text-body-secondary">
						&copy; 2024 Company, Inc
					</p>

					<Link
						to="/"
						className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
					>
						<img
							className=""
							src={Logo}
							alt="logo"
							// width={"50px"}
							height={"50px"}
						/>
					</Link>

					<ul className="nav col-md-4 justify-content-end">
						<li className="nav-item">
							<Link to={"/"} className="nav-link px-2 text-body-secondary">
								Home
							</Link>
						</li>
						<li className="nav-item">
							<Link to={"about"} className="nav-link px-2 text-body-secondary">
								About Us
							</Link>
						</li>
						<li className="nav-item">
							<Link
								to={"services"}
								className="nav-link px-2 text-body-secondary"
							>
								Services
							</Link>
						</li>
						<li className="nav-item">
							<Link
								to={"/contacts"}
								className="nav-link px-2 text-body-secondary"
							>
								Contacts
							</Link>
						</li>
					</ul>
				</footer>
			</div>
		</>
	);
};

export default Footer;

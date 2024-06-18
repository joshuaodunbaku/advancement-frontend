import React from "react";
import Logo from "../../Assets/logo.png";
import { useLocation, useNavigate } from "react-router-dom";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";

const NavBar = () => {
	const location = useLocation();
	let expand = "md";
	const navigate = useNavigate();
	return (
		<>
			<div>
				<Navbar
					collapseOnSelect
					expand={expand}
					className="shadow-sm"
					style={{ background: "#f0f0e8" }}
				>
					<Container fluid>
						<Navbar.Brand
							className="d-flex align-items-center fw-bold"
							onClick={() => navigate("/")}
						>
							<img
								src={Logo}
								alt="Logo"
								width="50"
								height="55"
								className="d-inline-block align-text-top pb-2 px-2"
							/>
							The Advancement Place
						</Navbar.Brand>
						<Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
						<Navbar.Offcanvas
							id={`offcanvasNavbar-expand-${expand}`}
							aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
							placement="end"
						>
							<Offcanvas.Header closeButton></Offcanvas.Header>
							<Offcanvas.Body>
								<Nav className="justify-content-start mx-auto ">
									{/* {[
										{ path_name: "Home", path_url: "/" },
										{ path_name: "Jobs", path_url: "/jobs" },
										{ path_name: "About Us", path_url: "/about" },
										{ path_name: "Dashboard", path_url: "/dashboard" },
										{ path_name: "Services", path_url: "/services" },
									].map(({ path_name, path_url }, idx) => (
										
									))} */}
									<Nav.Link
										eventKey={1}
										onClick={() => navigate("/")}
										className={`navbar-nav nav-item p-2 ${location.pathname === "/" &&
											"activeLink link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover fw-bold"
											}`}
									>
										Home
									</Nav.Link>
									<Nav.Link
										eventKey={2}
										onClick={() => navigate("/jobs")}
										className={`navbar-nav nav-item p-2 ${location.pathname === "/jobs" &&
											"activeLink link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover fw-bold"
											}`}
									>
										Jobs
									</Nav.Link>
									<Nav.Link
										eventKey={3}
										onClick={() => navigate("/about")}
										className={`navbar-nav nav-item p-2 ${location.pathname === "/about" &&
											"activeLink link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover fw-bold"
											}`}
									>
										About Us
									</Nav.Link>
									<Nav.Link
										eventKey={4}
										onClick={() => navigate("/staff/dashboard")}
										className={`navbar-nav nav-item p-2 ${location.pathname.includes("dashboard") &&
											"activeLink link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover fw-bold"
											}`}
									>
										Dashboard
									</Nav.Link>
									<Nav.Link
										eventKey={5}
										onClick={() => navigate("/services")}
										className={`navbar-nav nav-item p-2 ${location.pathname === "/services" &&
											"activeLink link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover fw-bold"
											}`}
									>
										Services
									</Nav.Link>
								</Nav>
								<Nav.Link
									eventKey={"4"}
									onClick={() => navigate("/login")}
									className={`navbar-nav nav-item p-2 ${location.pathname.includes("/login") &&
										"activeLink link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover fw-bold"
										}`}
								>
									Login
								</Nav.Link>
								<Nav.Link
									className={`navbar-nav nav-item p-2 ${location.pathname.includes("/signup") &&
										"activeLink link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover fw-bold"
										}`}
									eventKey={"5"}
									onClick={() => navigate("/signup")}
								>
									Sign Up
								</Nav.Link>
							</Offcanvas.Body>
						</Navbar.Offcanvas>
					</Container>
				</Navbar>
			</div>
		</>
	);
};

export default NavBar;

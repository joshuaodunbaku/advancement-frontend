import React from "react";
import logo from "../Assets/logo.png";
import Image1 from "../Assets/svg/undraw_login_re_4vu2.svg";
import { MyContainer } from "../Components/Styles/GlobalStyle.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
	const navigate = useNavigate();

	return (
		<>
			<MyContainer
				className="d-flex flex-column align-items-center justify-content-center"
				height="80vh"
				$padding_y="40px"
			>
				<div className="row container mx-auto">
					<div className="col-12 col-sm-6 col-xl-9 d-flex align-items-center d-none d-sm-flex">
						<img src={Image1} alt="" width={"100%"} height={"400px"} />
					</div>
					<main className="col-12 col-sm-6 col-xl-3 form-signin m-auto">
						<form className="text-center">
							<img className="mb-4" src={logo} alt="" width="90" height="120" />
							<h1 className="h3 mb-3 fw-normal">Please sign in</h1>

							<div className="form-floating">
								<input
									type="email"
									className="form-control rounded-bottom-0 mb-4"
									id="floatingInput"
									placeholder="name@example.com"
								/>
								<label htmlFor="floatingInput">Email address</label>
							</div>
							<div className="form-floating">
								<input
									type="password"
									className="form-control rounded-top-0 mb-4"
									id="floatingPassword"
									placeholder="Password"
								/>
								<label htmlFor="floatingPassword">Password</label>
							</div>
							<button
								className="btn btn-outline-secondary w-100 my-2 py-2"
								type="submit"
							>
								Sign In
							</button>
							<p className="mt-5 mb-3 text-body-secondary">&copy; 2024</p>
						</form>
					</main>
				</div>
			</MyContainer>
		</>
	);
};

export default Login;

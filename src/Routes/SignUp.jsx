import React from "react";
import { MyContainer } from "../Components/Styles/GlobalStyle.css";
import Seeker_Img from "../Assets/svg/undraw_pic_profile_re_7g2h.svg";
import Employer_Img from "../Assets/svg/undraw_feeling_proud_qne1.svg";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const SignUp = () => {
	return (
		<>
			<MyContainer
				className="container-fluid d-flex"
				height="80vh"
				$padding_y="30px"
			>
				<div className="container center align-self-center my-3 my-md-5">
					<div className="row">
						<div className="col-12 col-sm-6 text-center py-2">
							<Card className="d-flex align-items-center justify-content-betweeen py-5 px-4 shadow">
								<div className="rounded-circle w-75 mx-auto  py-1">
									<img src={Seeker_Img} width={"100"} alt="" />
								</div>
								<h2 className="fw-bold noto-sans-font py-1">Job Seeker</h2>
								<p>
									Looking for that dream job? Look no further. Create a unique
									career profile with us & let us take care of the rest.
								</p>
								<Link to={"/signup/seeker"} className="btn btn-primary">
									Sign Up as Seeker
								</Link>
							</Card>
						</div>
						<div className="col-12 col-sm-6 text-center py-2">
							<Card className="d-flex align-items-center justify-content-betweeen py-5 px-4 shadow">
								<div className="rounded-circle w-75 mx-auto  py-1">
									<img src={Employer_Img} width={"100"} alt="" />
								</div>
								<h2 className="fw-bold noto-sans-font py-1">Employer</h2>
								<p>
									Interested in quality candidates who can take your company to
									the next level? Look no further. Create an account with us.
								</p>
								<Link to={"/signup/employer"} className="btn btn-primary">
									Sign Up as Employer
								</Link>
							</Card>
						</div>
					</div>
				</div>
			</MyContainer>
		</>
	);
};

export default SignUp;

import React from "react";
import { Badge } from "react-bootstrap";
import { Hover } from "./Styles/GlobalStyle.css";

const ProfilePrevCard = ({ profileProps }) => {
	let { fname, lname, status } = profileProps;
	return (
		<>
			<Hover>
				<div
					className="px-3 border border-2 rounded-3 p-2 active"
					style={{ minWidth: "24rem" }}
				>
					<div className="row">
						<div className="col-2">
							<span className="border rounded-circle bg-light shadow-sm p-1 fw-bold noto-sans-font">
								GB
							</span>
						</div>
						<div className="col-10 flex-column">
							<div className="d-flex">
								<p className="text-nowrap">{fname + " " + lname}</p>
								<Badge
									className={`ms-auto text-secondary fw-bolder align-self-start ${
										status ? "bg-primary-subtle" : "bg-danger-subtle"
									}`}
								>
									<span>{status ? "Active" : "Inactive"}</span>
								</Badge>
							</div>
							<small className="text-muted fw-bold">
								Created at: 11/11/1111
							</small>

							<span className="btn btn-link">View</span>
						</div>
						{/* <div className="col-2"></div> */}
					</div>
				</div>
			</Hover>
		</>
	);
};

export default ProfilePrevCard;

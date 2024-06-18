import React from "react";
import { Col, Dropdown, Form, Pagination, Row } from "react-bootstrap";
import { MyContainer } from "../../Components/Styles/GlobalStyle.css";
import ProfilePrevCard from "../../Components/ProfilePrevCard";
import { user_object } from "../../the-advancement-place";

const ViewAllUsersPage = () => {
	return (
		<>
			<MyContainer className="bg-white" height="100%" $padding_y="20px">
				<div className="container-md">
					<div className="container">
						<div className="row">
							<Row className="col-md-6 col-12 align-items-center">
								<Col sm="8">
									<Form.Control type="text" placeholder="Search..." />
								</Col>
							</Row>
							<Dropdown data-bs-theme="dark" className="col-md-2 col-12">
								<Dropdown.Toggle
									id="dropdown-button-dark-example1"
									variant="link"
								>
									Sort By:
								</Dropdown.Toggle>

								<Dropdown.Menu>
									<Dropdown.Item href="#/action-1" active>
										Name Asc.
									</Dropdown.Item>
									<Dropdown.Item href="#/action-1" active>
										Name Dscn.
									</Dropdown.Item>
									<Dropdown.Item href="#/action-2">Age</Dropdown.Item>
									<Dropdown.Item href="#/action-3">
										Something else
									</Dropdown.Item>
									<Dropdown.Item href="#/action-4">
										Separated link
									</Dropdown.Item>
								</Dropdown.Menu>
							</Dropdown>
							<div className="col-md-4 col-12">
								<Pagination>
									<Pagination.Prev />
									<Pagination.Item active>{1}</Pagination.Item>
									<Pagination.Item active>{2}</Pagination.Item>
									<Pagination.Ellipsis />

									<Pagination.Ellipsis />
									<Pagination.Item>{20}</Pagination.Item>
									<Pagination.Next />
								</Pagination>
							</div>
						</div>
					</div>
					<div className="py-3 d-flex flex-row flex-wrap mb-3 align-items-center justify-content-center gap-2 my-3">
						{/* {Array.from({ length: 11 }).map((_, index) => ( */}
						{user_object.map((userProps, index) => (
							<ProfilePrevCard key={index} profileProps={userProps} />
						))}
					</div>
				</div>
			</MyContainer>
		</>
	);
};
export default ViewAllUsersPage;

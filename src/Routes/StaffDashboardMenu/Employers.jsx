import React from "react";
import { user_object } from "../../the-advancement-place";
import ProfilePrevCard from "../../Components/ProfilePrevCard";
import { Pagination } from "react-bootstrap";
import WordSpan from "../../Components/WordSpan";

const Employers = () => {
	return (
		<>
			<div className="container-md">
				<div className="d-flex flex-column justify-content-around align-items-sm-start align-items-center">
					<h3 className="pt-3 noto-sans-font ">
						<WordSpan>Employers</WordSpan>
					</h3>
					<div className="align-self-center align-self-sm-end">
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
				<div className="py-2 d-flex flex-row flex-wrap mb-3 align-items-center justify-content-center gap-4 my-1">
					{user_object.map((seekerObject, idx) => (
						<ProfilePrevCard key={idx} profileProps={seekerObject} />
					))}
				</div>
			</div>
		</>
	);
};

export default Employers;

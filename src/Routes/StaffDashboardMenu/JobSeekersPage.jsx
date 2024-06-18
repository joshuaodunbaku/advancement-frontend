import React from "react";
import { user_object } from "../../the-advancement-place";
import ProfilePrevCard from "../../Components/ProfilePrevCard";
import WordSpan from "../../Components/WordSpan";

const JobSeekersPage = () => {
	return (
		<>
			<div className="container-md">
				<h3 className="text-center pt-3 noto-sans-font">
					Job <WordSpan>Seekers</WordSpan>
				</h3>
				<div className="py-3 d-flex flex-row flex-wrap mb-3 align-items-center justify-content-center gap-4 my-3">
					{user_object.map((seekerObject) => (
						<ProfilePrevCard profileProps={seekerObject} />
					))}
				</div>
			</div>
		</>
	);
};

export default JobSeekersPage;

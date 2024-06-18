import React from "react";
import Showcase from "../Components/Showcase/Showcase";
import { capitalizeFirstLetter, slashToSpace } from "../Utils/helpers";
import { useLocation } from "react-router-dom";

const Apply = () => {
	return (
		<>
			<Showcase align="start" height={"40vh"}>
				<div className="container">
					<h1 className="px-4">
						{capitalizeFirstLetter(slashToSpace(useLocation().pathname))}
					</h1>
				</div>
			</Showcase>
		</>
	);
};

export default Apply;

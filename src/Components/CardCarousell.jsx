import React from "react";
import { Card, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import WordSpan from "./WordSpan";
// import { the_advancement_place_services } from "../../the-advancement-place.js"

const responsive = {
	superLargeDesktop: {
		// the naming can be any, depends on you.
		breakpoint: { max: 4000, min: 3000 },
		items: 5,
	},
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 3,
	},
	tablet: {
		breakpoint: { max: 1024, min: 464 },
		items: 2,
	},
	mobile: {
		breakpoint: { max: 464, min: 0 },
		items: 1,
	},
};

const CardCarousell = ({ cards, title }) => {
	return (
		<div className="container">
			<h1 className="display-5 text-light text-center noto-sans-font">
				<WordSpan>What</WordSpan> we do
			</h1>
			<Carousel
				responsive={responsive}
				infinite={true}
				autoPlay={true}
				autoPlaySpeed={4000}
				customTransition="all 1s"
				transitionDuration={500}
			>
				{cards.map(({ name, img_src, service }, index) => (
					<Col key={index}>
						<Card className="gap-2 m-2 border-0 rounded-0 shadow-lg bg-secondary-subtle">
							<Card.Img
								className="rounded-0"
								variant="top"
								src={img_src}
								height={"200px"}
							/>
							<Card.Header>
								<h3 className="noto-sans-font fw-bold">{name}</h3>
							</Card.Header>
							<Card.Body className="">
								<Card.Title className="bolder">
									<small>{name}</small>
								</Card.Title>
								<Card.Text>{service}</Card.Text>
							</Card.Body>
						</Card>
					</Col>
				))}
			</Carousel>
		</div>
	);
};

export default CardCarousell;

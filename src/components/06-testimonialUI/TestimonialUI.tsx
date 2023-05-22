import { useState } from "react";
import TestimonialIndividual from "./testimonialIndividual/TestimonialIndividual";
import "./testimonialUI.css";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { motion } from "framer-motion";

const TestimonialUI = () => {
	//rating up to 5
	//color property must be in RGB format. Ex.: "255,255,255"
	const testimonials = [
		{
			id: 0,
			rating: 5,
			title: "Impressive Curriculum",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque qui voluptatem quam aliquid sunt rerum voluptate aut consectetur delectus fugiat! Aliquam tempora nostrum expedita cupiditate. Laborum neque fuga atque facilis!",
			img: "https://picsum.photos/id/237/200/200",
			name: "Emily Williams",
			position: "Frontend Developer at Google",
			color: "255,207,86",
		},
		{
			id: 1,
			rating: 4,
			title: "Great for Begginers",
			description:
				"Neque qui voluptatem quam aliquid sunt rerum voluptate aut consectetur delectus fugiat! Aliquam tempora nostrum expedita cupiditate. Laborum neque fuga atque facilis!",
			img: "https://picsum.photos/id/237/200/200",
			name: "Emily Williams",
			position: "Frontend Developer at Google",
			color: "58,183,149",
		},
		{
			id: 2,
			rating: 3,
			title: "Great Experience",
			description:
				"Lorem eque qui voluptatem quam aliquid sunt rerum voluptate aut consectetur delectus fugiat! Aliquam tempora nostrum expedita cupiditate. Laborum neque fuga atque facilis!",
			img: "https://picsum.photos/id/237/200/200",
			name: "Emily Williams",
			position: "Frontend Developer at Google",
			color: "255,105,180",
		},
		{
			id: 3,
			rating: 4,
			title: "Impressive Curriculum",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque qui voluptatem quam aliquid sunt rerum voluptate aut consectetur delectus fugiat! Aliquam tempora nostrum expedita cupiditate. Laborum neque fuga atque facilis!",
			img: "https://picsum.photos/id/237/200/200",
			name: "Emily Williams",
			position: "Frontend Developer at Google",
			color: "6,24,38",
		},
		{
			id: 4,
			rating: 5,
			title: "Impressive Curriculum",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque qui voluptatem quam aliquid sunt rerum voluptate aut consectetur delectus fugiat! Aliquam tempora nostrum expedita cupiditate. Laborum neque fuga atque facilis!",
			img: "https://picsum.photos/id/237/200/200",
			name: "Emily Williams",
			position: "Frontend Developer at Google",
			color: "56,68,174",
		},
	];

	const [sliderIndex, setSliderIndex] = useState(0);

	const prevSlider = (testimonialIndex: number) => {
		setSliderIndex((prevIndex) =>
			prevIndex > 0 ? testimonialIndex - 1 : testimonials.length - 3
		);
		// console.log((prevIndex) => (prevIndex <= 0 ? testimonialIndex - 1 : 0));
	};
	const nextSlider = (testimonialIndex: number) => {
		setSliderIndex((prevIndex) =>
			prevIndex < testimonials.length - 3 ? testimonialIndex + 1 : 0
		);
		// console.log((prevIndex) => (prevIndex < testimonials.length ? testimonialIndex + 1 : 0));
	};

	return (
		<div className="testimonialUI-main-container">
			<div className="testimonialUI-container">
				<div className="testimonialUI-header">
					<h2>
						What Our Customers <br />
						Are Saying
					</h2>
					<div className="testimonialUI-arrows">
						<div
							className="testimonialUI-arrow"
							onClick={() => prevSlider(sliderIndex)}
						>
							<FaChevronLeft />
						</div>
						<div
							className="testimonialUI-arrow"
							onClick={() => nextSlider(sliderIndex)}
						>
							<FaChevronRight />
						</div>
					</div>
				</div>
				<div className="testimonialUI-slider">
					{testimonials.map(
						({ id, rating, title, description, img, name, position, color }) => {
							return (
								<motion.div
									key={id}
									style={{ translateX: -sliderIndex * 350, transition: "0.5s" }}
								>
									<TestimonialIndividual
										id={id}
										rating={rating}
										title={title}
										description={description}
										img={img}
										name={name}
										position={position}
										color={color}
									/>
								</motion.div>
							);
						}
					)}
				</div>
			</div>
		</div>
	);
};

export default TestimonialUI;

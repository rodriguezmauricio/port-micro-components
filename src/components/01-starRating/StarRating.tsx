import StarButton from "./starButton/StarButton";
import "./starRating.css";
import { useState, SetStateAction } from "react";
import { motion } from "framer-motion";

const StarRating = () => {
	const [rating, setRating] = useState({
		rating: 0,
		message: "",
	});

	const selStar = [
		{
			rating: 1,
			message:
				"We're sorry that you had a bad experience. We would like to learn more about what happened and how we can make things right.",
		},
		{
			rating: 2,
			message:
				"We apologize for the inconvenience you experiencied. We appreciate yout feedback and would like to work with you to address any issues",
		},
		{
			rating: 3,
			message:
				"Thank you for your feedback. We're sorry to hear that your experience wasn't perfect. We would love to hear more about your concerns to see how we can improve",
		},
		{
			rating: 4,
			message:
				"Thank you for your positive feedback! We're glad to know that you had a great experience and we appreciate your support",
		},
		{
			rating: 5,
			message:
				"Excellent! We're thrilled to hear you had such a positive experience. Thank you for choosing our platform",
		},
	];

	const [message, setMessage] = useState(rating.message);

	const handleClick = (
		selectedRating: SetStateAction<{ rating: number; message: string }>,
		newMessage: string
	) => {
		setRating(selectedRating);
		setMessage(newMessage);
	};

	return (
		<div className="star-rating-container">
			<div className="star-content-container">
				<h3>
					How many stars would you give to our
					<br /> Online Code Editor?
				</h3>
				<div className="star-item-container">
					{selStar.map((star) => (
						<StarButton
							key={star.rating}
							isSelected={star.rating <= rating.rating}
							onClick={() =>
								handleClick({ ...rating, rating: star.rating }, star.message)
							}
						/>
					))}
				</div>
				<motion.p
					key={message}
					animate={{ opacity: 1, y: 0 }}
					initial={{ opacity: 0, y: 10 }}
				>
					{message}
				</motion.p>
			</div>
		</div>
	);
};

export default StarRating;

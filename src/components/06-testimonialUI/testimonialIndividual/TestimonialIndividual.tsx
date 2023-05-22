import "./testimonialIndividual.css";
import { FaStar } from "react-icons/fa";

interface ITestimonialIndividualProps {
	rating: number;
	title: string;
	description: string;
	img: string;
	name: string;
	position: string;
	color: string;
}

const TestimonialIndividual = ({
	rating,
	title,
	description,
	img,
	name,
	position,
	color,
}: ITestimonialIndividualProps) => {
	const opacityColor = `rgba(${color}, 0.5)`;

	return (
		<div
			className="test-indiv-container"
			style={{ backgroundColor: opacityColor, boxShadow: `10px 10px 0 rgb(${color})` }}
		>
			<div className="test-indiv-rating">
				{Array.from({ length: rating }, (_, index) => (
					<div
						key={index}
						className="test-indiv-rating-icon"
						style={{ backgroundColor: `rgb(${color})` }}
					>
						<FaStar size={10} />
					</div>
				))}
			</div>
			<h3>{title}</h3>
			<p>{description}</p>
			<div className="test-indiv-user">
				{img && <img src={img} alt="" />}
				<div className="test-indiv-user-info">
					<p className="test-indiv-user-name">{name}</p>
					<p className="test-indiv-user-position">{position}</p>
				</div>
			</div>
		</div>
	);
};

export default TestimonialIndividual;

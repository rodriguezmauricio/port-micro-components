import "./resultsRating.scss";
import { FaBrain, FaRocketchat, FaEye, FaBolt } from "react-icons/fa";

interface IResultsRatingProps {
	category: string;
	score: number;
	color: string;
	opacityColor: string;
}

const ResultsRating = ({ category, score, color, opacityColor }: IResultsRatingProps) => {
	const iconRender = () => {
		if (category === "Reaction") {
			return <FaBolt style={{ color: color }} />;
		}
		if (category === "Memory") {
			return <FaBrain style={{ color: color }} />;
		}
		if (category === "Verbal") {
			return <FaRocketchat style={{ color: color }} />;
		}
		if (category === "Visual") {
			return <FaEye style={{ color: color }} />;
		}
	};

	return (
		<div className="results-rating-container" style={{ backgroundColor: opacityColor }}>
			<div className="icon">
				{iconRender()} <span style={{ color: color }}>{category}</span>
			</div>

			<span className="rating">
				<b>{score}</b>/100
			</span>
		</div>
	);
};

export default ResultsRating;

import "./resultsSummary.scss";
import data from "./data.json";
import ResultsRating from "./resultsRating/ResultsRating";
import { motion } from "framer-motion";

const ResultsSumary = () => {
	const result = Math.round(
		data.reduce((acc, sum) => {
			return acc + sum.score;
		}, 0) / data.length
	);
	return (
		<div className="results-sum-main-container">
			<motion.div
				animate={{ opacity: 1, translateY: 0 }}
				initial={{ opacity: 0, translateY: 50 }}
				transition={{ duration: 0.5 }}
				className="results-sum-container"
			>
				<motion.div
					animate={{ opacity: 1, translateY: 0, scale: 1.1 }}
					initial={{ opacity: 0, translateY: 50 }}
					transition={{ duration: 0.5 }}
					className="left"
				>
					<span className="header">Your Result</span>
					<div className="results-circle">
						<span className="result-number">{result}</span>
						<span>of 100</span>
					</div>
					<span className="congrats">Great</span>
					<p>You scored higher than 65% of the people who have taken these tests.</p>
				</motion.div>
				<div className="right">
					<h3>Summary</h3>
					{data.map((item) => {
						return (
							<ResultsRating
								key={item.category}
								category={item.category}
								score={item.score}
								color={item.color}
								opacityColor={item.opacitycolor}
							/>
						);
					})}
					<motion.button whileHover={{ scale: 0.95 }}>Continue</motion.button>
				</div>
			</motion.div>
		</div>
	);
};

export default ResultsSumary;

import "./adviceGenerator.css";
import { useState } from "react";
import { FaDiceFive, FaPause, FaQuoteLeft } from "react-icons/fa";
import { motion } from "framer-motion";
import axios from "axios";

const AdviceGenerator = () => {
	const url = "https://api.adviceslip.com/advice";
	const [advice, setAdvice] = useState({
		id: 0,
		advice: "Roll the dice to get your awesome random advice",
	});
	const [loading, setLoading] = useState(false);

	const fetchData = async () => {
		try {
			await axios.get(url).then((res) => {
				setLoading(false);
				setAdvice({
					id: res.data.slip.id,
					advice: res.data.slip.advice,
				});
			});
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div className="advice-main-container">
			<div className="advice-container-border">
				<div className="advice-container">
					<motion.div
						animate={{ opacity: 1 }}
						initial={{ opacity: 0 }}
						className="advice-container-quote"
					>
						<FaQuoteLeft size={80} />
					</motion.div>
					<span>ADVICE #{advice.id}</span>
					<motion.h2
						key={advice.id}
						transition={{ duration: 1 }}
						animate={{ opacity: 1 }}
						initial={{ opacity: 0 }}
					>
						{loading ? "..." : `"${advice.advice}"`}
					</motion.h2>
					<div className="advice-divider">
						<div className="advice-line"></div>
						<FaPause color="rgb(70, 77, 92)" />
						<div className="advice-line"></div>
					</div>
					<motion.div
						whileHover={{ boxShadow: "0 0 10px rgb(82, 255, 189)", scale: 1.2 }}
						className="advice-generator-button"
						onClick={() => {
							setLoading(true);
							fetchData();
						}}
					>
						<FaDiceFive size={20} />
					</motion.div>
				</div>
			</div>
		</div>
	);
};

export default AdviceGenerator;

import "./conmingSoon.scss";
import { FaChevronRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";

const ComingSoon = () => {
	const [email, setEmail] = useState("");
	const handleEmail = (e: React.FormEvent<HTMLInputElement>) => {
		setEmail(e.currentTarget.value);
	};
	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.warn("Coming Soon Component");
		console.log("Email: ", email);
	};

	return (
		<div className="coming-soon-main-container">
			<div className="coming-soon-outer-container">
				<div className="coming-soon-container">
					<div className="left">
						<motion.div
							animate={{ opacity: 1, translateY: 0 }}
							initial={{ opacity: 0, translateY: "50px" }}
							transition={{ duration: 0.5 }}
							className="left-content"
						>
							<div className="logo">
								<img
									src="src/components/10-comingSoonPage/images/logo.svg"
									alt=""
								/>
							</div>
							<div className="img-mobile"></div>
							<div className="content">
								<h2>
									<span>WE'RE</span>
									<br />
									COMING
									<br />
									SOON
								</h2>
								<p>
									Hello fellow shoppers! We're currently building our new fashion
									store Add your email below to stay up-to-date with announcements
									and our launch deals.
								</p>
								<form onSubmit={handleSubmit} className="input">
									<input
										type="email"
										placeholder="Email Address"
										value={email}
										onChange={handleEmail}
									/>
									<motion.button
										animate={{ scale: 1.1 }}
										whileHover={{ translateX: 15 }}
									>
										<FaChevronRight />
									</motion.button>
								</form>
							</div>
						</motion.div>
					</div>
					<div className="right"></div>
				</div>
			</div>
		</div>
	);
};

export default ComingSoon;

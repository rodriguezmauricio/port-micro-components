import { useState } from "react";
import "./newsletterCard.css";
import NewsletterCheckBox from "./checkBox/NewsletterCheckBox";

const NewsletterCard = () => {
	const [checkedBox, setCheckedBox] = useState(false);

	const [textInput, setTextInput] = useState({ subscribe: false, email: "" });

	const handleCheckBoxChange = () => {
		setCheckedBox(!checkedBox);
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (textInput.email) {
			console.log(textInput);
		}
	};

	const cleanInput = () => {
		setTextInput({
			subscribe: checkedBox,
			email: "",
		});
	};

	return (
		<div className="newsletter-card-main-container">
			<div className="newsletter-card-container">
				<h2>Level Up Your Frontend Skills</h2>
				<h3>
					Sign up for our free newsletter ro receive weekly coding challenges that will
					help you improve your frontend development skills.
				</h3>
				<div>
					<form
						onSubmit={(e) => {
							handleSubmit(e);
							cleanInput();
						}}
						className="newsletter-card-input-container"
						action=""
					>
						<input
							className="newsletter-card-input"
							type="text"
							placeholder="Enter your email address"
							value={textInput.email}
							onChange={(e) => {
								setTextInput({
									subscribe: checkedBox,
									email: e.target.value,
								});
							}}
						/>
						<button className="newsletter-card-button">Subscribe</button>
					</form>
				</div>
				<NewsletterCheckBox
					checked={checkedBox}
					handleCheckBoxChange={handleCheckBoxChange}
				/>
			</div>
		</div>
	);
};

export default NewsletterCard;

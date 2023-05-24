import "./interactiveCard.scss";
import { useState } from "react";
import CardBack from "./cardBack/CardBack";
import CardFront from "./cardFront/CardFront";
import InputMask from "react-input-mask";
import { ChangeEvent } from "react";
import { motion } from "framer-motion";

const InteractiveCard = () => {
	const [cardInfo, setCardInfo] = useState({
		username: "",
		cardNumber: "",
		month: "",
		year: "",
		cvc: "",
	});

	const isFormFilled = () => {
		if (
			cardInfo.username &&
			cardInfo.cardNumber &&
			cardInfo.month &&
			cardInfo.year &&
			cardInfo.cvc
		) {
			return true;
		}
		return false;
	};

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const target = e.target as HTMLInputElement;
		setCardInfo({ ...cardInfo, [e.currentTarget.name]: target.value });
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (isFormFilled()) {
			console.warn("INTERACTIVE CARD");
			console.log(cardInfo);
		}
		setCardInfo({
			username: "",
			cardNumber: "",
			month: "",
			year: "",
			cvc: "",
		});
	};

	const handleBlur = (info: string) => {
		if (!isEmptyField.includes(info)) {
			setIsEmptyField([...isEmptyField, info]);
		}
	};

	const renderClassname = (info: string) => {
		if (isEmptyField.some((item) => item === info)) {
			return "error-message display-message";
		} else {
			return "error-message";
		}
	};

	const [isEmptyField, setIsEmptyField] = useState<string[]>([]);

	const monthMessage = (month: number) => {
		if (!month) {
			return "Can't be blank";
		}
		if (month <= 0 || month > 12) {
			return "Invalid value";
		}
	};

	return (
		<div className="interactive-card-main-container">
			<div className="left">
				<div className="cards-display">
					<CardBack classname="card-back" cvc={cardInfo.cvc} />

					<CardFront
						classname="card-front"
						username={cardInfo.username}
						cardNumber={cardInfo.cardNumber}
						month={cardInfo.month}
						year={cardInfo.year}
					/>
				</div>
			</div>
			<div className="right">
				<form onSubmit={handleSubmit}>
					<div className="person-name">
						<label>CARDHOLDER NAME</label>
						<input
							type="text"
							placeholder="e.g. Jane Appleseed"
							name="username"
							required={true}
							onBlur={() => {
								handleBlur("username");
							}}
							value={cardInfo.username}
							onChange={handleChange}
						/>
						{cardInfo.username ? (
							""
						) : (
							<span className={renderClassname("username")}>Can't be blank</span>
						)}
					</div>

					<div className="card-number">
						<label>CARD NUMBER</label>
						<InputMask
							mask="9999 9999 9999 9999"
							type="text"
							name="cardNumber"
							required={true}
							onBlur={() => {
								handleBlur("cardNumber");
							}}
							value={cardInfo.cardNumber}
							placeholder="e.g. 1234 5678 9123 0000"
							onChange={handleChange}
						/>
						{cardInfo.cardNumber ? (
							""
						) : (
							<span className={renderClassname("cardNumber")}>Can't be blank</span>
						)}
					</div>

					<div className="card-back-values">
						<div className="exp-date">
							<label>EXP. DATE (MM/YY)</label>
							<div className="month-year">
								<div className="month">
									<InputMask
										mask="99"
										type="text"
										name="month"
										required={true}
										onBlur={() => {
											handleBlur("month");
										}}
										value={cardInfo.month}
										placeholder="MM"
										onChange={handleChange}
									/>
									{
										<span className={renderClassname("month")}>
											{monthMessage(Number(cardInfo.month))}
										</span>
									}
								</div>

								<div className="year">
									<InputMask
										mask="99"
										type="text"
										name="year"
										required={true}
										onBlur={() => {
											handleBlur("year");
										}}
										value={cardInfo.year}
										placeholder="YY"
										onChange={handleChange}
									/>
									{cardInfo.year ? (
										""
									) : (
										<span className={renderClassname("year")}>
											Can't be blank
										</span>
									)}
								</div>
							</div>
						</div>
						<div className="cvc">
							<label>CVC</label>
							<InputMask
								mask="999"
								type="text"
								name="cvc"
								required={true}
								onBlur={() => {
									handleBlur("cvc");
								}}
								value={cardInfo.cvc}
								placeholder="e.g. 123"
								onChange={handleChange}
							/>
							{cardInfo.cvc ? (
								""
							) : (
								<span className={renderClassname("cvc")}>Can't be blank</span>
							)}
						</div>
					</div>

					<motion.button whileTap={{ scale: 0.95 }}>Confirm</motion.button>
				</form>
			</div>
		</div>
	);
};

export default InteractiveCard;

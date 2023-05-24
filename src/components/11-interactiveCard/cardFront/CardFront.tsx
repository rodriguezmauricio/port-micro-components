import "./cardFront.scss";

interface ICardFrontProps {
	username: string;
	cardNumber: string;
	month: string;
	year: string;
	classname: string;
}

const CardFront = ({ username, cardNumber, month, year, classname }: ICardFrontProps) => {
	return (
		<div className={`card ${classname}`}>
			<div className="content">
				<span>{cardNumber ? cardNumber : "0000 0000 0000 0000"}</span>
				<div className="name-date">
					<div className="name">
						{username ? username.toUpperCase() : "Jane Appleseed".toUpperCase()}
					</div>
					<div className="date">{month && year ? `${month}/${year}` : "00/00"}</div>
				</div>
			</div>
		</div>
	);
};

export default CardFront;

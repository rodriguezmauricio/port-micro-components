import "./cardBack.scss";

interface ICvcProps {
	cvc: string;
	classname: string;
}

const CardBack = ({ cvc, classname }: ICvcProps) => {
	return (
		<div className={classname}>
			<div className="black-stripe"></div>
			<div className="cvc-stripe">{cvc ? cvc : "123"}</div>
		</div>
	);
};

export default CardBack;

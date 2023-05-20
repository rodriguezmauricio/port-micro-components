import { FaStar } from "react-icons/fa";

interface IStarButton {
	isSelected: boolean;
	onClick: () => void;
}

const StarButton = ({ isSelected, onClick }: IStarButton) => {
	const color = isSelected ? "gold" : "gray";

	return <FaStar size={40} style={{ color: color, cursor: "pointer" }} onClick={onClick} />;
};

export default StarButton;

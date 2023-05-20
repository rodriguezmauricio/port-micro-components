import "./toastMessage.css";

import {
	FaInfoCircle,
	FaTimesCircle,
	FaRegCheckCircle,
	FaExclamationTriangle,
	FaTimes,
} from "react-icons/fa";

interface IToastMessage {
	type: string;
	closeMessage: (arg: string) => void;
}

const ToastMessage = ({ type, closeMessage }: IToastMessage) => {
	const toastBox = [
		{
			id: 0,
			type: "success",
			color: "green",
			icon: <FaRegCheckCircle color="green" />,
			message: "Success Toast Notification",
		},
		{
			id: 1,
			type: "info",
			color: "blue",
			icon: <FaInfoCircle color={"blue"} />,
			message: "Info Toast Notification",
		},
		{
			id: 2,
			type: "warning",
			color: "orange",
			icon: <FaExclamationTriangle color={"orange"} />,
			message: "Warning Toast Notification",
		},
		{
			id: 3,
			type: "error",
			color: "red",
			icon: <FaTimesCircle color={"red"} />,
			message: "Error Toast Notification",
		},
	];

	return (
		<>
			{toastBox.map((item) => {
				if (item.type === type) {
					return (
						<div
							key={item.type}
							className="toast-message-container"
							style={{ borderBottom: `5px solid ${item.color}` }}
						>
							{item.icon}
							{item.message}
							<FaTimes
								onClick={() => closeMessage("")}
								color="#aaa"
								style={{ cursor: "pointer" }}
							/>
						</div>
					);
				}
				return;
			})}
		</>
	);
};

export default ToastMessage;

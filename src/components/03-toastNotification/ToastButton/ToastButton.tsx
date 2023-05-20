import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./toastButton.css";

interface IToastButton {
	children: string;
	type: "success" | "info" | "warning" | "error";
	setNotificationType: (type: string) => void;
}

const ToastButton = ({ children, type, setNotificationType }: IToastButton) => {
	const [color, setColor] = useState("");

	useEffect(() => {
		if (type === "success") {
			setColor("green");
		}

		if (type === "info") {
			setColor("blue");
		}

		if (type === "warning") {
			setColor("orange");
		}

		if (type === "error") {
			setColor("red");
		}
	}, [type]);

	return (
		<motion.button
			whileTap={{ scale: 0.95 }}
			className="toast-notif-button"
			style={{ backgroundColor: color }}
			onClick={() => setNotificationType(type)}
		>
			{children}
		</motion.button>
	);
};

export default ToastButton;

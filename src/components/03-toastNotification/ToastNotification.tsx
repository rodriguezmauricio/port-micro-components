import { useState } from "react";
import ToastButton from "./ToastButton/ToastButton";
import ToastMessage from "./toastMessage/ToastMessage";
import "./toastNotification.css";
import { motion } from "framer-motion";

const ToastNotification = () => {
	const [notificationType, setNotificationType] = useState("");

	return (
		<div className="toast-notif-main-container">
			{notificationType ? (
				<motion.div
					className="toast-notif-message-div"
					key={notificationType}
					animate={{ y: 0 }}
					initial={{ y: -50 }}
				>
					{" "}
					<ToastMessage
						type={String(notificationType)}
						closeMessage={setNotificationType}
					/>
				</motion.div>
			) : (
				""
			)}
			<div className="toast-notif-container">
				<ToastButton type="success" setNotificationType={setNotificationType}>
					Success
				</ToastButton>
				<ToastButton type="info" setNotificationType={setNotificationType}>
					Info
				</ToastButton>
				<ToastButton type="warning" setNotificationType={setNotificationType}>
					Warning
				</ToastButton>
				<ToastButton type="error" setNotificationType={setNotificationType}>
					Error
				</ToastButton>
			</div>
		</div>
	);
};

export default ToastNotification;

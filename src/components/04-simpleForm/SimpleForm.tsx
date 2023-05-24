import "./simpleForm.css";
import { useState } from "react";
import { motion } from "framer-motion";
import SimpleFormInput from "./simpleFormInput/SimpleFormInput";

interface ITextAreaProps {
	cols: number;
	rows: number;
	className: string;
	placeholder: string;
	value: string;
	required: boolean;
	pattern: string;
	onFocus: () => void;
	focused: string;
	onChange: (e: React.FormEvent) => void;
}

const SimpleForm = () => {
	const [inputValues, setInputValues] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});

	const inputs = [
		{
			id: 0,
			name: "name",
			placeholder: "Name",
			type: "text",
			required: true,
			errormessage: "That field is required",
		},
		{
			id: 1,
			name: "email",
			placeholder: "Email",
			type: "email",
			required: true,
			errormessage: "That field is required",
			pattern: "^[\\w.-]+@[a-zA-Z_-]+?(?:\\.[a-zA-Z]{2,})+$",
		},
		{
			id: 2,
			name: "subject",
			placeholder: "Subject",
			type: "text",
			required: true,
			errormessage: "That field is required",
			pattern: "^(?=.*[a-zA-Z0-9])[a-zA-Z0-9]{3,}$",
		},
	];

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const target = e.target as HTMLInputElement;
		setInputValues({
			...inputValues,
			[e.target.name]: target.value,
		});
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		setInputValues({ name: "", email: "", subject: "", message: "" });
		console.log(`
            Name: ${inputValues.name}
            E-mail: ${inputValues.email}
            Subject: ${inputValues.subject}
            Message: ${inputValues.message}
        `);
		// console.log(inputValues);
	};

	const [focused, setFocused] = useState(false);

	const textAreaProps: ITextAreaProps = {
		cols: 30,
		rows: 5,
		className: "simple-form-input",
		placeholder: "Message",
		value: inputValues.message,
		required: true,
		pattern: "^[a-zA-Z]{3,}$",
		onFocus: () => setFocused(true),
		focused: focused.toString(),
		onChange: (e) => {
			const target = e.target as HTMLInputElement;
			setInputValues({ ...inputValues, message: target.value });
		},
	};

	return (
		<div className="simple-form-main-container">
			<div className="simple-form-main-container-black">
				<motion.div
					animate={{ opacity: 1, translateY: 0 }}
					initial={{ opacity: 0, translateY: 100 }}
					transition={{ duration: 1 }}
					className="simple-form-container"
				>
					<h2>Send me a message</h2>
					<p>
						Feel free to get in touch with me with anything related to coding or you can
						just say hi. I will get back to you as soon as I can.
					</p>
					<form
						className="simple-form-form-container"
						onSubmit={(e) => {
							handleSubmit(e);
						}}
						action=""
					>
						{inputs.map((input) => {
							return (
								<SimpleFormInput
									key={input.id}
									{...input}
									// value={inputValues[input.name]}
									onChange={handleChange}
									errorMessage={input.errormessage}
								/>
							);
						})}
						<textarea {...textAreaProps}></textarea>
						<span className="span">That field is required</span>
						<motion.button
							whileHover={{
								backgroundImage:
									"linear-gradient(to right, #5bb12a 0%, #5bb12a 100%)",
							}}
							whileTap={{
								scale: 0.95,
							}}
							transition={{ duration: 0.2 }}
							style={{
								background: "linear-gradient(to right, #d0ff00 0%, #5bb12a 100%)",
							}}
							className="simple-form-send-button"
						>
							Send
						</motion.button>
					</form>
				</motion.div>
			</div>
		</div>
	);
};

export default SimpleForm;

import "../simpleForm.css";
import { useState } from "react";
import { motion } from "framer-motion";
import { InputHTMLAttributes } from "react";

interface ISimpleFormInput {
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	errorMessage: string;
}

interface ICustomInputProp extends InputHTMLAttributes<HTMLInputElement> {
	focused: string;
}

const SimpleFormInput = ({ onChange, errorMessage, ...inputProps }: ISimpleFormInput) => {
	const [focused, setFocused] = useState(false);
	const handleFocused = () => {
		setFocused(true);
	};

	const inputProp: ICustomInputProp = {
		onBlur: handleFocused,
		focused: focused.toString(),
		onChange: onChange,
		className: "simple-form-input",
	};

	return (
		<div className="x">
			<input className="simple-form-input" {...inputProps} {...inputProp} />
			{focused && (
				<motion.span animate={{ opacity: 1 }} initial={{ opacity: 0 }} className="span">
					{errorMessage}
				</motion.span>
			)}
		</div>
	);
};

export default SimpleFormInput;

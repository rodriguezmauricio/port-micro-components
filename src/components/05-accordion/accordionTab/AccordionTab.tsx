import "./accordionTab.css";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaTimes, FaChevronDown } from "react-icons/fa";

interface IAccordionTabs {
	id: number;
	title: string;
	content: string;
	color: string; //must pass in RGB => ex.: 255,255,255
}

const AccordionTab = ({ id, title, content, color }: IAccordionTabs) => {
	const [showContent, setShowContent] = useState(false);

	const handleDisplayContent = () => {
		setShowContent(!showContent);
	};

	const opacityColor = `rgba(${color}, 0.2)`;

	return (
		<div style={{ backgroundColor: opacityColor, borderLeft: `5px solid rgba(${color},1)` }}>
			<div onClick={() => handleDisplayContent()} className="accordion-tab-header">
				{title}
				{showContent ? <FaTimes /> : <FaChevronDown />}
			</div>
			{showContent && (
				<motion.div
					key={id}
					animate={{ translateY: -10, opacity: 1 }}
					initial={{ translateY: -30, opacity: 0 }}
					transition={{ duration: 0.5 }}
					className="accordion-tab-content"
				>
					{content}
				</motion.div>
			)}
		</div>
	);
};

export default AccordionTab;

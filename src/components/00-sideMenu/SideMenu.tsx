import { useState } from "react";
import "./sideMenu.css";
import { Link } from "react-router-dom";

const SideMenu = () => {
	const sideMenuLinks = [
		{
			linkTo: "starRating",
			text: "Star Rating",
		},
		{
			linkTo: "newsletterCard",
			text: "Newsletter Card",
		},
		{
			linkTo: "toastNotification",
			text: "Toast Notification",
		},
		{
			linkTo: "simpleForm",
			text: "Simple Form",
		},
		{
			linkTo: "accordion",
			text: "Accordion",
		},
		{
			linkTo: "testimonialUI",
			text: "Testimonial UI",
		},
	];

	const url = window.location.href;

	const [active, setActive] = useState("");

	const handleSelected = (id: string) => {
		setActive(id);
	};

	const isSelected = (id: string, idAtivo: string) => {
		return id === idAtivo;
	};

	const styleActive = {
		color: "rgb(190, 233, 0)",
		borderLeft: "3px solid rgb(190, 233, 0)",
		paddingLeft: "10rem",
	};

	return (
		<div className="side-menu-container">
			<h2>Menu</h2>
			<ul>
				{sideMenuLinks.map((link) => {
					return (
						<li key={link.linkTo}>
							<Link
								onClick={() => handleSelected(link.linkTo)}
								style={
									isSelected(link.linkTo, active) || url.includes(link.linkTo)
										? { ...styleActive }
										: { color: "white" }
								}
								to={link.linkTo}
							>
								{link.text}
							</Link>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default SideMenu;

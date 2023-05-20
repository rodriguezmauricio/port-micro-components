import { useState } from "react";
import "./sideMenu.css";
import { Link } from "react-router-dom";

const SideMenu = () => {
	const sideMenuLinks = [
		{
			linkTo: "starRating",
			text: "Star Rating Component",
		},
		{
			linkTo: "newsletterCard",
			text: "Newsletter Card Component",
		},
		{
			linkTo: "toastNotification",
			text: "Toast Notification Component",
		},
		{
			linkTo: "simpleForm",
			text: "Simple Form Component",
		},

		{
			linkTo: "accordion",
			text: "Accordion Component",
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
										? { color: "rgb(190, 233, 0)" }
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

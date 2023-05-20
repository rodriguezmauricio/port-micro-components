import "./accordionComponent.css";
import AccordionTab from "./accordionTab/AccordionTab";

const AccordionComponent = () => {
	// the color property must be RGB => ex.: 255,255,255
	const accordionTabs = [
		{
			id: 0,
			title: "Can I use FrontEndPro to prepare for a frontend job interview?",
			content:
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum iusto porro ratione explicabo quibusdam harum ipsum minima laudantium neque, exercitationem fugiat dolores repudiandae sequi vitae officiis blanditiis, nulla dicta sunt!",
			color: "255,122,122",
		},
		{
			id: 1,
			title: "Do I need to have experience in frontend dev to use FronEndPro?",
			content:
				"Lorem ostrum iusto porro ratione explicabo quibusdam harum ipsum minima laudantium neque, exercitationem fugiat dolores repudiandae sequi vitae officiis blanditiis, nulla dicta sunt!",
			color: "0,0,255",
		},
		{
			id: 2,
			title: "How often are new challenges added?",
			content:
				"Consectetur adipisicing elit. Nostrum iusto porro ratione explicabo quibusdam harum ipsum minima laudantium neque, exercitationem fugiat dolores repudiandae sequi vitae officiis blanditiis, nulla dicta sunt!",
			color: "255,0,255",
		},
		{
			id: 3,
			title: "What kind of challenges am I expected to find?",
			content:
				"Lopsum dolor sit amet, consectetur adipisicing elit. Ratione explicabo quibusdam harum ipsum minima laudantium neque, exercitationem fugiat dolores repudiandae sequi vitae officiis blanditiis, nulla dicta sunt!",
			color: "122,0,122",
		},
		{
			id: 4,
			title: "Can I use libraries / frameworks on these projects?",
			content:
				"Lorem ipsum dolor sit amet. Nostrum iusto porro ratione explicabo quibusdam harum ipsum minima laudantium neque, exercitationem fugiat dolores repudiandae sequi vitae officiis blanditiis, nulla dicta sunt!",
			color: "0,255,0",
		},
	];

	return (
		<div className="accordion-main-container">
			<div className="accordion-container">
				<h2>Frequently Asked Questions</h2>
				<h3>
					Answers to common questions about <br />
					our front end challenges website
				</h3>
				<div className="accordion-tabs-container">
					{accordionTabs.map(({ id, title, content, color }) => {
						return (
							<AccordionTab
								key={id}
								title={title}
								content={content}
								id={id}
								color={color}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default AccordionComponent;

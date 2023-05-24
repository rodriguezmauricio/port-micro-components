import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import StarRating from "./components/01-starRating/StarRating.tsx";
import NewsletterCard from "./components/02-newsletterCard/NewsletterCard.tsx";
import ToastNotification from "./components/03-toastNotification/ToastNotification.tsx";
import SimpleForm from "./components/04-simpleForm/SimpleForm.tsx";
import AccordionComponent from "./components/05-accordion/AccordionComponent.tsx";
import TestimonialUI from "./components/06-testimonialUI/TestimonialUI.tsx";
import AdviceGenerator from "./components/07-adviceGenerator/AdviceGenerator.tsx";
import ResultsSumary from "./components/08-resultsSummary/ResultsSumary.tsx";
import ComingSoon from "./components/10-comingSoonPage/ComingSoon.tsx";
import InteractiveCard from "./components/11-interactiveCard/InteractiveCard.tsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "starRating",
				element: <StarRating />,
			},
			{
				path: "newsletterCard",
				element: <NewsletterCard />,
			},
			{
				path: "toastNotification",
				element: <ToastNotification />,
			},
			{
				path: "simpleForm",
				element: <SimpleForm />,
			},
			{
				path: "accordion",
				element: <AccordionComponent />,
			},

			{
				path: "testimonialUI",
				element: <TestimonialUI />,
			},
			{
				path: "adviceGenerator",
				element: <AdviceGenerator />,
			},
			{
				path: "resultsSummary",
				element: <ResultsSumary />,
			},
			{
				path: "comingSoon",
				element: <ComingSoon />,
			},
			{
				path: "interactiveCard",
				element: <InteractiveCard />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);

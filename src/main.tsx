import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import StarRating from "./components/01-starRating/StarRating.tsx";
import NewsletterCard from "./components/02-newsletterCard/NewsletterCard.tsx";
import ToastNotification from "./components/03-toastNotification/ToastNotification.tsx";
import SimpleForm from "./components/04-simpleForm/SimpleForm.tsx";

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
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);

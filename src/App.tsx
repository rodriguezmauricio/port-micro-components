import "./App.css";
import SideMenu from "./components/00-sideMenu/SideMenu";
import { Outlet } from "react-router-dom";

function App() {
	return (
		<>
			<main>
				<div className="side-menu">
					<SideMenu />
				</div>
				<div className="content">
					<Outlet />
				</div>
			</main>
		</>
	);
}

export default App;

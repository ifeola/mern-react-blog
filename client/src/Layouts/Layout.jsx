import { Outlet } from "react-router";
import NavBar from "../components/NavBar";

const Layout = () => {
	return (
		<div className="w-full">
			<NavBar />
			<main className="max-w-[72rem] mx-auto px-4 md:px-8">
				<Outlet />
			</main>
		</div>
	);
};

export default Layout;

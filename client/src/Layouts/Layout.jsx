import { Outlet } from "react-router";
import NavBar from "../components/NavBar";
import ThemeToggle from "../components/ThemeToggle";

const Layout = () => {
	return (
		<div className="w-full">
			<NavBar />
			<ThemeToggle />
			<main className="dark:bg-gray-900">
				<div className="max-w-[72rem] mx-auto px-4 md:px-8">
					<Outlet />
				</div>
			</main>
		</div>
	);
};

export default Layout;

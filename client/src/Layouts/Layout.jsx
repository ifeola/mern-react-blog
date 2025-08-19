import { Outlet } from "react-router";
import NavBar from "../components/NavBar";
import ThemeToggle from "../components/ThemeToggle";
import Footer from "../components/Footer";
import Login from "../pages/Login";
import { useState } from "react";

const Layout = () => {
	const [showElement, setShowElement] = useState(false);

	return (
		<div className="w-full">
			<NavBar setShowElement={setShowElement} />
			{showElement && <Login setShowElement={setShowElement} />}
			<ThemeToggle />
			<main className="dark:bg-gray-900">
				<div>
					<Outlet />
				</div>
			</main>
			<footer className="newsletter mt-8 [--pattern-fg:_color-mix(in_oklab,_var(--color-black)_10%,_transparent)] dark:[--pattern-fg:_color-mix(in_oklab,_var(--color-white)_10%,_transparent)] border-t border-bg-dark/20 dark:border-bg-light/10">
				<Footer />
			</footer>
		</div>
	);
};

export default Layout;

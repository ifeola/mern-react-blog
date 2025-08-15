import { useEffect, useState } from "react";
import { Dark, Desktop, Light } from "./icons";

export default function ThemeToggle() {
	const getPreferredTheme = () =>
		window.matchMedia("(prefers-color-scheme: dark)").matches
			? "dark"
			: "light";

	const [theme, setTheme] = useState(() => {
		if (localStorage.theme) return localStorage.theme;
		return getPreferredTheme();
	});

	useEffect(() => {
		const root = document.documentElement;
		const applyTheme = (mode) => {
			root.classList.remove("light", "dark");
			root.classList.add(mode);
		};

		if (theme === "system") {
			const currentSystemTheme = getPreferredTheme();
			applyTheme(currentSystemTheme);
			localStorage.removeItem("theme");

			// Listen for OS theme changes in real-time
			const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
			const handler = (e) => applyTheme(e.matches ? "dark" : "light");
			mediaQuery.addEventListener("change", handler);

			return () => mediaQuery.removeEventListener("change", handler);
		} else {
			applyTheme(theme);
			localStorage.theme = theme;
		}
	}, [theme]);

	return (
		<div className="flex z-200 fixed bottom-6 right-6 bg-gray-950/5 dark:bg-gray-100/10 p-1.5 rounded-4xl backdrop-blur-sm">
			<button
				onClick={() => setTheme("system")}
				className={`p-1.5 size-7 rounded-full dark:text-white border cursor-pointer ${
					theme === "system"
						? "text-gray-950 dark:border-gray-500/20 dark:bg-gray-100/10 dark:text-white border-gray-300/30 shadow-md shadow-gray-950/10"
						: "border-transparent"
				}`}>
				<Desktop />
			</button>
			<button
				onClick={() => setTheme("light")}
				className={`p-1.5 size-7 rounded-full dark:text-white border cursor-pointer ${
					theme === "light"
						? "text-gray-950 dark:border-gray-500/20 dark:bg-gray-100/10 dark:text-white border-gray-300/30 shadow-md shadow-gray-950/10"
						: "border-transparent"
				}`}>
				<Light />
			</button>
			<button
				onClick={() => setTheme("dark")}
				className={`p-1.5 size-7 rounded-full dark:text-white border cursor-pointer ${
					theme === "dark"
						? "text-gray-950 dark:border-gray-500/20 dark:bg-gray-100/10 dark:text-white border-gray-300/30 shadow-md shadow-gray-950/10"
						: "border-transparent"
				}`}>
				<Dark />
			</button>
		</div>
	);
}

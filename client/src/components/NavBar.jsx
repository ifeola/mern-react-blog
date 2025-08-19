import Link from "../components/Link";
import { assets } from "../assets/assets";
import { Cancel, Hamburger } from "./icons";
import { useState } from "react";
import ButtonLink from "./ButtonLink";
import Button from "./Button";

const NavBar = ({ setShowElement }) => {
	const [display, setDisplay] = useState(true);

	return (
		<header
			style={{ "--heading-height": "4rem" }}
			className="fixed top-0 left-0 right-0 w-full h-[var(--heading-height)] md:h-[calc(var(--heading-height)*1.25)] flex items-center justify-center border-b border-b-gray-100/40 dark:border-b-gray-100/15 z-50 bg-primary-green-50 dark:bg-bg-dark/10 dark:backdrop-blur-2xl">
			<nav className="w-full max-w-[72rem] mx-auto flex items-center gap-4 justify-between px-4 md:px-8">
				<div className="flex items-center gap-2 dark:text-white">
					<img src={assets.logo} alt="Logo Image" />
					<span className="font-bold text-xl">
						Crunchy<span className="text-primary-green-600">Blog</span>
					</span>
				</div>
				<div
					className={`fixed top-[var(--heading-height)] left-0 right-0 w-full p-4 bg-transparent backdrop-blur-sm md:hidden ${
						display ? "hidden" : "block"
					}`}>
					<ul className="mb-4 w-full">
						<Link path="/">Home</Link>
						<Link path="popular">Popular</Link>
						<Link path="trending">Trending</Link>
					</ul>
					<div className="h-[1px] w-full bg-gray-200/20" />
					<div className="flex flex-col mt-4">
						<Button
							style="text-text-light dark:text-text-dark border-2 dark:border-border-light border-border-dark hover:bg-primary-green-600/20 transition-colors w-full"
							setShowElement={setShowElement}>
							Login
						</Button>
						<ButtonLink
							style="bg-gray-950 text-white mt-2 hover:bg-gray-800 dark:bg-white dark:text-primary-green-600 dark:border-white w-full"
							path="signup">
							Get started
						</ButtonLink>
					</div>
				</div>
				<button
					className="cursor-pointer md:hidden"
					onClick={() => setDisplay((prevValue) => !prevValue)}>
					{display ? (
						<Hamburger style="pointer-events-none dark:text-white size-6" />
					) : (
						<Cancel style="pointer-events-none dark:text-white size-6" />
					)}
				</button>
				<div className="hidden md:flex items-center gap-6">
					<ul className="flex items-center gap-6">
						<Link path="/" style="nav-link">
							Home
						</Link>
						<Link path="popular" style="nav-link">
							Popular
						</Link>
						<Link path="trending" style="nav-link">
							Trending
						</Link>
					</ul>
					<div className="flex items-center gap-3">
						<Button
							style="text-text-light dark:text-text-dark border-2 dark:border-border-light border-border-dark hover:bg-primary-green-600/20 transition-colors"
							setShowElement={setShowElement}>
							Login
						</Button>
						<ButtonLink
							style="bg-gray-950 dark:bg-primary-green-600 dark:border-primary-green-600 dark:text-gray-900 text-white border-gray-950 hover:bg-gray-800 dark:hover:bg-primary-green-500 dark:hover:border-primary-green-500 md:text-sm"
							path="signup">
							Get Started
						</ButtonLink>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default NavBar;

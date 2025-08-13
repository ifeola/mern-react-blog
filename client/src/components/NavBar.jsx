import Link from "../components/Link";
import { assets } from "../assets/assets";
import { Cancel, Hamburger } from "./icons";
import { useState } from "react";
import ButtonLink from "./ButtonLink";

const NavBar = () => {
	const [display, setDisplay] = useState(true);

	return (
		<header
			style={{ "--heading-height": "4rem" }}
			className="fixed top-0 left-0 w-full h-[var(--heading-height)] md:h-[calc(var(--heading-height)*1.25)] flex items-center justify-center border-b border-b-gray-100">
			<nav className="w-full max-w-[72rem] mx-auto flex items-center justify-between px-4 md:px-8">
				<div className="flex items-center gap-2">
					<img src={assets.logo} alt="Logo Image" />
					<span>CrunchyBlog</span>
				</div>
				<div
					className={`absolute top-[var(--heading-height)] left-0 w-full p-4 bg-transparent backdrop-blur-sm md:hidden ${
						display ? "hidden" : "block"
					}`}>
					<ul className="mb-4 w-full">
						<Link path="/">Home</Link>
						<Link path="popular">Popular</Link>
						<Link path="trending">Trending</Link>
					</ul>
					<div className="h-[1px] w-full bg-gray-200" />
					<div className="flex flex-col mt-4">
						<ButtonLink
							style="bg-white border border-gray-950 hover:bg-gray-200"
							path="login">
							Login
						</ButtonLink>
						<ButtonLink
							style="bg-gray-950 text-white mt-2 hover:bg-gray-800"
							path="signup">
							Get started
						</ButtonLink>
					</div>
				</div>
				<button
					className="cursor-pointer md:hidden"
					onClick={() => setDisplay((prevValue) => !prevValue)}>
					{display ? (
						<Hamburger style={"pointer-events-none"} />
					) : (
						<Cancel style={"pointer-events-none"} />
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
						<ButtonLink
							style="bg-white border-gray-950 hover:bg-gray-200"
							path="login">
							Login
						</ButtonLink>
						<ButtonLink
							style="bg-gray-950 text-white border-gray-950 hover:bg-gray-800"
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

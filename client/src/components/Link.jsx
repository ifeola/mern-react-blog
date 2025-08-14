import { NavLink } from "react-router";

const Link = (props) => {
	const { children, path, style } = props;
	return (
		<li className="w-full text-lg md:text-sm font-medium">
			<NavLink
				className={({ isActive }) =>
					`${
						isActive
							? "bg-primary-green-600 md:bg-transparent text-text-dark  md:dark:text-primary-green-600 md:text-primary-green-600"
							: "text-black"
					} ${style} px-4 py-2 md:p-0 w-full inline-block rounded-md transition-colors md:hover:text-primary-green-600 md:hover:bg-transparent hover:bg-primary-green-600 hover:text-text-dark dark:text-text-dark dark:hover:text-primary-white`
				}
				to={path}>
				{children}
			</NavLink>
		</li>
	);
};

export default Link;

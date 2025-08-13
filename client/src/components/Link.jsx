import { NavLink } from "react-router";

const Link = (props) => {
	const { children, path, style } = props;
	return (
		<li className="w-full text-lg md:text-sm font-medium">
			<NavLink
				className={({ isActive }) =>
					`${
						isActive
							? "bg-primary-green-400 md:bg-transparent text-white  md:dark:text-primary-green-400 md:text-primary-green-400"
							: "text-black"
					} ${style} px-4 py-2 md:p-0 w-full inline-block rounded-md transition-colors md:hover:text-primary-green-400 md:hover:bg-transparent hover:bg-primary-green-400 hover:text-white dark:text-white dark:hover:text-primary-green-400`
				}
				to={path}>
				{children}
			</NavLink>
		</li>
	);
};

export default Link;

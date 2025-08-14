import { Link } from "react-router";

const ButtonLink = (props) => {
	const { style, children, path } = props;
	return (
		<Link
			to={path}
			className={`text-base px-8 py-2 h-full rounded-md border-2 inline-block text-center font-medium transition-colors ${style}`}>
			<span>{children}</span>
		</Link>
	);
};

export default ButtonLink;

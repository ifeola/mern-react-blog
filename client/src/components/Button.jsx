const Button = (props) => {
	const { style, children, setShowElement } = props;
	return (
		<button
			className={`text-sm px-8 py-2.5 h-full rounded-md inline-block text-center font-medium transition-colors cursor-pointer ${style}`}
			onClick={() => setShowElement((prevState) => !prevState)}>
			<span>{children}</span>
		</button>
	);
};

export default Button;

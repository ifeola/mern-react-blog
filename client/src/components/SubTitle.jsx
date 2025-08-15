const SubTitle = ({ children, style }) => {
	return (
		<span
			className={`relative block font-fira-mono font-bold before:content[''] before:absolute before:w-4.5 before:h-full before:bg-primary-green-600 before:-z-1 dark:text-text-dark dark:before:bg-primary-green-700 z-[2] ${style}`}>
			{children}
		</span>
	);
};

export default SubTitle;

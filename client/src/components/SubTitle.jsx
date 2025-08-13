const SubTitle = ({ children }) => {
	return (
		<span className="relative block font-fira-mono font-medium text-sm before:content[''] before:absolute before:w-4.5 before:h-full before:bg-primary-green before:-z-1">
			{children}
		</span>
	);
};

export default SubTitle;

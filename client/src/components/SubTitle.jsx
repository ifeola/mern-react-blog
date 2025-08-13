const SubTitle = ({ children }) => {
	return (
		<span className="relative block font-fira-mono font-bold text-sm before:content[''] before:absolute before:w-4.5 before:h-full before:bg-primary-green before:-z-1 dark:text-gray-300 dark:before:bg-primary-green-400 z-[2]">
			{children}
		</span>
	);
};

export default SubTitle;

const BlogCardLoading = ({ index }) => {
	return (
		<div
			className="block p-4 pb-6 border-4 border-border-dark dark:border-border-light/10 rounded-lg animate-pulse"
			key={index}>
			<div className="flex flex-col items-center gap-4">
				{/* Image Skeleton */}
				<div className="w-full h-40 bg-gray-300 dark:bg-gray-700 rounded-sm" />

				<div className="w-full">
					{/* Category + Date */}
					<div className="text-xs flex items-center gap-4 mb-4">
						<span className="w-16 h-6 bg-gray-300 dark:bg-gray-700 rounded-lg" />
						<span className="w-20 h-4 bg-gray-300 dark:bg-gray-700 rounded" />
					</div>

					{/* Title */}
					<div className="w-3/4 h-5 bg-gray-300 dark:bg-gray-700 rounded mb-2" />

					{/* Content lines */}
					<div className="w-full h-4 bg-gray-300 dark:bg-gray-700 rounded mb-1" />
					<div className="w-11/12 h-4 bg-gray-300 dark:bg-gray-700 rounded mb-1" />
					<div className="w-10/12 h-4 bg-gray-300 dark:bg-gray-700 rounded" />
				</div>
			</div>
		</div>
	);
};

export default BlogCardLoading;

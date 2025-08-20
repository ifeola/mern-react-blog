const BlogDetailsLoading = () => {
	return (
		<>
			{/* Title + engagement */}
			<section className="max-w-[880px] mx-auto animate-pulse">
				<div className="pt-28 pb-18">
					{/* Title */}
					<div className="h-10 w-3/4 bg-gray-300 dark:bg-gray-700 rounded mb-6" />

					{/* Engagement row */}
					<div className="flex items-center flex-wrap gap-3 mb-8">
						<div className="w-12 h-4 bg-gray-300 dark:bg-gray-700 rounded" />
						<div className="w-1 h-1 bg-gray-300 rounded-full" />
						<div className="w-10 h-4 bg-gray-300 dark:bg-gray-700 rounded" />
						<div className="w-1 h-1 bg-gray-300 rounded-full" />
						<div className="w-12 h-4 bg-gray-300 dark:bg-gray-700 rounded" />
						<div className="w-1 h-1 bg-gray-300 rounded-full" />
						<div className="w-14 h-4 bg-gray-300 dark:bg-gray-700 rounded" />
					</div>

					{/* Author + date */}
					<div className="flex items-center justify-between flex-wrap gap-4">
						<div className="flex items-center gap-3">
							<div className="w-10 h-10 rounded-full bg-gray-300 dark:bg-gray-700" />
							<div>
								<div className="w-24 h-5 bg-gray-300 dark:bg-gray-700 rounded mb-2" />
								<div className="flex gap-2">
									<div className="w-20 h-3 bg-gray-300 dark:bg-gray-700 rounded" />
									<div className="w-16 h-3 bg-gray-300 dark:bg-gray-700 rounded" />
								</div>
							</div>
						</div>
						{/* Social buttons */}
						<div className="flex items-center gap-2">
							<div className="w-7 h-7 rounded-full bg-gray-300 dark:bg-gray-700" />
							<div className="w-7 h-7 rounded-full bg-gray-300 dark:bg-gray-700" />
							<div className="w-7 h-7 rounded-full bg-gray-300 dark:bg-gray-700" />
							<div className="w-7 h-7 rounded-full bg-gray-300 dark:bg-gray-700" />
						</div>
					</div>
				</div>
			</section>

			{/* Banner image */}
			<section className="mb-14 animate-pulse">
				<div className="w-full h-64 bg-gray-300 dark:bg-gray-700 rounded" />
			</section>

			{/* Content */}
			<section className="max-w-[880px] mx-auto text-text-light dark:text-text-dark animate-pulse">
				{/* Subtitle */}
				<div className="w-40 h-6 bg-gray-300 dark:bg-gray-700 rounded mb-6" />

				{/* Paragraph lines */}
				<div className="space-y-3">
					<div className="w-full h-4 bg-gray-300 dark:bg-gray-700 rounded" />
					<div className="w-11/12 h-4 bg-gray-300 dark:bg-gray-700 rounded" />
					<div className="w-10/12 h-4 bg-gray-300 dark:bg-gray-700 rounded" />
					<div className="w-3/4 h-4 bg-gray-300 dark:bg-gray-700 rounded" />
				</div>

				{/* Share + tags */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-16 items-center">
					<div>
						<div className="w-28 h-5 bg-gray-300 dark:bg-gray-700 rounded mb-3" />
						<div className="flex items-center gap-2">
							<div className="w-7 h-7 rounded-full bg-gray-300 dark:bg-gray-700" />
							<div className="w-7 h-7 rounded-full bg-gray-300 dark:bg-gray-700" />
							<div className="w-7 h-7 rounded-full bg-gray-300 dark:bg-gray-700" />
							<div className="w-7 h-7 rounded-full bg-gray-300 dark:bg-gray-700" />
						</div>
					</div>
					<div className="flex flex-wrap gap-2">
						<div className="w-12 h-5 bg-gray-300 dark:bg-gray-700 rounded" />
						<div className="w-14 h-5 bg-gray-300 dark:bg-gray-700 rounded" />
						<div className="w-10 h-5 bg-gray-300 dark:bg-gray-700 rounded" />
					</div>
				</div>
			</section>
		</>
	);
};

export default BlogDetailsLoading;

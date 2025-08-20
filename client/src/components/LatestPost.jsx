import { Link } from "react-router";
import { assets } from "../assets/assets";
import useFetchBlogPost from "../hooks/useFetchBlogPosts";

const LatestPost = ({
	URL,
	style,
	showCategory,
	showPublicationDate,
	showContent,
	bgColor,
}) => {
	const [data] = useFetchBlogPost(URL);
	function formatSmartDate(isoString) {
		const date = new Date(isoString);
		const now = new Date();
		const diffMs = now - date;
		const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

		if (diffDays === 0) return "Today";
		if (diffDays === 1) return "1d ago";
		if (diffDays < 7) return `${diffDays}d ago`;

		// Otherwise show Month Day (e.g., Aug 2)
		const options = { day: "numeric", month: "short" };
		return date.toLocaleDateString(undefined, options);
	}
	return (
		<Link
			to={`/blogs/${data.postId}`}
			className={`block p-1.5 border-4 border-border-dark dark:border-border-light/10 rounded-lg transition-all group hover:shadow-[4px_4px_0_0_#2a2a2a] dark:hover:shadow-[4px_4px_0_0_rgba(110,_110,_110,_1)] ${style}`}>
			<div className="relative flex flex-col items-center gap-4 overflow-hidden">
				<img
					src={assets.blog_pic_4}
					alt="blog post image"
					className="rounded-sm transition-shadow"
				/>
				<div className="absolute inset-0 bg-bg-dark/40 bg-linear-to-b rounded-sm" />
				<div className="absolute left-4 bottom-4 z-1">
					<div className="text-xs flex items-center gap-4">
						{showCategory && (
							<span className="capitalize px-2 py-1 text-dark-800 bg-accent-600/30 rounded-lg border border-accent-700/30 font-medium">
								{data.category}
							</span>
						)}
						{showPublicationDate && (
							<span className="text-text-dark/70 font-medium">
								{formatSmartDate(data.publicationDate)}
							</span>
						)}
					</div>
					<h4 className="text-base md:text-lg text-text-dark font-medium mt-4 group-hover:text-primary-green-700 transition-colors">
						{data.title}
					</h4>
					{showContent && (
						<p className="text-text-dark/70 md:text-base text-sm line-clamp-2 text-pretty mt-2">
							{data.content}
						</p>
					)}
				</div>
			</div>
		</Link>
	);
};

export default LatestPost;

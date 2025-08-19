import { Link } from "react-router";
import { assets } from "../assets/assets";

const BlogPost = ({
	title,
	content,
	category,
	publicationDate,
	author,
	postId,
	id,
	style,
}) => {
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
			to={`/blogs/${postId}`}
			key={id}
			style={style}
			className="block p-4 pb-6 border-4 border-border-dark dark:border-border-light/10 rounded-lg transition-all group hover:shadow-[4px_4px_0_0_#2a2a2a] dark:hover:shadow-[4px_4px_0_0_rgba(110,_110,_110,_1)]">
			<div className="flex flex-col items-center gap-4">
				<img
					src={assets.blog_pic_4}
					alt="blog post image"
					className="rounded-sm transition-shadow"
				/>
				<div>
					<div className="text-xs flex items-center gap-4">
						<span className="capitalize px-2 py-1 text-accent-800 bg-accent-600/30 rounded-lg border border-accent-700/30 font-medium">
							{category}
						</span>
						<span className="text-text-light/70 font-medium">
							{formatSmartDate(publicationDate)}
						</span>
					</div>
					<h4 className="text-lg text-text-light font-medium mt-4 mb-2 group-hover:text-primary-green-700 transition-colors">
						{title}
					</h4>
					<p className="text-text-light/70 text-base line-clamp-3">{content}</p>
				</div>
			</div>
		</Link>
	);
};

export default BlogPost;

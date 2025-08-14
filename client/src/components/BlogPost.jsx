import { Link } from "react-router";
import { assets } from "../assets/assets";

const BlogPost = () => {
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
			to="blog"
			className="block p-4 border border-border-light/40 dark:border-border-dark/80 rounded-lg shadow-lg shadow-bg-dark/5">
			<div className="flex flex-col items-center gap-5">
				<img
					src={assets.blog_pic_4}
					alt="blog post image"
					className="rounded-md"
				/>
				<div>
					<div className="text-sm flex items-center gap-4">
						<span className="capitalize px-2 py-1 text-accent-800 dark:text-accent-400 bg-accent-600/30 rounded-lg border border-accent-700/30 font-medium">
							Future Tech
						</span>
						<span className="text-text-light/70 dark:text-text-dark/70 font-medium">
							{formatSmartDate("2025-07-10T11:45:00Z")}
						</span>
					</div>
					<h4 className="text-lg text-text-light dark:text-text-dark font-medium my-2">
						Quantum Computing: A Primer for the Modern Developer
					</h4>
					<p className="text-text-light/70 dark:text-text-dark/70 text-base">
						Quantum computing has been a buzzword in the tech industry for years
					</p>
				</div>
			</div>
		</Link>
	);
};

export default BlogPost;

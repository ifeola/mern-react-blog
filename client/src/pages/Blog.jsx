import { Link, useParams } from "react-router";
import useFetchBlogPost from "../hooks/useFetchBlogPosts";
import MarkdownRenderer from "../components/MarkdownRenderer";
import BlogPosts from "../components/BlogPosts";
import { assets } from "../assets/assets";
import { Facebook, LinkedIn, LinkIcon, Twitter } from "../components/icons";
import BlogDetailsLoading from "../components/BlogDetailsLoading";

const Blog = () => {
	const { id } = useParams();

	const [data, loading, error] = useFetchBlogPost(`/api/blogs/${id}`);

	if (loading) return <BlogDetailsLoading />;
	if (error) return <div>Error: {error.message || "Failed to load data"}</div>;
	if (!data) return <div>Blog not found.</div>;

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
		<>
			<section className="max-w-[880px] mx-auto ">
				<div className="pt-28 pb-18">
					<div>
						<h2 className="text-3xl md:text-5xl font-medium text-pretty text-text-light dark:text-text-dark">
							{data.title}
						</h2>
						<div className="flex items-center flex-wrap gap-2.5 mt-4">
							<span className="block text-xs font-medium text-gray-500 dark:text-gray-300">
								{data.engagement.viewCount === 0
									? 0
									: data.engagement.viewCount}
								<span className="ml-1">views</span>
							</span>
							<div className="w-1 h-1 bg-gray-300 rounded-full" />
							<span className="block text-xs font-medium text-gray-500 dark:text-gray-300">
								{data.engagement.likes === 0 ? 0 : data.engagement.likes}
								<span className="ml-1">likes</span>
							</span>
							<div className="w-1 h-1 bg-gray-300 rounded-full" />
							<span className="block text-xs font-medium text-gray-500 dark:text-gray-300">
								{data.engagement.shares === 0 ? 0 : data.engagement.shares}
								<span className="ml-1">shares</span>
							</span>
							<div className="w-1 h-1 bg-gray-300 rounded-full" />
							<span className="block text-xs font-medium text-gray-500 dark:text-gray-300">
								{data.engagement.commentCount === 0
									? 0
									: data.engagement.commentCount}
								<span className="ml-1">comments</span>
							</span>
						</div>
					</div>
					<div className="flex items-end flex-wrap gap-4 justify-between">
						<div className="text-text-light dark:text-text-dark flex flex-wrap items-center gap-2 mt-8">
							<div className="w-10 h-10 font-medium text-xl rounded-full flex items-center justify-center  bg-gray-200/70 text-primary-green-800">
								{data.author.name.slice(0, 1).toLowerCase()}
							</div>
							<div>
								<h5 className="font-bold">{data.author.name}</h5>
								<div className="flex flex-wrap items-center gap-3">
									<span className="block text-xs font-medium">
										{data.author.email}
									</span>
									<div className="w-1 h-1 bg-gray-300 rounded-full" />
									<span className="block text-xs text-gray-300">
										{formatSmartDate(data.publicationDate)}
									</span>
								</div>
							</div>
						</div>
						<div className="flex items-center gap-2 text-black">
							<Link className="w-7 h-7 block p-1.5 bg-bg-dark/10 hover:bg-bg-dark/20 transition-colors dark:bg-bg-light/70 hover:dark:bg-bg-light/80 rounded-full">
								<span>
									<LinkIcon />
								</span>
							</Link>
							<Link className="w-7 h-7 block p-1.5 bg-bg-dark/10 dark:bg-bg-light/70 hover:dark:bg-bg-light/80 hover:bg-bg-dark/20 transition-colors rounded-full">
								<span>
									<Twitter />
								</span>
							</Link>
							<Link className="w-7 h-7 block p-1.5 bg-bg-dark/10 dark:bg-bg-light/70 hover:dark:bg-bg-light/80 hover:bg-bg-dark/20 transition-colors rounded-full">
								<span>
									<LinkedIn />
								</span>
							</Link>
							<Link className="w-7 h-7 block p-1.5 bg-bg-dark/10 hover:bg-bg-dark/20 transition-colors dark:bg-bg-light/70 hover:dark:bg-bg-light/80 rounded-full">
								<span>
									<Facebook />
								</span>
							</Link>
						</div>
					</div>
				</div>
			</section>
			<section className="mb-14">
				<div>
					<img src={assets.blog_pic_4} alt="" />
				</div>
			</section>
			<section className="max-w-[880px] mx-auto text-text-light dark:text-text-dark">
				<h3 className="text-2xl font-bold mb-3">Introduction</h3>
				<div className="prose max-w-none">
					<MarkdownRenderer content={data.content} />
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center justify-between mt-16">
					<div>
						<h5>Share this post</h5>
						<div className="flex items-center gap-2 mt-2">
							<Link className="w-7 h-7 block p-1.5 bg-bg-dark/10 hover:bg-bg-dark/20 transition-colors dark:bg-bg-light/70 hover:dark:bg-bg-light/80 rounded-full text-black">
								<span>
									<LinkIcon />
								</span>
							</Link>
							<Link className="w-7 h-7 block p-1.5 bg-bg-dark/10 dark:bg-bg-light/70 hover:dark:bg-bg-light/80 hover:bg-bg-dark/20 transition-colors rounded-full">
								<span>
									<Twitter />
								</span>
							</Link>
							<Link className="w-7 h-7 block p-1.5 bg-bg-dark/10 dark:bg-bg-light/70 hover:dark:bg-bg-light/80 hover:bg-bg-dark/20 transition-colors rounded-full">
								<span>
									<LinkedIn />
								</span>
							</Link>
							<Link className="w-7 h-7 block p-1.5 bg-bg-dark/10 hover:bg-bg-dark/20 transition-colors dark:bg-bg-light/70 hover:dark:bg-bg-light/80 rounded-full">
								<span>
									<Facebook />
								</span>
							</Link>
						</div>
					</div>
					<div>
						<ul className="flex items-center flex-wrap gap-2">
							{data.tags.map((tag) => {
								return (
									<li className="py-1.5 px-3 bg-gray-200/20 border border-gray-300 backdrop-blur-sm text-xs rounded-sm">
										{tag}
									</li>
								);
							})}
						</ul>
					</div>
				</div>
			</section>
			<BlogPosts
				subtitle="Trending blog posts"
				showButton={true}
				URL="http://localhost:3000/api/blogs/trending"
				limit={0}
				showDesc={true}
				description="Stay ahead with the latest buzz! These articles reflect current interests, hot discussions, and fresh perspectives—find out what’s making headlines in our community today!"
			/>
			<section className="max-w-[880px] mx-auto text-text-light dark:text-text-dark"></section>
		</>
	);
};

export default Blog;

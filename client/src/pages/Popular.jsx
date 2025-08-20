import BlogPosts from "../components/BlogPosts";

const Popular = () => {
	return (
		<div className="pt-18">
			<BlogPosts
				subtitle="Popular blog posts"
				showButton={true}
				URL="/api/blogs/popular"
				limit={0}
				showDesc={true}
				description="Discover the most popular posts from our blog community! Explore the insights, tips, and stories that have captured the most attention—find out what’s making waves right now!"
			/>
		</div>
	);
};

export default Popular;

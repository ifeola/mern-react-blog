import BlogPosts from "../components/BlogPosts";

const Trending = () => {
	return (
		<div className="pt-18">
			<BlogPosts
				subtitle="Trending blog posts"
				showButton={true}
				URL="/api/blogs/trending"
				limit={0}
				showDesc={true}
				description="Stay ahead with the latest buzz! These articles reflect current interests, hot discussions, and fresh perspectives—find out what’s making headlines in our community today!"
			/>
		</div>
	);
};

export default Trending;

import BlogPosts from "../components/BlogPosts";
import Hero from "../components/Hero";
import Latest from "../components/Latest";
import Newsletter from "../components/Newsletter";

const Home = () => {
	return (
		<>
			<Hero />
			<BlogPosts
				subtitle="Featured blog posts"
				showButton={false}
				URL="http://localhost:3000/api/blogs/"
				limit={6}
			/>
			<Latest
				subtitle="Latest blog posts"
				path="popular"
				showButton={true}
				URL="http://localhost:3000/api/blogs"
				limit={9}
				showDesc={true}
				description="Discover the most popular posts from our blog community! Explore the insights, tips, and stories that have captured the most attention—find out what’s making waves right now!"
			/>
			<Newsletter />
			<BlogPosts
				subtitle="Popular blog posts"
				path="popular"
				showButton={true}
				URL="http://localhost:3000/api/blogs/popular"
				limit={9}
				showDesc={true}
				description="Discover the most popular posts from our blog community! Explore the insights, tips, and stories that have captured the most attention—find out what’s making waves right now!"
			/>
			<BlogPosts
				subtitle="Trending blog posts"
				path="trending"
				showButton={true}
				URL="http://localhost:3000/api/blogs/trending"
				limit={9}
				showDesc={true}
				description="Stay ahead with the latest buzz! These articles reflect current interests, hot discussions, and fresh perspectives—find out what’s making headlines in our community today!"
			/>
		</>
	);
};

export default Home;

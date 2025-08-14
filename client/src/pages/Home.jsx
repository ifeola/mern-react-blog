import BlogPosts from "../components/BlogPosts";
import Hero from "../components/Hero";

const Home = () => {
	return (
		<>
			<Hero />
			<BlogPosts subtitle="Featured blog posts" showButton={true} />
		</>
	);
};

export default Home;

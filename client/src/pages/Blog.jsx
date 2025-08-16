import { useParams } from "react-router";
import useFetchBlogPost from "../hooks/useFetchBlogPosts";
import MarkdownRenderer from "../components/MarkdownRenderer";
import BlogPosts from "../components/BlogPosts";

const Blog = () => {
	const { id } = useParams();

	const [data, loading, error] = useFetchBlogPost(
		`http://localhost:3000/api/blogs/${id}`
	);

	if (loading) return <div>Loading...</div>;
	if (error) return <div>Error: {error.message || "Failed to load data"}</div>;
	if (!data) return <div>Blog not found.</div>;

	return (
		<>
			<section className="max-w-[880px] mx-auto">
				<div className="pt-28 pb-18">
					<h2 className="text-3xl font-medium text-pretty">{data.title}</h2>
					<div>
						<div>
              <img src="" alt="" />
              <div>
                <h5></h5>
                <span></span>
              </div>
						</div>
						<div></div>
					</div>
					<div className="prose max-w-none">
						<MarkdownRenderer content={data.content} />
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
		</>
	);
};

export default Blog;

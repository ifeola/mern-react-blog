import { useState } from "react";
import BlogPost from "./BlogPost";
import SubTitle from "./SubTitle";
import { useEffect } from "react";

const BlogPosts = (props) => {
	const URL = "http://localhost:3000/api/blogs";
	const [data, setData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(URL);
				if (!response.ok) {
					throw new Error("Failed to fetch data");
				}
				const blogs = await response.json();
				setData(blogs);
			} catch (error) {
				console.log(error.message);
			} finally {
				console.log(false);
			}
		};

		fetchData();
	}, [URL]); // The effect will re-run if the URL changes
	console.log(data);

	const { subtitle, showButton } = props;
	return (
		<div>
			<SubTitle>{subtitle}</SubTitle>
			<ul className="grid gap-6 grid-cols-[repeat(auto-fit,minmax(min(320px,100%),1fr))]">
				<BlogPost />
				<BlogPost />
				<BlogPost />
				<BlogPost />
				<BlogPost />
			</ul>
			{showButton && <button>View all</button>}
		</div>
	);
};

export default BlogPosts;

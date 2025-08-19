import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();
const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.json()); // This will allow us to pass incoming requests with json payloads
app.use(cors());

// Needed for __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve React frontend
app.use(express.static(path.join(__dirname, "../client/dist")));

const getBlogPosts = async () => {
	const data = await import("./data.json", {
		with: { type: "json" },
	});
	return data.default;
};

app.get("/api/blogs", async (request, response) => {
	const blogPosts = await getBlogPosts();
	return response.status(200).json(blogPosts);
});

// Get popular blog posts
app.get("/api/blogs/popular", async (request, response) => {
	try {
		const blogPosts = await getBlogPosts();

		if (!blogPosts || blogPosts.length === 0) {
			return response
				.status(404)
				.json({ message: "Error 404! No blogs found." });
		}

		const blogs = blogPosts.sort(
			(blogA, blogB) => blogB.engagement.viewCount - blogA.engagement.viewCount
		);

		return response.status(200).json(blogs);
	} catch (error) {
		console.error("Failed to load blogs:", error);
		return response.status(500).json({ message: "Internal Server Error" });
	}
});

// Get trending blog posts
app.get("/api/blogs/trending", async (request, response) => {
	try {
		const blogPosts = await getBlogPosts();
		if (!blogPosts || blogPosts.length === 0) {
			return response
				.status(404)
				.json({ message: "Error 404! No blogs found." });
		}

		const blogs = blogPosts.filter((blog) => blog.trending.isTrending);

		return response.status(200).json(blogs);
	} catch (error) {
		console.error("Failed to load blogs:", error);
		return response.status(500).json({ message: error.message });
	}
});

app.get("/api/blogs/:blogId", async (request, response) => {
	try {
		const { blogId } = request.params;
		if (!blogId)
			return response
				.status(404)
				.json({ message: "Error 404! No blog with the id found." });
		const data = await getBlogPosts();
		const blog = data.find((blog) => blog.postId === blogId);
		return response.status(200).json(blog);
	} catch (error) {
		console.error("Failed to load blog:", error);
		return response.status(500).json({ message: error.message });
	}
});

app.get(/^\/(?!api).*/, (req, res) => {
	res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});

app.listen(PORT, () => {
	console.log(`Application running on http://localhost:${PORT}`);
});

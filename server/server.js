import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const PORT = process.env.PORT || 3000;
const app = express();
app.use(cors());

app.get("/api/blogs", async (request, response) => {
	const data = await import("./data.json", {
		with: { type: "json" },
	});
	return response.status(200).json(data.default);
});

// Get popular blog posts
app.get("/api/blogs/popular", async (request, response) => {
	try {
		const data = await import("./data.json", {
			with: { type: "json" },
		});

		if (!data.default || data.default.length === 0) {
			return response
				.status(404)
				.json({ message: "Error 404! No blogs found." });
		}

		const blogs = data.default.sort(
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
		const data = await import("./data.json", {
			with: { type: "json" },
		});

		if (!data.default || data.default.length === 0) {
			return response
				.status(404)
				.json({ message: "Error 404! No blogs found." });
		}

		const blogs = data.default.filter((blog) => blog.trending.isTrending);

		return response.status(200).json(blogs);
	} catch (error) {
		console.error("Failed to load blogs:", error);
		return response.status(500).json({ message: error.message });
	}
});

app.listen(PORT, () => {
	console.log(`Application running on http://localhost:${PORT}`);
});

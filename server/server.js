import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const PORT = process.env.PORT;
const app = express();
app.use(cors());

app.get("/api/blogs", async (request, response) => {
	const data = await import("./data.json", {
		with: { type: "json" },
	});
	return response.status(200).json(data.default);
});

app.listen(PORT, () => {
	console.log(`Application running on http://localhost:${PORT}`);
});

import { useEffect, useState } from "react";

function useFetchBlogPost(URL) {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			try {
				const response = await fetch(URL);
				if (!response.ok) {
					throw new Error("Failed to fetch data");
				}
				const blogs = await response.json();
				setData(blogs);
			} catch (error) {
				setError(error.message);
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, [URL]); // The effect will re-run if the URL changes

	return [data, loading, error];
}

export default useFetchBlogPost;

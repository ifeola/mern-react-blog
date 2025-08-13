import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Layout from "./Layouts/Layout";
import Popular from "./pages/Popular";
import Trending from "./pages/Trending";

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<Home />} />
				<Route path="popular" element={<Popular />} />
				<Route path="trending" element={<Trending />} />
			</Route>
		</Routes>
	);
};

export default App;

import BlogCardLoading from "./BlogCardLoading";

const IsLoading = () => {
	return (
		<div className="grid gap-6 grid-cols-[repeat(auto-fit,minmax(min(320px,100%),1fr))]">
			{[...Array(9)].map((_, index) => {
				return <BlogCardLoading id={index} />;
			})}
		</div>
	);
};

export default IsLoading;

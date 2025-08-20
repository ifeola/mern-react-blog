import LatestPost from "./LatestPost";

const Latest = () => {
	return (
		<section>
			<div className="grid grid-cols-[repeat(auto-fit,minmax(min(320px,100%),1fr))] gap-4">
				<LatestPost
					URL="/api/blogs/8a1b9c2d-0e3f-4a4b-8c1d-2e3f4a5b6c7d"
					style="md:col-span-2 bg-[#00fcff]"
					showCategory={true}
					showContent={true}
					showPublicationDate={true}
					bgColor="#00fcff"
				/>
				<LatestPost
					URL="/api/blogs/e6f7a8b9-c0d1-2345-6789-0abcdef12345"
					style="md:row-span-2 bg-[#FF94B8]"
					showCategory={true}
					showContent={true}
					showPublicationDate={true}
				/>
				<LatestPost
					URL="/api/blogs/c4d5e6f7-a8b9-0123-4567-890abcdef123"
					style="bg-[#F9EED1]"
					showCategory={false}
					showContent={false}
					showPublicationDate={false}
				/>
				<LatestPost
					URL="/api/blogs/b3c4d5e6-f7a8-9012-3456-7890abcdef12"
					style="bg-[#8bff70]"
					showCategory={false}
					showContent={false}
					showPublicationDate={false}
					bgColor="#8bff70"
				/>
			</div>
		</section>
	);
};

export default Latest;

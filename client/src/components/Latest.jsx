import LatestPost from "./LatestPost";

const Latest = () => {
	return (
		<section>
			<div className="grid grid-cols-[repeat(auto-fit,minmax(min(320px,100%),1fr))] gap-4">
				<LatestPost
					URL="http://localhost:3000/api/blogs/8a1b9c2d-0e3f-4a4b-8c1d-2e3f4a5b6c7d"
					style="col-span-2"
					showCategory={true}
					showContent={true}
					showPublicationDate={true}
					bgColor="00fcff"
				/>
				<LatestPost
					URL="http://localhost:3000/api/blogs/8a1b9c2d-0e3f-4a4b-8c1d-2e3f4a5b6c7d"
					style="row-span-2"
					showCategory={true}
					showContent={true}
					showPublicationDate={true}
					bgColor="fff"
				/>
				<LatestPost
					URL="http://localhost:3000/api/blogs/c4d5e6f7-a8b9-0123-4567-890abcdef123"
					showCategory={false}
					showContent={false}
					showPublicationDate={false}
					bgColor="eee"
				/>
				<LatestPost
					URL="http://localhost:3000/api/blogs/b3c4d5e6-f7a8-9012-3456-7890abcdef12"
					showCategory={false}
					showContent={false}
					showPublicationDate={false}
					bgColor="8bff70"
				/>
			</div>
		</section>
	);
};

export default Latest;

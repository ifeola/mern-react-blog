import useFetchBlogPost from "../hooks/useFetchBlogPosts";
import BlogPost from "./BlogPost";
import ButtonLink from "./ButtonLink";
import SubTitle from "./SubTitle";

const BlogPosts = (props) => {
	const { subtitle, showButton, URL, limit, showDesc, description, path } =
		props;
	const [data, loading, error] = useFetchBlogPost(URL);
	const newLimit = limit >= data.length || limit == 0 ? data.length : limit;
	console.log(newLimit);

	return (
		<section className="py-24">
			<div>
				<div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-14">
					<div>
						<SubTitle style="mb-2 text-2xl">{subtitle}</SubTitle>
						{showDesc && (
							<p className="text-gray-600 text-pretty dark:text-gray-300 max-w-[64ch]">
								{description}
							</p>
						)}
					</div>
					<>
						{showButton && (
							<ButtonLink
								style="bg-primary-green-600 text-text-light hover:bg-primary-green-700 text-gray-200 dark:bg-primary-green-600 dark:hover:bg-primary-green-700 border-primary-green-600 hover:border-primary-green-700"
								path={path}>
								View all
							</ButtonLink>
						)}
					</>
				</div>
				<div>
					{loading ? (
						<h1>Loading</h1>
					) : (
						<ul className="grid gap-6 grid-cols-[repeat(auto-fit,minmax(min(320px,100%),1fr))]">
							{data
								.slice(0, newLimit)
								.map(
									(
										{
											title,
											content,
											category,
											publicationDate,
											author,
											featuredImage,
										},
										id
									) => {
										return (
											<BlogPost
												title={title}
												content={content}
												category={category}
												publicationDate={publicationDate}
												author={author}
												image={featuredImage}
												id={id}
											/>
										);
									}
								)}
						</ul>
					)}
				</div>
			</div>
		</section>
	);
};

export default BlogPosts;

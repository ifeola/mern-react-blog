import ButtonLink from "./ButtonLink";
import SubTitle from "./SubTitle";

const Hero = () => {
	return (
		<section className="min-h-dvh flex items-center justify-center">
			<div className="w-full">
				<SubTitle style="mb-4 text-sm">Blog</SubTitle>
				<h1 className="font-bold text-4xl md:text-6xl text-wrap mb-4 dark:text-white max-w-[40rem]">
					Your Voice. Your Story. Your Space.
				</h1>
				<p className="text-base md:text-lg text-gray-600 text-pretty mb-8 dark:text-gray-300 max-w-[40rem]">
					Share your thoughts, ideas, and passions with the world. Discover
					inspiring stories, connect with like-minded people, and build your own
					corner of the internet — one post at a time.
				</p>
				<ButtonLink
					style="bg-primary-green-600 border-primary-green-600 text-text-light hover:bg-primary-green-700 hover:border-primary-green-700 px-16 py-3 text-gray-200 dark:bg-primary-green-600 dark:border-primary-green-600 dark:hover:bg-primary-green-700 dark:hover:border-primary-green-700"
					path="signup">
					Get Started
				</ButtonLink>
			</div>
		</section>
	);
};

export default Hero;

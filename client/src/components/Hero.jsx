import ButtonLink from "./ButtonLink";
import SubTitle from "./SubTitle";

const Hero = () => {
	return (
		<section className="w-full max-w-[40rem] min-h-dvh flex items-center justify-center">
			<div>
				<SubTitle>Blog</SubTitle>
				<h1 className="font-bold text-4xl md:text-6xl text-wrap my-4 dark:text-white">
					Your Voice. Your Story. Your Space.
				</h1>
				<p className="text-base md:text-lg text-gray-600 text-pretty mb-8 dark:text-gray-300">
					Share your thoughts, ideas, and passions with the world. Discover
					inspiring stories, connect with like-minded people, and build your own
					corner of the internet — one post at a time.
				</p>
				<ButtonLink
					style="bg-gray-950 dark:text-gray-900 border-gray-950 hover:bg-gray-800 px-16 py-3 text-gray-200 dark:bg-primary-green dark:border-primary-green dark:hover:bg-primary-green-400 dark:hover:border-primary-green-400"
					path="signup">
					Get Started
				</ButtonLink>
			</div>
		</section>
	);
};

export default Hero;

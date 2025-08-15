import Button from "./Button";

const Newsletter = () => {
	return (
		<section className="newsletter my-24 [--pattern-fg:_color-mix(in_oklab,_var(--color-black)_10%,_transparent)] dark:[--pattern-fg:_color-mix(in_oklab,_var(--color-white)_10%,_transparent)] border-y border-bg-dark/20 dark:border-bg-light/10">
			<div className="bg-gray-950/10 dark:bg-white/10 p-2 backdrop-blur-lg border-x border-bg-dark/20 dark:border-bg-light/10">
				<div className="grid grid-cols-1 md:grid-cols-2 md:items-center gap-14 md:gap-10 bg-gray-900 py-10 px-4">
					<div>
						<h3 className="text-3xl font-medium text-text-dark text-pretty">
							Stay in the Loop – Join Our Newsletter!
						</h3>
						<p className="text-text-dark/70 mt-4 text-pretty">
							Subscribe to my newsletter and never miss an update! Get the
							latest blog posts, exclusive insights, and useful tips delivered
							straight to your inbox. Join our community today and keep your
							knowledge up to date!
						</p>
					</div>

					<div>
						<form className="flex flex-col md:flex-row md:items-center gap-2">
							<input
								type="email"
								id="helper-text"
								aria-describedby="helper-text-explanation"
								className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								placeholder="name@flowbite.com"
							/>
							<Button style="bg-primary-green-600 text-text-light hover:bg-primary-green-700 text-gray-200 dark:bg-primary-green-600 dark:hover:bg-primary-green-700">
								Subscribe
							</Button>
						</form>
						<span className="text-xs text-text-dark/60 mt-3 block font-medium">
							By clicking Sign Up you're confirming that you agree with our
							Terms and Conditions.
						</span>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Newsletter;

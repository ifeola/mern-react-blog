import { Link } from "react-router";
import { assets } from "../assets/assets";
import Button from "./Button";

const Footer = () => {
	return (
		<div className="bg-gray-950/10 dark:bg-white/10 p-2 backdrop-blur-lg border-x border-bg-dark/20 dark:border-bg-light/10">
			<div className="bg-gray-900 py-14 px-4">
				<div>
					<div className="flex flex-col md:flex-row gap-10 justify-between pb-16">
						<div>
							<div className="flex items-center gap-2 dark:text-white">
								<img src={assets.logo} alt="Logo Image" />
								<span className="font-medium text-lg text-text-dark">
									CrunchyBlog
								</span>
							</div>
							<p className="text-sm text-text-dark/70 my-6 block font-medium">
								Join our newsletter to stay up to date on features and releases.
							</p>
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
						<div className="text-text-dark/70 text-sm grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between w-2/3 gap-10 md:gap-4">
							<ul className="grid gap-3">
								<h5 className="font-medium mb-2">About Us</h5>
								<Link to="popular">Popular</Link>
								<Link to="trending">Trending</Link>
								<Link to="contact">Contact</Link>
								<Link>Support/Help</Link>
								<Link>Request Topics</Link>
							</ul>
							<ul className="grid gap-3">
								<h5 className="font-medium mb-2">Column two</h5>
								<Link>FAQs</Link>
								<Link>Terms & Condition</Link>
								<Link>Support</Link>
								<Link>Link nine</Link>
								<Link>Link ten</Link>
							</ul>
							<ul className="grid gap-3">
								<h5 className="font-medium mb-2">About Us</h5>
								<li>
									<Link>Popular</Link>
								</li>
								<li>
									<Link>Trending</Link>
								</li>
								<li>
									<Link>Contact</Link>
								</li>
								<li>
									<Link>Support/Help</Link>
								</li>
								<li>
									<Link>Request Topics</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="text-text-dark/70 text-xs gap-4 md:gap-0 flex flex-col md:flex-row items-center justify-between border-t border-bg-light/20 pt-6">
					<span>{new Date().getFullYear()} Ddsgnr. All right reserved.</span>
					<ul className="flex items-center justify-center gap-2 md:gap-6 flex-wrap">
						<li>
							<Link className="underline">Privacy Policy</Link>
						</li>
						<li>
							<Link className="underline">Terms of Service</Link>
						</li>
						<li>
							<Link className="underline">Cookies Settings</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Footer;

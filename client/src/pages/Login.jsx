import { Link } from "react-router";
import { Cancel, Github, Google, Password, Person } from "../components/icons";
import Input from "../components/login/Input";

const Login = ({ setShowElement }) => {
	return (
		<section className="fixed inset-0 bg-white/60 dark:bg-bg-dark/60 backdrop-blur-lg min-h-dvh w-full flex items-center justify-center z-[99]">
			<button
				className="absolute top-4 right-4 md:top-10 md:right-10 cursor-pointer border-2 border-black/40 dark:border-border-light/40"
				onClick={() => setShowElement((prevState) => !prevState)}>
				<Cancel style="size-6 md:size-7 text-black dark:text-white opacity-50" />
			</button>
			<div className="w-full md:w-[48%] rounded-sm md:h-[34rem] bg-bg-light dark:bg-gray-950 shadow-xl flex items-center justify-center border border-black/10 dark:border-border-light/20">
				<div className="max-w-[420px] w-full mx-auto p-4">
					<div className="w-full *:w-full">
						<h3 className="font-bold capitalize text-xl text-center mb-4 text-text-light dark:text-text-dark">
							Login
						</h3>
						<p className="text-center text-sm text-gray-500 mb-6">
							Admin Login: Please enter your administrator credentials to access
							the dashboard and manage site content.
						</p>
						<form className="space-y-5">
							<Input placeholder="Username">{<Person />}</Input>
							<Input placeholder="Password">{<Password />}</Input>
							<button
								type="submit"
								className="w-full h-10 cursor-pointer hover:bg-primary-green-600 transition-colors bg-primary-green-700 text-text-dark font-medium rounded-sm">
								Login
							</button>
						</form>
						<div className="flex flex-col space-y-3 mt-6 w-full">
							<span className="uppercase font-medium text-center text-text-light dark:text-gray-200">
								or
							</span>
							<Link className="h-10 border border-border-dark/20 dark:border-border-light/20 rounded-sm flex items-center justify-center gap-2 font-medium text-sm text-text-light dark:text-gray-400">
								<Google />
								<span>Continue with Google</span>
							</Link>
							<Link className="h-10 border border-border-dark/20 dark:border-border-light/20 rounded-sm flex items-center justify-center gap-2 font-medium text-sm text-text-light dark:text-gray-400">
								<Github />
								<span>Continue with Github</span>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Login;

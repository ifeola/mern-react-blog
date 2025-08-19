const Input = ({ children, placeholder }) => {
	return (
		<div className="w-full">
			<label className="input validator flex items-center gap-2 border w-[clamp(12rem,100%,32rem)] px-3 border-border-dark/20 dark:border-border-light/40 rounded-sm first:opacity-50 has-focus:border-border-dark has-focus:first:opacity-75 has-target:border-border-dark has-target:first:opacity-75 dark:first:text-gray-200 dark:has-focus:border-border-light dark:has-focus:first:opacity-75 dark:has-target:border-border-light dark:has-target:first:opacity-75 min-h-10">
				{children}
				<input
					type="text"
					className="appearance-none text-sm w-full bg-transparent border-none outline-none"
					required
					placeholder={placeholder}
					pattern="[A-Za-z][A-Za-z0-9\-]*"
					minLength={3}
					maxLength={30}
					title="Only letters, numbers or dash"
				/>
			</label>
		</div>
	);
};

export default Input;

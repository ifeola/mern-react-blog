const Hamburger = ({ style }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			strokeWidth={1.5}
			stroke="currentColor"
			className={`${style}`}>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
			/>
		</svg>
	);
};

const Cancel = ({ style }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			strokeWidth={1.5}
			stroke="currentColor"
			className={`${style}`}>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M6 18 18 6M6 6l12 12"
			/>
		</svg>
	);
};

const Desktop = () => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			strokeWidth={1.5}
			stroke="currentColor">
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"
			/>
		</svg>
	);
};

const Dark = () => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			strokeWidth={1.5}
			stroke="currentColor">
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
			/>
		</svg>
	);
};

const Light = () => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			strokeWidth={1.5}
			stroke="currentColor">
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
			/>
		</svg>
	);
};

const Facebook = () => {
	return (
		<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M21.5781 17.5L22.2344 13.1875H18.0625V10.375C18.0625 9.15625 18.625 8.03125 20.5 8.03125H22.4219V4.32812C22.4219 4.32812 20.6875 4 19.0469 4C15.625 4 13.375 6.10938 13.375 9.85938V13.1875H9.53125V17.5H13.375V28H18.0625V17.5H21.5781Z"
				fill="black"
			/>
		</svg>
	);
};

const Twitter = () => {
	return (
		<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M25.5156 11.125C26.4531 10.4219 27.2969 9.57812 27.9531 8.59375C27.1094 8.96875 26.125 9.25 25.1406 9.34375C26.1719 8.73438 26.9219 7.79688 27.2969 6.625C26.3594 7.1875 25.2812 7.60938 24.2031 7.84375C23.2656 6.85938 22 6.29688 20.5938 6.29688C17.875 6.29688 15.6719 8.5 15.6719 11.2188C15.6719 11.5938 15.7188 11.9688 15.8125 12.3438C11.7344 12.1094 8.07812 10.1406 5.64062 7.1875C5.21875 7.89062 4.98438 8.73438 4.98438 9.67188C4.98438 11.3594 5.82812 12.8594 7.1875 13.75C6.39062 13.7031 5.59375 13.5156 4.9375 13.1406V13.1875C4.9375 15.5781 6.625 17.5469 8.875 18.0156C8.5 18.1094 8.03125 18.2031 7.60938 18.2031C7.28125 18.2031 7 18.1562 6.67188 18.1094C7.28125 20.0781 9.10938 21.4844 11.2656 21.5312C9.57812 22.8438 7.46875 23.6406 5.17188 23.6406C4.75 23.6406 4.375 23.5938 4 23.5469C6.15625 24.9531 8.73438 25.75 11.5469 25.75C20.5938 25.75 25.5156 18.2969 25.5156 11.7812C25.5156 11.5469 25.5156 11.3594 25.5156 11.125Z"
				fill="black"
			/>
		</svg>
	);
};

const LinkedIn = () => {
	return (
		<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M10.1875 25V10.9844H5.82812V25H10.1875ZM7.98438 9.10938C9.39062 9.10938 10.5156 7.9375 10.5156 6.53125C10.5156 5.17188 9.39062 4.04688 7.98438 4.04688C6.625 4.04688 5.5 5.17188 5.5 6.53125C5.5 7.9375 6.625 9.10938 7.98438 9.10938ZM26.4531 25H26.5V17.3125C26.5 13.5625 25.6562 10.6562 21.25 10.6562C19.1406 10.6562 17.7344 11.8281 17.125 12.9062H17.0781V10.9844H12.9062V25H17.2656V18.0625C17.2656 16.2344 17.5938 14.5 19.8438 14.5C22.0938 14.5 22.1406 16.5625 22.1406 18.2031V25H26.4531Z"
				fill="black"
			/>
		</svg>
	);
};

const LinkIcon = () => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="currentColor">
			<path
				fillRule="evenodd"
				d="M19.902 4.098a3.75 3.75 0 0 0-5.304 0l-4.5 4.5a3.75 3.75 0 0 0 1.035 6.037.75.75 0 0 1-.646 1.353 5.25 5.25 0 0 1-1.449-8.45l4.5-4.5a5.25 5.25 0 1 1 7.424 7.424l-1.757 1.757a.75.75 0 1 1-1.06-1.06l1.757-1.757a3.75 3.75 0 0 0 0-5.304Zm-7.389 4.267a.75.75 0 0 1 1-.353 5.25 5.25 0 0 1 1.449 8.45l-4.5 4.5a5.25 5.25 0 1 1-7.424-7.424l1.757-1.757a.75.75 0 1 1 1.06 1.06l-1.757 1.757a3.75 3.75 0 1 0 5.304 5.304l4.5-4.5a3.75 3.75 0 0 0-1.035-6.037.75.75 0 0 1-.354-1Z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

const Person = () => {
	return (
		<svg
			className="h-[1em] opacity-50"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24">
			<g
				strokeLinejoin="round"
				strokeLinecap="round"
				strokeWidth="2.5"
				fill="none"
				stroke="currentColor">
				<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
				<circle cx="12" cy="7" r="4"></circle>
			</g>
		</svg>
	);
};

const Password = () => {
	return (
		<svg
			className="h-[1em] opacity-50"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24">
			<g
				strokeLinejoin="round"
				strokeLinecap="round"
				strokeWidth="2.5"
				fill="none"
				stroke="currentColor">
				<path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
				<circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
			</g>
		</svg>
	);
};

const Google = () => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="16"
			height="16"
			fill="currentColor"
			class="bi bi-google"
			viewBox="0 0 16 16">
			<path d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z" />
		</svg>
	);
};

const Github = () => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="16"
			height="16"
			fill="currentColor"
			class="bi bi-github"
			viewBox="0 0 16 16">
			<path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
		</svg>
	);
};

export {
	Hamburger,
	Cancel,
	Desktop,
	Dark,
	Light,
	Facebook,
	Twitter,
	LinkedIn,
	LinkIcon,
	Person,
	Password,
	Google,
	Github,
};

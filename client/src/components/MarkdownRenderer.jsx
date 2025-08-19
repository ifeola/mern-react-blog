import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function MarkdownRenderer({ content }) {
	return (
		<article className="prose prose-gray dark:prose-invert max-w-none">
			<ReactMarkdown
				remarkPlugins={[remarkGfm]}
				components={{
					// Open external links in a new tab
					a({ node, ...props }) {
						return <a {...props} target="_blank" rel="noopener noreferrer" />;
					},
					p: ({ node, ...props }) => (
						<p style={{ marginBottom: "16px" }} {...props} />
					),
					h2: ({ node, ...props }) => (
						<h2 className="font-bold text-xl mt-4 mb-1" {...props} />
					),
					ul: ({ node, ...props }) => <ul className="custom-list" {...props} />,
					ol: ({ node, ...props }) => (
						<ol className="custom-ordered-list" {...props} />
					),
					li: ({ node, ...props }) => (
						<li className="list-disc ml-6" {...props} />
					),
					// Code blocks with syntax highlighting
					code({ className, children, ...props }) {
						const match = /language-(\w+)/.exec(className || "");
						const code = String(children).replace(/\n$/, "");
						if (match) {
							return (
								<SyntaxHighlighter
									style={oneDark}
									language={match[1]}
									PreTag="div"
									wrapLongLines
									{...props}>
									{code}
								</SyntaxHighlighter>
							);
						}
						return (
							<code className="px-1 py-0.5 rounded" {...props}>
								{code}
							</code>
						);
					},
					// Optional: make images responsive
					img({ alt, src }) {
						return (
							// eslint-disable-next-line @next/next/no-img-element
							<img alt={alt} src={src} className="rounded-xl w-full h-auto" />
						);
					},
				}}>
				{content}
			</ReactMarkdown>
		</article>
	);
}

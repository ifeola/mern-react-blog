import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

/**
 * MarkdownRenderer
 * Renders Markdown -> HTML with nice typography and code highlighting.
 *
 * Props:
 *  - content: string (Markdown source)
 */
export default function MarkdownRenderer({ content }) {
	return (
		<article className="prose prose-gray dark:prose-invert max-w-none">
			<ReactMarkdown
				remarkPlugins={[remarkGfm]}
				// react-markdown escapes raw HTML by default (safer). If you need to allow raw HTML,
				// also add `rehypeRaw` and a sanitizer like `rehype-sanitize`.
				components={{
					// Open external links in a new tab
					a({ node, ...props }) {
						return <a {...props} target="_blank" rel="noopener noreferrer" />;
					},
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

/*
USAGE EXAMPLE

import MarkdownRenderer from "./MarkdownRenderer";

export default function BlogPost({ post }) {
  return (
    <div className="px-6 py-8">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
      <MarkdownRenderer content={post.content} />
    </div>
  );
}
*/

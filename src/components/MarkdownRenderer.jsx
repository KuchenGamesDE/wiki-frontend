import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/hljs'; // Import the darcula style

import style from './markdown-styles.module.css';

export default function MarkdownRenderer({ markdown }) {
    return (
        <div className="w-full select-text p-3 text-left">
            <ReactMarkdown
                className={style.reactMarkDown}
                children={markdown}
                remarkPlugins={[remarkGfm]}
                components={{
                    code({ node, inline, className, children, ...props }) {
                        const match = /language-(\w+)/.exec(className || '');
                        return !inline && match ? (
                            <SyntaxHighlighter language={match[1]} style={darcula} {...props}>
                                {String(children).replace(/\n$/, '')}
                            </SyntaxHighlighter>
                        ) : (
                            <code className={className} {...props}>
                                {children}
                            </code>
                        );
                    }
                }}
            />
        </div>
    );
}

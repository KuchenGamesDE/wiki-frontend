import MarkdownRenderer from './MarkdownRenderer';
import Navbar from './Navbar';

const content = `
# Uh baby
## Looks like this works...
### Wundervoller test...
- list-1
- list-2

[Link](https://google.com)

\`\`\`js
let x = "asdf";
const a = () => {};
\`\`\`
`;

export default function Content() {
    return (
        <div className="relative w-full ">
            <Navbar />
            <div className="flex flex-col items-center justify-start pt-[70px]">
                <MarkdownRenderer markdown={content} />
            </div>
        </div>
    );
}

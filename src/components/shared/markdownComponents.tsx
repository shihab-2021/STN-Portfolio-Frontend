import { Components } from "react-markdown";
import { FiExternalLink, FiHash } from "react-icons/fi";
import Image from "next/image";
import MarkdownCopyButton from "./MarkdownCopyButton";

interface CodeBlockProps {
  inline?: boolean;
  className?: string;
  children?: React.ReactNode;
}

// Copy button component
// const CopyButton: React.FC<{ text: string }> = ({ text }) => {
//   const [copied, setCopied] = useState(false);

//   const handleCopy = async () => {
//     try {
//       await navigator.clipboard.writeText(text);
//       setCopied(true);
//       setTimeout(() => setCopied(false), 2000);
//     } catch (err) {
//       console.error("Failed to copy:", err);
//     }
//   };

//   return (
//     <button
//       onClick={handleCopy}
//       className="absolute top-3 right-3 p-2 rounded-md bg-white hover:bg-white/90
//                  text-gray-400 hover:text-gray-600 transition-all duration-200 cursor-pointer
//                  opacity-0 group-hover:opacity-100 backdrop-blur-sm"
//       title={copied ? "Copied!" : "Copy code"}
//     >
//       {copied ? <FiCheck size={16} /> : <FiCopy size={16} />}
//     </button>
//   );
// };
const CopyButton: React.FC<{ text: string }> = ({ text }) => (
  <MarkdownCopyButton text={text} />
);

// Header anchor component
const HeaderAnchor: React.FC<{ id?: string }> = ({ id }) => {
  if (!id) return null;

  return (
    <a
      href={`#${id}`}
      className="absolute -left-6 top-1/2 -translate-y-1/2 p-1 rounded-md
                 text-gray-400 hover:text-gray-600 
                 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
      aria-label={`Link to ${id}`}
    >
      <FiHash size={16} />
    </a>
  );
};

// Generate ID from text content
const generateId = (children: React.ReactNode): string => {
  return (
    children
      ?.toString()
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]/g, "") || ""
  );
};

const markdownComponents: Partial<Components> = {
  // Headers with clean hierarchy
  h1: ({ children, id, ...props }) => {
    const headerId = id || generateId(children);
    return (
      <h1
        {...props}
        id={headerId}
        className="group relative mt-16 mb-8 text-4xl font-bold text-gray-900 
                    scroll-mt-20"
      >
        <HeaderAnchor id={headerId} />
        {children}
      </h1>
    );
  },

  h2: ({ children, id, ...props }) => {
    const headerId = id || generateId(children);
    return (
      <h2
        {...props}
        id={headerId}
        className="group relative mt-12 mb-6 pb-3 text-3xl font-semibold 
                   text-gray-900 
                   border-b border-gray-200 
                   scroll-mt-20"
      >
        <HeaderAnchor id={headerId} />
        {children}
      </h2>
    );
  },

  h3: ({ children, id, ...props }) => {
    const headerId = id || generateId(children);
    return (
      <h3
        {...props}
        id={headerId}
        className="group relative mt-10 mb-4 text-2xl font-semibold 
                   text-gray-900  scroll-mt-20"
      >
        <HeaderAnchor id={headerId} />
        {children}
      </h3>
    );
  },

  h4: ({ children, id, ...props }) => {
    const headerId = id || generateId(children);
    return (
      <h4
        {...props}
        id={headerId}
        className="group relative mt-8 mb-3 text-xl font-medium 
                   text-gray-900  scroll-mt-20"
      >
        <HeaderAnchor id={headerId} />
        {children}
      </h4>
    );
  },

  // Clean paragraph styling
  p: ({ children, ...props }) => (
    <p {...props} className="mb-6 leading-7 text-gray-700 ">
      {children}
    </p>
  ),

  // Simple lists
  ul: ({ children, ...props }) => (
    <ul
      {...props}
      className="mb-6 space-y-2 pl-6 list-disc marker:text-gray-400"
    >
      {children}
    </ul>
  ),

  ol: ({ children, ...props }) => (
    <ol
      {...props}
      className="mb-6 space-y-2 pl-6 list-decimal marker:text-gray-400"
    >
      {children}
    </ol>
  ),

  li: ({ children, ...props }) => (
    <li {...props} className="text-gray-700  leading-relaxed">
      {children}
    </li>
  ),

  // Modern code blocks
  code: ({ inline, className, children, ...props }: CodeBlockProps) => {
    const text = String(children).replace(/\n$/, "");
    const language = className?.replace("language-", "") || "";

    if (inline) {
      return (
        <code
          {...props}
          className="px-2 py-1 bg-gray-100  
                     text-gray-800  
                     rounded-md font-mono text-sm"
        >
          {children}
        </code>
      );
    }

    return (
      <div
        className={`group relative my-6 rounded-lg overflow-hidden 
                      border border-gray-200 ${
                        !language && "inline bg-emerald-50"
                      }`}
      >
        {language && (
          <div
            className="flex items-center justify-between px-4 py-3 
                         bg-gray-50  
                         border-b border-gray-200"
          >
            <span className="text-sm font-medium text-gray-600">
              {language}
            </span>
          </div>
        )}
        {language ? (
          <pre
            className="relative overflow-x-auto p-4 
                       bg-gray-100  text-gray-900 
                       font-mono text-sm leading-relaxed"
          >
            <code>{text}</code>
            <CopyButton text={text} />
          </pre>
        ) : (
          <span className="px-1 inline">{text}</span>
        )}
      </div>
    );
  },

  // Clean links
  a: ({ href, children, ...props }) => (
    <a
      {...props}
      href={href}
      className="inline-flex items-center gap-1 text-blue-600  
                 hover:text-blue-800
                 underline underline-offset-2 decoration-blue-300 
                 hover:decoration-blue-500
                 transition-colors duration-200"
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
    >
      {children}
      {href?.startsWith("http") && (
        <FiExternalLink size={14} className="opacity-70" />
      )}
    </a>
  ),

  // Simple blockquotes
  blockquote: ({ children, ...props }) => (
    <blockquote
      {...props}
      className="my-6 pl-6 py-2 border-l-4 border-gray-300  
                 bg-gray-50 rounded-r-md
                 text-gray-700  italic"
    >
      {children}
    </blockquote>
  ),

  // Clean tables
  table: ({ children, ...props }) => (
    <div className="my-8 overflow-x-auto rounded-lg border border-gray-200 ">
      <table {...props} className="w-full">
        {children}
      </table>
    </div>
  ),

  thead: ({ children, ...props }) => (
    <thead {...props} className="bg-gray-50 ">
      {children}
    </thead>
  ),

  th: ({ children, ...props }) => (
    <th
      {...props}
      className="px-6 py-3 text-left font-semibold text-gray-900  
                 border-b border-gray-200 "
    >
      {children}
    </th>
  ),

  td: ({ children, ...props }) => (
    <td
      {...props}
      className="px-6 py-4 text-gray-700 
                 border-b border-gray-100 "
    >
      {children}
    </td>
  ),

  tr: ({ children, ...props }) => (
    <tr {...props} className="hover:bg-gray-50 transition-colors duration-150">
      {children}
    </tr>
  ),

  // Simple images
  img: ({ src, alt, ...props }) => (
    <div className="my-8">
      <Image
        {...props}
        width={500}
        height={500}
        src={(typeof src === "string" && src) || "/assets/blur_bg.png"}
        alt={alt || "Project Image"}
        className="w-full h-auto rounded-lg border border-gray-200 "
      />
      {alt && <p className="mt-2 text-center text-sm text-gray-500 ">{alt}</p>}
    </div>
  ),

  // Simple horizontal rule
  hr: ({ ...props }) => (
    <hr {...props} className="my-12 border-0 h-px bg-gray-200 " />
  ),

  // Text emphasis
  strong: ({ children, ...props }) => (
    <strong {...props} className="font-semibold text-gray-900 ">
      {children}
    </strong>
  ),

  em: ({ children, ...props }) => (
    <em {...props} className="italic">
      {children}
    </em>
  ),
};

export default markdownComponents;

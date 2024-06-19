import { getPostById } from "@/actions/post";
import Markdown from "react-markdown";
import Image from "next/image";
import React from "react";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeHighlight from "rehype-highlight";

const PostIdPage = async ({ params }: { params: { postId: string } }) => {
  const postId = params.postId;

  const post = await getPostById(postId);

  if (!post) {
    return;
  }

  const article = `
# The Wonders of Markdown

Markdown is a lightweight markup language that you can use to add formatting elements to plaintext text documents. Created by John Gruber in 2004, Markdown is now one of the world's most popular markup languages.

## Why Use Markdown?

- **Easy to Learn**: Markdown's syntax is very simple and easy to learn.
- **Readable**: Even without being rendered, Markdown text is still readable.
- **Versatile**: You can use Markdown for everything from notes to articles to books.

## Basic Syntax

Here are some basic elements you can use in Markdown:

1. **Headers**: Use \`#\` for headers.
2. **Bold and Italic**: Use \`**\` or \`__\` for bold and \`*\` or \`_\` for italic.
3. **Lists**: Use \`-\` or \`*\` for unordered lists and numbers for ordered lists.
4. **Links**: Use \`[link text](URL)\` for links.

### Example

Here is a simple example of Markdown:

\`\`\`markdown
# Header 1
## Header 2

- This is a bullet point
- Another bullet point

**This text is bold**

*This text is italic*

[This is a link](https://example.com)
\`\`\`

Markdown is a great way to write and format text quickly and easily.
`;

  return (
    <article className="max-w-5xl mt-8 px-10 flex flex-col gap-2 items-center mx-auto pb-8">
      <h1 className="font-heading text-3xl text-center">{post.title}</h1>
      <p className="text-center text-gray-500">
        Written by{" "}
        <span className="font-semibold text-black">{post.user.username}</span>
      </p>
      <div className="w-full h-[22rem] rounded-md relative mt-4">
        <Image
          src={post.imageUrl}
          alt="Post Image"
          fill
          className="object-cover rounded-md"
        />
      </div>
      <div className="mt-8">
        <Markdown
          remarkPlugins={[[remarkGfm]]}
          rehypePlugins={[rehypeRaw, rehypeHighlight]}
          className="prose"
        >
          {post.content}
        </Markdown>
      </div>
    </article>
  );
};

export default PostIdPage;

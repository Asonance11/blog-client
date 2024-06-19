import { getPostById } from "@/actions/post";
import Markdown from "markdown-to-jsx";
import Image from "next/image";
import React from "react";
import { PreBlock } from "@/lib/syntaxhighlight";

const PostIdPage = async ({ params }: { params: { postId: string } }) => {
  const postId = params.postId;

  const post = await getPostById(postId);

  if (!post) {
    return;
  }

  const article = `
# Understanding the Basics of JavaScript

JavaScript is a versatile and powerful programming language that is essential for modern web development. It allows you to create dynamic and interactive web pages by manipulating the HTML and CSS of a website.

## Why Learn JavaScript?

- **Widely Used**: JavaScript is used by the majority of websites and is a critical skill for web developers.
- **Versatile**: It can be used for both front-end and back-end development.
- **Community Support**: There is a vast amount of resources and a large community to help you learn.

## Basic Syntax

Here are some basic elements you can use in JavaScript:

1. **Variables**: Use \`let\`, \`const\`, or \`var\` to declare variables.
2. **Functions**: Functions are blocks of code that perform a specific task.
3. **Loops**: Use \`for\`, \`while\`, or \`do...while\` to perform repetitive tasks.
4. **Conditionals**: Use \`if\`, \`else if\`, and \`else\` to perform different actions based on different conditions.

### Example

Here is a simple example of JavaScript code:

\`\`\`javascript
// Declare a variable
let greeting = "Hello, World!";

// Function to display a greeting
function displayGreeting(message) {
  console.log(message);
}

// Call the function
displayGreeting(greeting);

// Loop through numbers 1 to 5
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
\`\`\`

## Understanding Functions

Functions are fundamental in JavaScript. They allow you to encapsulate code into reusable blocks. Here is an example of a function that adds two numbers:

\`\`\`javascript
function add(a, b) {
  return a + b;
}

let result = add(2, 3);
console.log(result); // Outputs: 5
\`\`\`

## Using Loops

Loops help you to perform repetitive tasks efficiently. For example, if you want to print numbers from 1 to 10, you can use a loop:

\`\`\`javascript
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
\`\`\`

## Conclusion

JavaScript is a powerful language that is essential for anyone looking to build modern web applications. By understanding the basics, you can start creating dynamic and interactive web pages. Happy coding!
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
        <Markdown options={{ overrides: { pre: PreBlock } }} className="prose">
          {article}
        </Markdown>
      </div>
    </article>
  );
};

export default PostIdPage;

import { getPostById } from "@/actions/post";
import { PreBlock } from "@/lib/syntaxhighlight";
import Markdown from "markdown-to-jsx";
import Image from "next/image";
import React from "react";

const PostIdPage = async ({ params }: { params: { postId: string } }) => {
  const postId = params.postId;

  const post = await getPostById(postId);

  if (!post) {
    return;
  }

  return (
    <article className="max-w-5xl mt-8 px-10 flex flex-col gap-2 items-center mx-auto">
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
      <div>
        <Markdown options={{ overrides: { pre: PreBlock } }}>
          {post.content!}
        </Markdown>
      </div>
    </article>
  );
};

export default PostIdPage;

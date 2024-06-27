import { getPostById } from "@/actions/api";
import Image from "next/image";
import React from "react";
import { PreBlock } from "@/lib/syntaxhighlight";
import Editor from "@/components/Editor";

const PostIdPage = async ({ params }: { params: { postId: string } }) => {
  const postId = params.postId;

  const post = await getPostById(postId);

  if (!post) {
    return;
  }

  return (
    <article className="max-w-4xl mt-8 px-10 flex flex-col gap-2 items-center mx-auto pb-8">
      <h1 className="font-heading text-3xl text-center">{post.title}</h1>
      <p className="text-center text-gray-500">
        Written by{" "}
        <span className="font-semibold text-black">{post.user.username}</span>
      </p>
      <div className="w-full h-40 lg:h-56 rounded-lg relative mt-4">
        <Image
          src={post.imageUrl}
          alt="Post Image"
          fill
          className="object-cover rounded-lg"
        />
      </div>
      <div className="mt-8">
        <Editor initialContent={post.content} editable={false} />
      </div>
    </article>
  );
};

export default PostIdPage;

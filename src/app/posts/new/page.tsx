"use client";

import { createPost } from "@/actions/api";
import FileUpload from "@/components/FileUpload";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Block } from "@blocknote/core";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Editor = dynamic(() => import("@/components/Editor"), { ssr: false });

const CreateNewPostPage = () => {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [content, setContent] = useState<Block[]>([]);
  const [loading, setLoading] = useState(false);

  const onChangeBlocks = (newContent: any) => {
    setContent(newContent);
  };

  const onChangeImageUrl = (value?: string) => {
    setImageUrl(value!);
  };

  const savePost = async (published: boolean) => {
    const newPost = await createPost({
      title,
      description,
      imageUrl,
      content: JSON.stringify(content), // This should become a string
      published,
    });

    // TODO: Make this route to the post ID route

    if (newPost) {
      router.push("/");
    }
  };

  const saveDraft = async () => {
    try {
      setLoading(true);
      await savePost(false);
    } catch (error) {
      console.log("Error Creating Post", error);
    } finally {
      setLoading(false);
    }
  };

  const publishPost = async () => {
    try {
      setLoading(true);
      await savePost(true);
    } catch (error) {
      console.log("Error Creating Post", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="flex flex-col max-w-2xl p-8 mx-auto mt-4">
      <form className="flex flex-col space-y-4">
        <div>
          <Input
            placeholder="Title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            disabled={loading}
          />
        </div>
        <div>
          <Input
            placeholder="Description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            disabled={loading}
          />
        </div>
        <FileUpload value={imageUrl} onChange={onChangeImageUrl} />
        <div className="py-2 rounded-lg min-h-96 border-2 border-black">
          <Editor onChange={onChangeBlocks} editable={true} />{" "}
        </div>

        <div className="flex items-center justify-end gap-x-4">
          <Button
            disabled={loading}
            variant="neutral"
            onClick={saveDraft}
            type="button"
          >
            Save Draft
          </Button>
          <Button
            disabled={loading}
            variant="noShadow"
            onClick={publishPost}
            type="button"
          >
            Publish Post
          </Button>
        </div>
      </form>
    </section>
  );
};

export default CreateNewPostPage;

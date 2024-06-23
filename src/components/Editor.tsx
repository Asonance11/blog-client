"use client";
import { BlockNoteView } from "@blocknote/mantine";
import { useCreateBlockNote } from "@blocknote/react";
import "@blocknote/mantine/style.css";
import "@blocknote/core/fonts/inter.css";
import { PartialBlock } from "@blocknote/core";
import { uploadFiles } from "@/utils/uploadthing";

interface EditorProps {
  onEditorChange?: (value: any) => void;
  initialContent?: any;
  editable?: boolean;
}

const Editor: React.FC<EditorProps> = ({
  onEditorChange,
  initialContent,
  editable,
}) => {
  const onChange = async () => {
    const html = await editor.blocksToHTMLLossy(editor.document);
    //@ts-ignore
    if (onEditorChange) {
      onEditorChange(editor.document);
    }
  };

  const editor = useCreateBlockNote({
    initialContent: initialContent
      ? (JSON.parse(initialContent) as PartialBlock[])
      : undefined,
    uploadFile: async (file: File) => {
      const [res] = await uploadFiles("imageUploader", { files: [file] });
      return res.url;
    },
  });

  return (
    <BlockNoteView
      editable={editable}
      editor={editor}
      theme="light"
      onChange={onChange}
    />
  );
};

export default Editor;

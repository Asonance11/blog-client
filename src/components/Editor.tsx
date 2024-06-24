"use client";
import { BlockNoteView } from "@blocknote/mantine";
import { useCreateBlockNote } from "@blocknote/react";
import "@blocknote/mantine/style.css";
import "@blocknote/core/fonts/inter.css";
import { uploadFiles } from "@/utils/uploadthing";
import { BlockNoteEditor, PartialBlock } from "@blocknote/core";
import { useCallback, useEffect } from "react";

interface EditorProps {
  onChange?: (value: any) => void;
  initialContent?: string;
  editable?: boolean;
}

const Editor: React.FC<EditorProps> = ({
  onChange,
  initialContent,
  editable,
}) => {
  const onEditorChange = () => {
    if (onChange) {
      onChange(editor.document);
    }
  };

  const editor: BlockNoteEditor = useCreateBlockNote({
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
      onChange={onEditorChange}
    />
  );
};

export default Editor;

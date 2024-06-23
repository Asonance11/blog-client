import { UploadButton } from "@/utils/uploadthing";
import { X } from "lucide-react";
import Image from "next/image";
import React from "react";

interface FileUploadProps {
  value: string;
  onChange: (url?: string) => void;
}

const FileUpload = ({ value, onChange }: FileUploadProps) => {
  if (value) {
    return (
      <div className="relative h-40 w-full rounded-lg">
        <Image
          src={value}
          alt="Upload Image"
          fill
          className="object-cover rounded-lg"
        />
        <button
          onChange={() => onChange("")}
          className="bg-rose-500 text-white p-1 rounded-full absolute top-0 right-0 shadow-sm"
          type="button"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    );
  }

  return (
    <UploadButton
      endpoint="imageUploader"
      onClientUploadComplete={(res) => {
        onChange(res?.[0].url);
      }}
      onUploadError={(error: Error) => {
        console.log(error);
      }}
    />
  );
};

export default FileUpload;

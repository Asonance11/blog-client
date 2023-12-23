import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

interface Props {
	content: string;
	setContent: React.Dispatch<React.SetStateAction<string>>;
}
const TextEditor = ({ content, setContent }: Props) => {
	return <ReactQuill theme="snow" value={content} onChange={setContent} />;
};

export default TextEditor;

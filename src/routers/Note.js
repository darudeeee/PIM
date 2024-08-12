import MDEditor, { selectWord } from "@uiw/react-md-editor";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import React from "react";

const mkdStr = `

`;

const Note = () => {
  const [value, setValue] = React.useState(mkdStr);
  return (
    <>
	{/* https://uiwjs.github.io/react-md-editor/ */}
	{/* 모바일일땐 미리보기 버튼이나 슬라이드(에디터/프리뷰) */}
	{/* 웹 버전 디자인 + 저장버튼, 취소버튼 등등 */}
      <h3>Note</h3>
      <div data-color-mode="light">
        <MDEditor height={200} value={value} onChange={setValue} />
      </div>
    </>
  );
};

export default Note;

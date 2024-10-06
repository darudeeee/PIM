import { useEffect, useState } from "react";
import MDEditor from "@uiw/react-md-editor";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import React from "react";
import "swiper/css";
import "swiper/css/scrollbar";
import { Scrollbar } from "swiper/modules";
import SwiperCore from "swiper";
import Button from "@mui/material/Button";

const mkdStr = `Content...`;

const Note = () => {
  const [title, setTitle] = useState("");

  SwiperCore.use([Scrollbar]);
  let deviceWidth = window.innerWidth;
  const [isMobile, setIsMobile] = useState(deviceWidth <= 1200);

  const [heights, setHeight] = useState(0);
  useEffect(() => {
    setHeight(document.getElementById("header").offsetHeight);
  }, []);

  window.addEventListener("resize", function () {
    setIsMobile(window.innerWidth <= 1200);
  });

  const [value, setValue] = React.useState(mkdStr);
  return (
    <>
      {/* https://uiwjs.github.io/react-md-editor/ */}
      {/* 웹 버전 디자인 + 저장버튼, 취소버튼 등등 */}

      <div
        id="note"
        style={{
          display: "flex",
          flexDirection: "column",
          height: `calc(100% - ${heights}px)`,
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            width: "90%",
            height: "70px",
          }}
        >
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            style={{
              padding: "10px",
              width: "60%",
              border: "1px solid #ccc",
              borderRadius: "4px",
              fontSize: "20px",
            }}
          />
          <Button
            variant="contained"
            style={{ backgroundColor: "lightgreen", marginLeft: "10px" }}
          >
            Save
          </Button>
        </div>
        <div class="live" data-color-mode="light">
          <MDEditor class="markdown" value={value} onChange={setValue} />
        </div>
      </div>
    </>
  );
};

export default Note;

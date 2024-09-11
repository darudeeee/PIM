import moment from "moment";
import { useEffect, useState } from "react";
import MDEditor, { selectWord } from "@uiw/react-md-editor";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import React from "react";
import "swiper/css";
import "swiper/css/scrollbar";
import { Scrollbar } from "swiper/modules";
import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import ReactMarkdown from "react-markdown";

const mkdStr = `노트 초기 내용`;

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
      {!isMobile ? (
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
              placeholder="제목을 입력하세요."
              style={{
                padding: "8px",
                width: "60%",
                border: "1px solid #ccc",
                borderRadius: "4px",
              }}
            />
          </div>
          <div class="live" data-color-mode="light">
            <MDEditor class="markdown" value={value} onChange={setValue} />
          </div>
        </div>
      ) : (
        // 모바일은 그냥 메뉴를 없애고 search에서만 가능하게?
        <div
          style={{
            display: "flex",
            height: `calc(100% - ${heights}px)`,
            width: "100%",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              height: "100%",
              width: "100%",
              flexDirection: "column",
            }}
          >
            <Swiper
              scrollbar={{
                hide: false,
              }}
              modules={[Scrollbar]}
              className="mySwiper"
            >
              {/* <SwiperSlide>
		  	<MDEditor value={value} onChange={setValue} />
		  </SwiperSlide> */}
              <SwiperSlide>
                <h4 style={{ margin: "20px 5%" }}>
                  여기에 나중에 모바일 조회 했을때 노트 제목
                </h4>
                <div
                  className="markdown-preview"
                  style={{
                    width: "90%",
                    height: "80%",
                    margin: "0 5%",
                    border: "1px solid #000",
                  }}
                >
                  <ReactMarkdown>{value}</ReactMarkdown>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      )}
    </>
  );
};

export default Note;

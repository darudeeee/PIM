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

const mkdStr = `노트 초기 내용`;

const Note = () => {
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
      {/* 모바일일땐 미리보기 버튼이나 슬라이드(에디터/프리뷰) */}
      {/* 웹 버전 디자인 + 저장버튼, 취소버튼 등등 */}
      {!isMobile ? (
        <div id="note"
          style={{
            display: "flex",
            height: `calc(100% - ${heights}px)`,
            width: "100%",
          }}
        >
          <div data-color-mode="light">
            <MDEditor height={200} value={value} onChange={setValue} />
          </div>
        </div>
      ) : (
		// 슬라이드로 할건지, 미리보기 버튼을 만들건지 고민 해야됨
        <Swiper
          scrollbar={{
            hide: false,
          }}
          modules={[Scrollbar]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div>
              slide1
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              slide2
            </div>
          </SwiperSlide>
        </Swiper>
      )}
    </>
  );
};

export default Note;

import { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";

const MyPage = () => {
  // React Avatar
  // https://mui.com/material-ui/react-avatar/
  let deviceWidth = window.innerWidth;
  const [isMobile, setIsMobile] = useState(deviceWidth <= 1200);

  const [heights, setHeight] = useState(0); // return값 안에 초기값 지정
  useEffect(() => {
    setHeight(document.getElementById("header").offsetHeight);
  }, []);

  window.addEventListener("resize", function () {
    setIsMobile(window.innerWidth <= 1200); // 크기 감지만 해줌
  });

  return (
    <>
      {!isMobile ? (
        <div
          style={{
            display: "flex",
            height: `calc(100% - ${heights}px)`,
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "100%",
            }}
          >
            <div
              id="propileBox"
              style={{
                width: "100%",
                height: "30%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Avatar
                sx={{ width: "100px", height: "100px" }}
                src="/broken-image.jpg"
              />
              <h2>이름</h2>
            </div>
            <div
              id="propilInfo"
              style={{
                width: "60%",
                display: "flex",
                alignItems: "center",
                border: "1px solid #000",
              }}
            >
              <div
                style={{
                  width: "20%",
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                글씨
              </div>
              <div
                style={{
                  width: "80%",
                  display: "flex",
                  justifyContent: "flex-start",
                }}
              >
                <input></input>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            height: `calc(100% - ${heights}px)`,
            width: "100%",
          }}
        >
          모바일임
        </div>
      )}
    </>
  );
};

export default MyPage;

import moment from "moment";
import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { convertDateToStr } from "../component/CommonFuntion";
import ScheduleData from "../data/ScheduleData";
import "swiper/css";
import "swiper/css/scrollbar";
import { Scrollbar } from "swiper/modules";
import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Menstruation = () => {
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

  const curDate = new Date(); // 현재 날짜
  const [value, onChange] = useState(curDate); // 클릭한 날짜 (초기값으로 현재 날짜 넣어줌)

  
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
          <div style={{display: "flex", flexDirection: "column", width: "100%"}}>
          <div
            style={{
              backgroundColor: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
              height: "20%",
              width: "100%",
            }}
          >
            <Card
              sx={{
                display: "flex",
                height: "70%",
                width: "22%",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "10%",
              }}
            >
              예정일
            </Card>
            <Card
              sx={{
                display: "flex",
                height: "70%",
                width: "22%",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "10%",
              }}
            >
              평균 주기
            </Card>
            <Card
              sx={{
                display: "flex",
                height: "70%",
                width: "22%",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "10%",
              }}
            >
              배란일
            </Card>
            <Card
              sx={{
                display: "flex",
                height: "70%",
                width: "22%",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "10%",
              }}
            >
              가임기
            </Card>
          </div>
          <div id="calendar">
          <Calendar
              locale="en"
              onChange={onChange}
              value={value}
              next2Label={null}
              prev2Label={null}
              formatDay={(locale, date) => moment(date).format("D")}
              // tileContent={addContent}
              showNeighboringMonth={false}
            />
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
        ></div>
      )}
    </>
  );
};

export default Menstruation;

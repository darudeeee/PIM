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

const Home = () => {
  SwiperCore.use([Scrollbar]);
  let deviceWidth = window.innerWidth;
  const [isMobile, setIsMobile] = useState(deviceWidth <= 1200);

  const curDate = new Date(); // 현재 날짜
  const [value, onChange] = useState(curDate); // 클릭한 날짜 (초기값으로 현재 날짜 넣어줌)

  // 각 날짜 타일에 컨텐츠 추가
  const addContent = ({ date }) => {
    // 해당 날짜(하루)에 추가할 컨텐츠의 배열
    const contents = [];
    // date(각 날짜)가  리스트의 날짜와 일치하면 해당 컨텐츠(이모티콘) 추가
    if (
      ScheduleData.find(
        (day) =>
          convertDateToStr(day.start) === moment(date).format("YYYY-MM-DD")
      )
    ) {
      contents.push(
        <>
          <div
            className="dot"
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              backgroundColor: "#009fb1",
              marginTop: "7px",
            }}
          ></div>
        </>
      );
    }
    return <div>{contents}</div>; // 각 날짜마다 해당 요소가 들어감
  };

  const [heights, setHeight] = useState(0); // return값 안에 초기값 지정
  useEffect(() => {
    // 렌더링 되면 값 지정
    setHeight(document.getElementById("header").offsetHeight);
  }, []); // [] : 초기 1번만 렌더링
  // []에 변수를 넣으면 변수가 바뀔 때마다 렌더링
  // []를 빼면 상태가 바뀔 때마다 렌더링(ex. 클릭 1번 마다 렌더링)
  // height, width 가져오는 방식들 : https://apost.dev/706/

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
          <div id="calendar">
            <Calendar
              locale="en"
              onChange={onChange}
              value={value}
              next2Label={null}
              prev2Label={null}
              formatDay={(locale, date) => moment(date).format("D")}
              tileContent={addContent}
              showNeighboringMonth={false}
            />
          </div>
          <div>
            <div>test1</div>
            <div>test2</div>
            <div>test3</div>
          </div>
        </div>
      ) : (
        <>
          <Swiper
            scrollbar={{
              hide: false,
            }}
            modules={[Scrollbar]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div
                style={{
                  display: "flex",
                  height: `calc(100% - ${heights}px)`,
                  width: "100%",
                }}
              >
                <div id="miniCalendar">
                  <Calendar
                    locale="en"
                    onChange={onChange}
                    value={value}
                    next2Label={null}
                    prev2Label={null}
                    formatDay={(locale, date) => moment(date).format("D")}
                    tileContent={addContent}
                    showNeighboringMonth={false}
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <div>test1</div>
                <div>test2</div>
                <div>test3</div>
              </div>
            </SwiperSlide>
          </Swiper>
        </>
      )}
    </>
  );
};

export default Home;

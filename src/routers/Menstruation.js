import moment from "moment";
import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import { convertDateToStr } from "../component/CommonFuntion";
import "react-calendar/dist/Calendar.css";
import "swiper/css";
import "swiper/css/scrollbar";
import { Scrollbar } from "swiper/modules";
import SwiperCore from "swiper";
import Card from "@mui/material/Card";
import "swiper/css";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import MenstruationData from "../data/MenstruationData";
import FavoriteIcon from '@mui/icons-material/Favorite';

// 1. 생리 시작일 입력 가능하도록(웹, 모바일)
// 2. 데이터 RCUD 로직 만들기

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

  const addStart = ({ date }) => {
    const contents = [];

    if (
      MenstruationData.find(
        (day) =>
          convertDateToStr(day.start) === moment(date).format("YYYY-MM-DD")
      )
    ) {
      contents.push(
        <>
          <div className="heart">
            {
              <FavoriteIcon
                sx={{
                  width: "15px",
                  height: "15px",
                  color: "#d36d7e",
                  marginTop: "7px",
                }}
              />
            }
          </div>
        </>
      );
    }
    return <div>{contents}</div>; // 각 날짜마다 해당 요소가 들어감
  };

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
          <div id="menstruationCalendar">
            <Calendar
              locale="en"
              onChange={onChange}
              value={value}
              next2Label={null}
              prev2Label={null}
              formatDay={(locale, date) => moment(date).format("D")}
              tileContent={addStart}
              showNeighboringMonth={false}
            />
          </div>
          <div
            style={{
              backgroundColor: "white",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              width: "30%",
            }}
          >
            <Card
              sx={{
                display: "flex",
                height: "16%",
                width: "95%",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "10%",
              }}
            >
              Expectd Date
            </Card>
            <Card
              sx={{
                display: "flex",
                height: "16%",
                width: "95%",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "10%",
              }}
            >
              Average Cycle
            </Card>
            <Card
              sx={{
                display: "flex",
                height: "16%",
                width: "95%",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "10%",
              }}
            >
              Ovulation Period
            </Card>
            <Card
              sx={{
                display: "flex",
                height: "16%",
                width: "95%",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "10%",
              }}
            >
              Fertile Window
            </Card>
          </div>
        </div>
      ) : (
        <div
          id="menstruationMiniCalendar"
          style={{
            display: "flex",
            height: `calc(100% - ${heights}px)`,
            width: "100%",
          }}
        >
          <Swiper
            scrollbar={{
              hide: false,
            }}
            modules={[Scrollbar]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div id="homeMiniCalendar">
                <Calendar
                  locale="en"
                  onChange={onChange}
                  value={value}
                  next2Label={null}
                  prev2Label={null}
                  formatDay={(locale, date) => moment(date).format("D")}
                  tileContent={addStart}
                  showNeighboringMonth={false}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                style={{
                  backgroundColor: "white",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                  width: "100%",
                  height: "100%",
                }}
              >
                <Card
                  sx={{
                    display: "flex",
                    height: "20%",
                    width: "90%",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "10%",
                  }}
                >
                  Expected Date
                </Card>

                <Card
                  sx={{
                    display: "flex",
                    height: "20%",
                    width: "90%",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "10%",
                  }}
                >
                  Average Cycle
                </Card>

                <Card
                  sx={{
                    display: "flex",
                    height: "20%",
                    width: "90%",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "10%",
                  }}
                >
                  Ovulation Period
                </Card>

                <Card
                  sx={{
                    display: "flex",
                    height: "20%",
                    width: "90%",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "10%",
                  }}
                >
                  Fertile Window
                </Card>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      )}
    </>
  );
};

export default Menstruation;

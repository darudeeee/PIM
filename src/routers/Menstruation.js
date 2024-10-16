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
import FavoriteIcon from "@mui/icons-material/Favorite";

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

  //   const curDate = new Date(); // 현재 날짜
  //   const [value, onChange] = useState(curDate); // 클릭한 날짜 (초기값으로 현재 날짜 넣어줌)

  const [data, setData] = useState(MenstruationData);

  const [start, setStart] = useState();
  const [end, setEnd] = useState();

  function getDatesStartToLast(startDate, lastDate) {
    // 두 날짜 사이 모든 날짜
    var regex = RegExp(/^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/);
    if (!(regex.test(startDate) && regex.test(lastDate)))
      return "Not Date Format";
    var result = [];
    var curDate = new Date(startDate);
    while (curDate <= new Date(lastDate)) {
      result.push(curDate.toISOString().split("T")[0]);
      curDate.setDate(curDate.getDate() + 1);
    }
    return result;
  }

  const getContent = ({ date }) => { // 모든? 각 타일의 날짜
    const contents = [];

    if (
      data.find((item) =>
        getDatesStartToLast(
          convertDateToStr(item.start), // 랑
          convertDateToStr(item.end) // 사이의
        ).includes(moment(date).format("YYYY-MM-DD")) // 날짜를 포함
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
              // onChange={onChange}
              // value={value}
              next2Label={null}
              prev2Label={null}
              formatDay={(locale, date) => moment(date).format("D")}
              tileContent={getContent}
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
                  // onChange={onChange}
                  // value={value}
                  next2Label={null}
                  prev2Label={null}
                  formatDay={(locale, date) => moment(date).format("D")}
                  tileContent={getContent}
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

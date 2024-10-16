import FavoriteIcon from "@mui/icons-material/Favorite";
import Card from "@mui/material/Card";
import moment from "moment";
import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/scrollbar";
import { Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { convertDateToStr } from "../component/CommonFuntion";
import MenstruationData from "../data/MenstruationData";
import { avatarGroupClasses } from "@mui/material";

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

  const [data, setData] = useState(MenstruationData);

  const [start, setStart] = useState(null);
  const [end, setEnd] = useState(null);

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

  const getContent = ({ date }) => {
    // 모든? 각 타일의 날짜
    const contents = [];

    if (
      data.find(
        (item) =>
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

  const onChange = (e) => {
    if (start == null) {
      setStart(e);
      var date = new Date(e.getFullYear(), e.getMonth(), e.getDate() + 4);

      let arrData = {
        id: data.length, // 기존 0부터 시작하는 배열 뒤에 붙일 거라서
        start: e,
        end: date,
        period: 5,
        avgCycle: 0,
        expectedDate: null,
        fertileStart: null,
        fertileEnd: null,
      };

      setData((prev) => [
        // setData
        ...prev, // 기존에 있던 내용
        arrData, // 뒤에 새로운 내용
      ]);
    } else {
      // start가 event(end)보다 과거가 아닐 시
      if (start <= e == false) {
        // useState로 셋팅한 것은 함수가 끝나야 사용 가능해서 e로 해야됨
        alert("test");
      } else {
        setEnd(e);
        const newData = data.map((item, index) => {
          if (index == data.length - 1) {
            // 이미 데이터 1개 null값과 같이 추가됨 -1(기존 하던 데이터)
            let arrData = {
              id: item.id, // 기존 0부터 시작하는 배열 뒤에 붙일 거라서
              start: item.start,
              //데이터 변환
              end: e,
              period: getDatesStartToLast(
                convertDateToStr(item.start),
                convertDateToStr(e)
              ).includes(moment(date).format("YYYY-MM-DD")).length, // 의 일 수 ex) 5 = length??
              avgCycle: data
                .filter((item) => item.avgCycle !== 0)
                .map((item) => {
                  // avgCycle += item / item.length;
                }),
              expectedDate: e + avgCycle,
              fertileStart: expectedDate - 17,
              fertileEnd: expectedDate - 11,
            };
            return arrData;
          } else {
            return item;
          }
        });
        setData(newData);
      }
    }
  };

  console.log(data);
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
                  onChange={onChange}
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

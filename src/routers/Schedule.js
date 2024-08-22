import moment from "moment";
import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { convertDateToStr } from "../component/CommonFuntion";
import ScheduleData from "../data/ScheduleData";

const Schedule = () => {
  let deviceWidth = window.innerWidth;
  const [isMobile, setIsMobile] = useState(deviceWidth <= 1200);

  const [heights, setHeight] = useState(0); // return값 안에 초기값 지정
  useEffect(() => {
    // 렌더링 되면 값 지정
    setHeight(document.getElementById("header").offsetHeight);
  }, []); // [] : 초기 1번만 렌더링
  // []에 변수를 넣으면 변수가 바뀔 때마다 렌더링
  // []를 빼면 상태가 바뀔 때마다 렌더링(ex. 클릭 1번 마다 렌더링)
  // height, width 가져오는 방식들 : https://apost.dev/706/

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

  const [schedules, setSchedules] = useState([]);
  const [newSchedule, setNewSchedule] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [editSchedule, setEditSchedule] = useState("");

  const addSchedule = () => {
    if (newSchedule.trim() === "") return;
    setSchedules([...schedules, newSchedule]);
    setNewSchedule("");
  };

  const startEdit = (index) => {
    setEditIndex(index);
    setEditSchedule(schedules[index]);
  };

  const saveEdit = () => {
    if (editSchedule.trim() === "") return;
    const updatedSchedules = schedules.map((schedule, i) =>
      i === editIndex ? editSchedule : schedule
    );
    setSchedules(updatedSchedules);
    setEditIndex(null);
    setEditSchedule("");
  };

  const deleteSchedule = (index) => {
    setSchedules(schedules.filter((_, i) => i !== index));
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
          <div
            id="calendar"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "70%",
              height: "100%",
            }}
          >
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
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "30%",
              height: "100%",
              backgroundColor: "#fff",
            }}
          >
            <div
              id="schedule"
              style={{
                width: "80%",
                height: "80%",
                border: "3px solid #009fb1",
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)",
              }}
            >
              <h2 style={{ display: "flex", justifyContent: "center" }}>
                Today's Schedule
              </h2>
              <div
                id="addSchedule"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <input
                  type="text"
                  value={newSchedule}
                  onChange={(e) => setNewSchedule(e.target.value)}
                  placeholder="Enter a new schedule"
                  style={{
                    margin: "5px",
                    padding: "10px",
                    width: "300px",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                  }}
                />
                <button
                  onClick={addSchedule}
                  style={{
                    padding: "10px 15px",
                    border: "none",
                    borderRadius: "4px",
                    backgroundColor: "#009fb1",
                    color: "white",
                    cursor: "pointer",
                    margin: "5px",
                  }}
                  onMouseOver={(e) =>
                    (e.target.style.backgroundColor = "#047f8d")
                  }
                  onMouseOut={(e) =>
                    (e.target.style.backgroundColor = "#009fb1")
                  }
                >
                  Add
                </button>
              </div>

              <h2 style={{ display: "flex", justifyContent: "center" }}>
                Schedule List
              </h2>
              <ul
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  marginLeft: "5%",
                  listStyleType: "none",
                  padding: "0",
                }}
              >
                {schedules.map((schedule, index) => (
                  <li key={index} style={{ margin: "10px 0" }}>
                    {editIndex === index ? (
                      <div>
                        <input
                          type="text"
                          value={editSchedule}
                          onChange={(e) => setEditSchedule(e.target.value)}
                          style={{
                            margin: "5px",
                            padding: "10px",
                            width: "300px",
                            border: "1px solid #ccc",
                            borderRadius: "4px",
                          }}
                        />
                        <button
                          onClick={saveEdit}
                          style={{
                            padding: "10px 15px",
                            border: "none",
                            borderRadius: "4px",
                            backgroundColor: "#c5eaf7",
                            color: "white",
                            cursor: "pointer",
                            margin: "5px",
                          }}
                          onMouseOver={(e) =>
                            (e.target.style.backgroundColor = "#7ab8cd")
                          }
                          onMouseOut={(e) =>
                            (e.target.style.backgroundColor = "#c5eaf7")
                          }
                        >
                          save
                        </button>
                        <button
                          onClick={() => deleteSchedule(index)}
                          style={{
                            padding: "10px 15px",
                            border: "none",
                            borderRadius: "4px",
                            backgroundColor: "#fda39e",
                            color: "white",
                            cursor: "pointer",
                            margin: "5px",
                          }}
                          onMouseOver={(e) =>
                            (e.target.style.backgroundColor = "#df7d77")
                          }
                          onMouseOut={(e) =>
                            (e.target.style.backgroundColor = "#fda39e")
                          }
                        >
                          Delete
                        </button>
                      </div>
                    ) : (
                      <span>{schedule}</span>
                    )}

                    {editIndex === null && (
                      <button
                        onClick={() => startEdit(index)}
                        style={{
                          padding: "10px 15px",
                          border: "none",
                          borderRadius: "4px",
                          backgroundColor: "#c5eaf7",
                          color: "white",
                          cursor: "pointer",
                          margin: "5px",
                        }}
                        onMouseOver={(e) =>
                          (e.target.style.backgroundColor = "#7ab8cd")
                        }
                        onMouseOut={(e) =>
                          (e.target.style.backgroundColor = "#c5eaf7")
                        }
                      >
                        Edit
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div
            style={{
              display: "flex",
              height: `calc(100% - ${heights}px)`,
              width: "100%",
            }}
          >
            <div id="miniCalendar" style={{ width: "100%", height: "100%" }}>
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
        </>
      )}
    </>
  );
};

export default Schedule;

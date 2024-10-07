import moment from "moment";
import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { convertDateToStr } from "../component/CommonFuntion";
import ScheduleData from "../data/ScheduleData";

// 1. 데이터 RCUD 로직 만들기

const Schedule = () => {
  let deviceWidth = window.innerWidth;
  const [isMobile, setIsMobile] = useState(deviceWidth <= 1200);

  const [heights, setHeight] = useState(0);
  useEffect(() => {
    setHeight(document.getElementById("header").offsetHeight);
  }, []);

  window.addEventListener("resize", function () {
    setIsMobile(window.innerWidth <= 1200); // 크기 감지만 해줌
  });

  // 현재 날짜를 상태로 저장
  const curDate = new Date();
  const [value, onChange] = useState(curDate); // ?

  const [schedules, setSchedules] = useState({}); // 날짜별 스케줄 관리
  const [newSchedule, setNewSchedule] = useState(""); // 새 스케쥴 필드
  const [editIndex, setEditIndex] = useState(null); // 편집 중 스케쥴 인덱스
  const [editSchedule, setEditSchedule] = useState(""); // 편집 중 스케쥴 내용

  const addSchedule = () => {
    if (newSchedule.trim() === "") return;

    const dateStr = moment(value).format("YYYY-MM-DD"); // 현재 날짜를 문자열로
    setSchedules((prevSchedules) => ({
      // setSchedule 해줌
      ...prevSchedules,
      [dateStr]: [...(prevSchedules[dateStr] || []), newSchedule], // 기존 스케쥴에 새 스케쥴 추가(기존 없으면 빈 배열 시작)
    }));
    setNewSchedule("");
  };

  const startEdit = (index) => {
    setEditIndex(index);
    setEditSchedule(schedules[moment(value).format("YYYY-MM-DD")][index]);
  };

  const saveEdit = () => {
    if (editSchedule.trim() === "") return;

    const dateStr = moment(value).format("YYYY-MM-DD");
    const updatedSchedules = schedules[dateStr].map((schedule, i) =>
      i === editIndex ? editSchedule : schedule
    );
    setSchedules({
      ...schedules,
      [dateStr]: updatedSchedules,
    });
    setEditIndex(null);
    setEditSchedule("");
  };

  const deleteSchedule = (index) => {
    const dateStr = moment(value).format("YYYY-MM-DD");
    setSchedules({
      ...schedules,
      [dateStr]: schedules[dateStr].filter((_, i) => i !== index),
    });
  };

  const addContent = ({ date }) => {
    const dateStr = moment(date).format("YYYY-MM-DD");
    if (schedules[dateStr] && schedules[dateStr].length > 0) {
      return (
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
      );
    }
    return null;
  };

  // 현재 선택된 날짜의 스케쥴 가져오기
  const currentDateStr = moment(value).format("YYYY-MM-DD");
  const currentSchedules = schedules[currentDateStr] || [];

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
                  onChange={(e) => setNewSchedule(e.target.value)} // setSchedule로 상태 저장
                  placeholder="Enter a new schedule"
                  style={{
                    margin: "5px",
                    padding: "10px",
                    width: "60%",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                  }}
                />
                <button
                  onClick={addSchedule} // newSchedule의 상태값을 schedule 목록에 추가
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
                  height: "60%",
                  overflow: "auto",
                }}
              >
                {currentSchedules.map((schedule, index) => (
                  <li key={index} style={{ margin: "10px 0" }}>
                    {editIndex === index ? (
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        <input
                          type="text"
                          value={editSchedule}
                          onChange={(e) => setEditSchedule(e.target.value)}
                          style={{
                            margin: "5px",
                            padding: "10px",
                            width: "50%",
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
                            backgroundColor: "#009fb1",
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
                          Save
                        </button>
                      </div>
                    ) : (
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        <span>{schedule}</span>
                        <div>
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
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ) : (
        // 모
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            height: `calc(100% - ${heights}px)`,
            width: "100%",
          }}
        >
          <div
            id="miniCalendar"
            style={{ width: "100%", height: "50%", minHeight: "470px" }}
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
              width: "100%",
              height: "50%",
              backgroundColor: "#fff",
            }}
          >
            <div
              id="schedule"
              style={{
                width: "80%",
                height: "80%",
                overflow: "hidden",
                borderTop: "1px solid #009fb1",
              }}
            >
              <div
                id="addSchedule"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <h5 style={{ margin: "2px", padding: "2px" }}>
                  {moment(value).format("YYYY-MM-DD")}
                </h5>
                <input
                  type="text"
                  value={newSchedule}
                  onChange={(e) => setNewSchedule(e.target.value)} // setSchedule로 상태 저장
                  placeholder="Enter a new schedule"
                  style={{
                    margin: "1px",
                    padding: "2px",
                    width: "60%",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                  }}
                />
                <button
                  onClick={addSchedule} // newSchedule의 상태값을 schedule 목록에 추가
                  style={{
                    padding: "4px 8px",
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
                {currentSchedules.map((schedule, index) => (
                  <li
                    key={index}
                    style={{
                      margin: "5px 0",
                      borderBottom: "1px dashed #c5eaf7",
                    }}
                  >
                    {editIndex === index ? (
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        <input
                          type="text"
                          value={editSchedule}
                          onChange={(e) => setEditSchedule(e.target.value)}
						  style={{
							margin: "1px",
							padding: "2px",
							width: "60%",
							border: "1px solid #ccc",
							borderRadius: "4px",
						  }}
                        />
                        <button
                          onClick={saveEdit}
                          style={{
                            padding: "4px 8px",
                            border: "none",
                            borderRadius: "4px",
                            backgroundColor: "#009fb1",
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
                          Save
                        </button>
                      </div>
                    ) : (
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        <span>{schedule}</span>
                        <div>
                          <button
                            onClick={() => startEdit(index)}
                            style={{
                              padding: "4px 8px",
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
                          <button
                            onClick={() => deleteSchedule(index)}
                            style={{
                              padding: "4px 8px",
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
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Schedule;
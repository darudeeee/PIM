import moment from "moment";
import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { convertDateToStr } from "../component/CommonFuntion";
import ScheduleData from "../data/ScheduleData";
import Button from "@mui/material/Button";

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

  const curDate = new Date();
  const [value, onChange] = useState(curDate);

  const addContent = ({ date }) => {
    const contents = [];
    if (
      ScheduleData.find(
        (day) =>
          convertDateToStr(day.start) === moment(date).format("YYYY-MM-DD")
      )
    ) {
      contents.push(
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
    return <div>{contents}</div>;
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
                    width: "60%",
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
                      <div style={{ display: "flex", alignItems: "center" }}>
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
                          Save
                        </button>
                      </div>
                    ) : (
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <span>{schedule}</span>
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
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ) : (
        // 애초에 리스트를 나눠놓는게 아니라 날짜를 클릭하면 캘린더 높이가 100에서 60으로 줄어들고 40은 리스트를 띄우고 싶은데...
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
            style={{ width: "100%", height: "60%", minHeight: "460px" }}
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
              height: "40%",
              backgroundColor: "#fff",
            }}
          >
            <div
              id="schedule"
              style={{
                width: "80%",
                height: "80%",
                overflow: "hidden",
              }}
            >
              <h5 style={{ display: "flex", justifyContent: "center" }}>
                Today's Schedule
              </h5>
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
                    padding: "5px",
                    width: "60%",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                  }}
                />
                <button
                  onClick={addSchedule}
                  style={{
                    padding: "5px 5px",
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
                {schedules.map((schedule, index) => (
                  <li key={index} style={{ margin: "10px 0" }}>
                    {editIndex === index ? (
                      <div style={{ display: "flex", alignItems: "center" }}>
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
                          Save
                        </button>
                      </div>
                    ) : (
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <span>{schedule}</span>
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

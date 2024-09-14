import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { PieChart } from "@mui/x-charts/PieChart";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2"; // 원하는 차트 종류를 가져오세요.
import BudgetData from "../data/BudgetData";

ChartJS.register(ArcElement, Tooltip, Legend);

const Budget = () => {
  const [value, setValue] = useState(dayjs());

  let deviceWidth = window.innerWidth;
  const [isMobile, setIsMobile] = useState(deviceWidth <= 1200);

  const [heights, setHeight] = useState(0);
  useEffect(() => {
    setHeight(document.getElementById("header").offsetHeight);
  }, []);
  window.addEventListener("resize", function () {
    setIsMobile(window.innerWidth <= 1200); // 크기 감지만 해줌
  });

  const [cardData, setCardData] = useState({
    income: 0,
    expenditure: 0,
    total: 0,
    highestCategory: "",
  });

  const [data, setData] = useState(
    BudgetData
  );

  const [dense, setDense] = useState(false);
  const Pies = {
    labels: ["데이트", "식비", "기타"],
    datasets: [
      {
        label: "금액",
        data: data
          .filter((item) => item.type == 1)
          .map((item, index) => item.amt),
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          // 'rgba(75, 192, 192, 0.2)',
          // 'rgba(153, 102, 255, 0.2)',
          // 'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          // 'rgba(75, 192, 192, 1)',
          // 'rgba(153, 102, 255, 1)',
          // 'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
  const Pies2 = {
    labels: ["데이트", "식비", "기타"],
    datasets: [
      {
        label: "금액",
        data: data
          .filter((item) => item.type == 2)
          .map((item, index) => item.amt),
        backgroundColor: [
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          height: `calc(100% - ${heights}px)`,
          width: "100%",
          flexDirection: "column",
          overflow: "auto", // gird는 넘쳐도 크기 유지 다른게 줄어서 auto로 스크롤 만들어줌
        }}
      >
        <div>
          <Card
            sx={{
              display: "flex",
              height: "70px",
              width: "90%",
              margin: "30px 5%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="date"
                value={value}
                onChange={(newValue) => setValue(newValue)}
              />
            </LocalizationProvider>
          </Card>
        </div>
        <Grid container spacing={2}>
          {/* gird는 세로로 12줄로 나눔, spacing은 간격 자른것들 사이 */}

          <Grid item xs={12} sm={12} md={6} lg={3}>
            <Card
              sx={{
                display: "flex",
                height: "120px",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {cardData.income}원
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={3}>
            <Card
              sx={{
                display: "flex",
                height: "120px",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {cardData.expenditure}원
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={3}>
            <Card
              sx={{
                display: "flex",
                height: "120px",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {cardData.total}원
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={3}>
            <Card
              sx={{
                display: "flex",
                height: "120px",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {cardData.highestCategory}
            </Card>
          </Grid>
          {/* xs 옆이 얇은 모바일, sm 넓은 모바일, md 좀 더 큰그, lg 더 큰그... */}
        </Grid>
        <div style={{ display: "flex", marginTop: "20px" }}>
          <List
            dense={dense}
            style={{ height: "80%", overflow: "auto", width: "25%" }}
          >
            {data.map((item) => (
              <ListItem>
                <ListItemText
                  primary={
                    <>
                      {item.type}
                      {item.use}
                      {item.amt}
                    </>
                  }
                />
              </ListItem>
            ))}
          </List>
          <div
            style={{
              height: "80%",
              width: "25%",
            }}
          >
            <Pie data={Pies} />
          </div>
          <div
            style={{
              height: "80%",
              width: "25%",
            }}
          >
            <Pie data={Pies2} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Budget;

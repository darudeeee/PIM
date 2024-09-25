import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2"; // 원하는 차트 종류를 가져오세요.
import BudgetData from "../data/BudgetData";
import Select from "@mui/material/Select";
import { MenuItem } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import Input from "@mui/material/Input";

import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

ChartJS.register(ArcElement, Tooltip, Legend);

const Budget = () => {
  const [value, setValue] = useState(dayjs());

//   let deviceWidth = window.innerWidth;
//   const [isMobile, setIsMobile] = useState(deviceWidth <= 1200);

  const [heights, setHeight] = useState(0);
  useEffect(() => {
    setHeight(document.getElementById("header").offsetHeight);
  }, []);
//   window.addEventListener("resize", function () {
//     setIsMobile(window.innerWidth <= 1200); // 크기 감지만 해줌
//   });

  const [highestCategory, setHighestCategory] = useState(0);
  const handleHighestCategory = (event) => {
    setHighestCategory(event.target.value);
  };

  const [cardData, setCardData] = useState({
    income: 0,
    expenditure: 0,
    total: 0,
    highestCategory: "Highest Category : " + {highestCategory},
  });

  const [data, setData] = useState(BudgetData);
  const [dense, setDense] = useState(false);

  const Pies = {
    labels: ["식비", "교통비", "기타"],
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
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const Pies2 = {
    labels: ["식비", "교통비", "기타"],
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

  const [type, setType] = useState(0); // 폼 select
  const handleType = (event) => {
    setType(event.target.value);
  };

  const [amt, setAmt] = useState(0);
  const handleAmt = (event) => {
    setAmt(event.target.value);
  };

  const [use, setUse] = useState(0); // 폼 select
  const handleUse = (event) => {
    setUse(event.target.value);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: `calc(100% - ${heights}px)`,
          width: "100%",
          overflow: "auto", // gird는 넘쳐도 크기 유지 다른게 줄어서 auto로 스크롤 만들어줌
          backgroundColor: "#f7fdff",
        }}
      >
        <div>
          <Card
            sx={{
              display: "flex",
              height: "50px",
              width: "90%",
              margin: "30px 5%",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "none",
              backgroundColor: "#f7fdff",
            }}
          >
            {/* mui에서 dayjs를 사용 가능하게 */}
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="date"
                value={value}
                onChange={(newValue) => setValue(newValue)}
                sx={{ width: "50%", backgroundColor: "#fff" }}
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
              {cardData.income} won
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
              {cardData.expenditure} won
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
              {cardData.total} won
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

          <Grid item xs={12} sm={12} md={6} lg={3}>
            <Card
              sx={{
                display: "flex",
                height: "100%",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <List
                dense={false} // 리스트 간에 여백 조정
                style={{ height: "80%", overflow: "auto", width: "100%" }}
              >
                {data.map((item) => (
                  <ListItem>
                    <ListItemText
                      primary={
                        <>
                          {item.type}(1:I, 2:O)　
                          {item.use}(1:F, 2:T, 3:O)　
                          {item.amt}(won)
                        </>
                      }
                    />
                  </ListItem>
                ))}
              </List>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={3}>
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <h4>Income Tracker</h4>
              <Pie data={Pies} />
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={3}>
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <h4>Expense Tracker</h4>
              <Pie data={Pies2} />
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={3}>
            <Card
              sx={{
                display: "flex",
                height: "100%",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-evenly",
                  height: "90%",
                  width: "60%",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    height: "20%",
                  }}
                >
                  <h3>Budget Management</h3>
                </div>

                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                  <InputLabel id="demo-simple-select-standard-label">
                    Type
                  </InputLabel>
                  <Select
                    value={type}
                    onChange={handleType}
                  >
    				<MenuItem value={0}>None</MenuItem>
                    <MenuItem value={1}>Income</MenuItem>
                    <MenuItem value={2}>expenditure</MenuItem>
                  </Select>
                </FormControl>

                <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                  <InputLabel
				  	value={amt}
					onChange={handleAmt}
				  >
                    Amt
                  </InputLabel>
                  <Input 
				    type="number"
                    id="standard-adornment-amount"
                    endAdornment={
                      <InputAdornment position="start">won</InputAdornment>
                    }
                  />{" "}
                </FormControl>

                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                  <InputLabel id="demo-simple-select-standard-label">
                    Use
                  </InputLabel>
                  <Select
                    value={use}
                    onChange={handleUse}
                  >
				  <MenuItem value={0}>None</MenuItem>
                  <MenuItem value={1}>Food</MenuItem>
                  <MenuItem value={2}>Transportation</MenuItem>
                  <MenuItem value={3}>Other</MenuItem>
                  </Select>
                </FormControl>

                <div style={{ marginTop: "20px" }} />
                <Button
                  variant="contained"
                  endIcon={<SendIcon />}
                  style={{ backgroundColor: "lightblue" }}
                >
                  Send
                </Button>
              </div>
            </Card>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Budget;

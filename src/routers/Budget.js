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
import PaidIcon from '@mui/icons-material/Paid';

ChartJS.register(ArcElement, Tooltip, Legend);

const Budget = () => {
  const [value, setValue] = useState(dayjs());

  const [heights, setHeight] = useState(0);
  useEffect(() => {
    setHeight(document.getElementById("header").offsetHeight);

    // 데이터 가져온거 계산 때리고 cardData에 넣어주기
    // map 돌려서 sum

    var income = 0;
    var expenditure = 0;
    var total = 0;
    var highestCategory = [];
    var temp = 0;

    data.map((item) => {
      if (item.type == 1) {
        income += item.amt;
      }
      if (item.type == 2) {
        expenditure += item.amt;
      }
      if (temp < item.amt) {
        highestCategory[0] = item;
      }
    });
    total += income - expenditure;

	// 형변환, 다 else로 나오네
	if (highestCategory[0].use == 1) {
		highestCategory[0].use = "Food";
	}
	else if (highestCategory[0].use == 2) {
		highestCategory[0].use = "Transportation";
	}
	else if (highestCategory[0].use == 3) {
		highestCategory[0].use = "Other";
	} else {
		highestCategory[0].use = "None";
	}
	;

    setCardData({
      income: income,
      expenditure: expenditure,
      total: total,
      highestCategory: highestCategory[0].use, // 형변환? 밑에서 3항연산자로 match.max?
    });
  }, []);

  const [cardData, setCardData] = useState({
    income: 0,
    expenditure: 0,
    total: 0,
    highestCategory: 0, 
  });

  const [data, setData] = useState(BudgetData);
  const [dense, setDense] = useState(false);

  const Pies = {
    labels: ["Salary", "Rental", "Other"],
    datasets: [
      {
        label: "amt",
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
    labels: ["Food", "Transportation", "Other"],
    datasets: [
      {
        label: "amt",
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

//   price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  
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
		  alignItems: "center",
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
                sx={{ width: "100%", backgroundColor: "#fff" }}
              />
            </LocalizationProvider>
          </Card>
        </div>

		<div style={{
			display: "flex",
			width: "90%",
			marginBottom: "50px"
		}}>
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
			  <h5>Income :</h5>&nbsp;
              +{cardData.income} won
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
			  <h5>Expenditure :</h5>&nbsp;
              -{cardData.expenditure} won
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
			  <h5>Total :</h5>&nbsp;
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
			  <h5>Highest Category : </h5>&nbsp;
			  {/* 형변환 */}
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
                style={{ height: "80%", overflow: "auto", width: "100%" }}
              >
				<div style={{
					// 여기에 width랑 margin해도 뒤 card 밀림
				}}>
                {data.map((item) => (
                  <ListItem style={{
					border: "1px solid #D4E8FB",
					padding: "5px",
				  }}
					// width 지정 하거나, margin주면 뒤 card들 밀림
					// dense 안먹힘
				  >
					{/* 여기에 div랑 아이콘 넣으면 밀림 */}
                    <ListItemText
                      primary={
                        <>
                          {item.type === 1 ? "Income" : item.type === 2 ? "Expenditure" : "None"}　
                          {
							(item.type === 1 && item.use === 1) ? "Salary" :
							(item.type === 1 && item.use === 2) ? "Rental" :
							(item.type === 1 && item.use === 3) ? "Other" :
							(item.type === 2 && item.use === 1) ? "Food" :
							(item.type === 2 && item.use === 2) ? "Transportation" :
							(item.type === 2 && item.use === 3) ? "Other" :
							"None"
							}　
                          {item.amt}won
                        </>
                      }
                    />
                  </ListItem>
                ))}
				</div>
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
                    height: "10%",
                  }}
                >
                  <h3>Budget Management</h3>
                </div>

                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                  <InputLabel id="demo-simple-select-standard-label">
                    Type
                  </InputLabel>
                  <Select value={type} onChange={handleType}>
                    <MenuItem value={0}>None</MenuItem>
                    <MenuItem value={1}>Income</MenuItem>
                    <MenuItem value={2}>Expenditure</MenuItem>
                  </Select>
                </FormControl>

                <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                  <InputLabel value={amt} onChange={handleAmt}>
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
                  <Select value={use} onChange={handleUse}>
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
                  style={{ backgroundColor: "lightblue", marginBottom: "10%",
				   }}
                >
                  Send
                </Button>
              </div>
            </Card>
          </Grid>
        </Grid>
		</div>
      </div>
    </>
  );
};

export default Budget;

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

  const [data, setData] = useState([
    {
      type: 1, //1: 수입, 2: 지출
      amt: 1,
      use: 1, // 1:데이트, 2: 식비, 3: 기타
    },
    {
      type: 1, //1: 수입, 2: 지출
      amt: 2,
      use: 2, // 1:데이트, 2: 식비, 3: 기타
    },
    {
      type: 1, //1: 수입, 2: 지출
      amt: 3,
      use: 3, // 1:데이트, 2: 식비, 3: 기타
    },
    {
      type: 2, //1: 수입, 2: 지출
      amt: 1,
      use: 1, // 1:데이트, 2: 식비, 3: 기타
    },
    {
      type: 2, //1: 수입, 2: 지출
      amt: 3,
      use: 3, // 1:데이트, 2: 식비, 3: 기타
    },
    {
      type: 2, //1: 수입, 2: 지출
      amt: 3,
      use: 3, // 1:데이트, 2: 식비, 3: 기타
    },
    {
      type: 2, //1: 수입, 2: 지출
      amt: 3,
      use: 3, // 1:데이트, 2: 식비, 3: 기타
    },
    {
      type: 2, //1: 수입, 2: 지출
      amt: 3,
      use: 3, // 1:데이트, 2: 식비, 3: 기타
    },
  ]);
  const [dense, setDense] = useState(false);

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
          <PieChart
            series={[
              {
                data: data
                  .filter((item) => item.type == 1)
                  .map((item, index) => {
                    return {
                      id: index,
                      value: item.amt,
                      label: item.use.toString(),
                    };
                  }),
              },
            ]}
            width={200}
            height={350}
          />
          <PieChart
            series={[
              {
                data: data
                  .filter((item) => item.type == 2)
                  .map((item, index) => {
                    return {
                      id: index,
                      value: item.amt,
                      label: item.use.toString(),
                    };
                  }),
              },
            ]}
			width={200}
            height={350}
          />
        </div>
      </div>
    </>
  );
};

export default Budget;

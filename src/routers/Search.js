import * as React from "react";
import { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import { Grid } from "@mui/material";
import Card from "@mui/material/Card";

const Search = () => {
  let deviceWidth = window.innerWidth;
  const [isMobile, setIsMobile] = useState(deviceWidth <= 1200);

  const [heights, setHeight] = useState(0); // return값 안에 초기값 지정
  useEffect(() => {
    setHeight(document.getElementById("header").offsetHeight);
  }, []);

  window.addEventListener("resize", function () {
    setIsMobile(window.innerWidth <= 1200); // 크기 감지만 해줌
  });

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
        <div
          id="searchBar"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "10%",
          }}
        >
          <Card
            sx={{
              display: "flex",
              width: "50%",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "none",
            }}
          >
            {/* 호버시 검색창 색상 + 아이콘 변경 등 */}
            <TextField
              variant="standard"
              sx={{ width: "80%", height: "100%" }}
            />
            <SearchIcon
              sx={{
                width: "50px",
                height: "30px",
              }}
            />
          </Card>
          </div>

          <div
            style={{
              display: "flex",
              width: "90%",
              marginBottom: "50px",
            }}
          >
            <Grid container spacing={2}>
              {/* gird는 세로로 12줄로 나눔, spacing은 간격 자른것들 사이 */}

              <Grid item xs={12} sm={6} md={4} lg={2}>
                <Card
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    height: "250px",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div style={{width: "90%", height: "20%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div style={{fontSize: "18px", fontWeight: 600}}>title</div>
                    <div style={{fontSize: "18px", fontWeight: 600}}>date</div>
                  </div>
                  <div style={{width: "90%", height: "80%"}}>
                    note
                  </div>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={2}>
                <Card
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    height: "250px",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div style={{width: "90%", height: "20%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div style={{fontSize: "18px", fontWeight: 600}}>title</div>
                    <div style={{fontSize: "18px", fontWeight: 600}}>date</div>
                  </div>
                  <div style={{width: "90%", height: "80%"}}>
                    note
                  </div>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={2}>
                <Card
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    height: "250px",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div style={{width: "90%", height: "20%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div style={{fontSize: "18px", fontWeight: 600}}>title</div>
                    <div style={{fontSize: "18px", fontWeight: 600}}>date</div>
                  </div>
                  <div style={{width: "90%", height: "80%"}}>
                    note
                  </div>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={2}>
                <Card
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    height: "250px",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div style={{width: "90%", height: "20%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div style={{fontSize: "18px", fontWeight: 600}}>title</div>
                    <div style={{fontSize: "18px", fontWeight: 600}}>date</div>
                  </div>
                  <div style={{width: "90%", height: "80%"}}>
                    note
                  </div>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={2}>
                <Card
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    height: "250px",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div style={{width: "90%", height: "20%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div style={{fontSize: "18px", fontWeight: 600}}>title</div>
                    <div style={{fontSize: "18px", fontWeight: 600}}>date</div>
                  </div>
                  <div style={{width: "90%", height: "80%"}}>
                    note
                  </div>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={2}>
                <Card
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    height: "250px",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div style={{width: "90%", height: "20%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div style={{fontSize: "18px", fontWeight: 600}}>title</div>
                    <div style={{fontSize: "18px", fontWeight: 600}}>date</div>
                  </div>
                  <div style={{width: "90%", height: "80%"}}>
                    note
                  </div>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={2}>
                <Card
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    height: "250px",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div style={{width: "90%", height: "20%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div style={{fontSize: "18px", fontWeight: 600}}>title</div>
                    <div style={{fontSize: "18px", fontWeight: 600}}>date</div>
                  </div>
                  <div style={{width: "90%", height: "80%"}}>
                    note
                  </div>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={2}>
                <Card
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    height: "250px",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div style={{width: "90%", height: "20%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div style={{fontSize: "18px", fontWeight: 600}}>title</div>
                    <div style={{fontSize: "18px", fontWeight: 600}}>date</div>
                  </div>
                  <div style={{width: "90%", height: "80%"}}>
                    note
                  </div>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={2}>
                <Card
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    height: "250px",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div style={{width: "90%", height: "20%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div style={{fontSize: "18px", fontWeight: 600}}>title</div>
                    <div style={{fontSize: "18px", fontWeight: 600}}>date</div>
                  </div>
                  <div style={{width: "90%", height: "80%"}}>
                    note
                  </div>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={2}>
                <Card
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    height: "250px",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div style={{width: "90%", height: "20%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div style={{fontSize: "18px", fontWeight: 600}}>title</div>
                    <div style={{fontSize: "18px", fontWeight: 600}}>date</div>
                  </div>
                  <div style={{width: "90%", height: "80%"}}>
                    note
                  </div>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={2}>
                <Card
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    height: "250px",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div style={{width: "90%", height: "20%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div style={{fontSize: "18px", fontWeight: 600}}>title</div>
                    <div style={{fontSize: "18px", fontWeight: 600}}>date</div>
                  </div>
                  <div style={{width: "90%", height: "80%"}}>
                    note
                  </div>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={2}>
                <Card
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    height: "250px",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div style={{width: "90%", height: "20%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div style={{fontSize: "18px", fontWeight: 600}}>title</div>
                    <div style={{fontSize: "18px", fontWeight: 600}}>date</div>
                  </div>
                  <div style={{width: "90%", height: "80%"}}>
                    note
                  </div>
                </Card>
              </Grid>
            </Grid>
          </div>

      </div>
    </>
  );
};

export default Search;

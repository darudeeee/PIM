import SearchIcon from "@mui/icons-material/Search";
import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import * as React from "react";
import { useEffect, useState } from "react";
import { convertDateToStr } from "../component/CommonFuntion"; // 페이지 안에 뭔가를 리턴
import SearchData from "../data/SearchData"; // 페이지 자체를 리턴

// 1. 날짜순 정렬
// 2. Title 글자 수 제한 ... 처리
// 3. Card 색상 변경
// 4. 검색 시, 공백 제외, 대소문자 구분 X처리

const Search = () => {
  let deviceWidth = window.innerWidth;
  const [isMobile, setIsMobile] = useState(deviceWidth <= 1200);

  const [data, setData] = useState([]); // 원본 데이터(없으면 없는 데이터 조회 후 원본 표시x)
  const [Searchdata, setSearchData] = useState([]); // 검색 데이터

  function searchTitleChange(event) {
    setSearchInput(event.target.value); // 여기 searchInput을 써도 함수가 끝날 때까지 xx
    // 함수 전체가 끝나야 변경된 값으로 사용이 가능

    let array = []; // 가변수
    data.map((item) => {
      if (item.title.includes(event.target.value)) {
        // 원본 데이터와 searchInput을 비교
        array.push(item); // 원본 데이터 복사
      }
    });
    setSearchData(array); // 원본 데이터 중 동일한 것만 저장
  }

  const [searchInput, setSearchInput] = useState("");

  const [heights, setHeight] = useState(0); // return값 안에 초기값 지정
  useEffect(() => {
    setHeight(document.getElementById("header").offsetHeight);

    setData(SearchData);
    setSearchData(SearchData); // 애가 없으면 초기에 안뜸
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
            height: "20%",
          }}
        >
          <Card
            sx={{
              display: "flex",
              width: "50%",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "none",
              background: "none",
            }}
          >
            {/* 호버시 검색창 색상 + 아이콘 변경 등 */}
            <TextField
              variant="standard"
              value={searchInput}
              placeholder="Enter Title Here"
              sx={{ width: "80%", height: "100%" }}
              onChange={(event) => searchTitleChange(event)}
              InputProps={{
                startAdornment: (
                  <SearchIcon
                    sx={{
                      width: "50px",
                      height: "30px",
                    }}
                  />
                ),
              }}
            />
          </Card>
        </div>

        <div
          style={{
            display: "flex",
            width: "80%",
            marginBottom: "50px",
          }}
        >
          <Grid container spacing={2}>
            {/* gird는 세로로 12줄로 나눔, spacing은 간격 자른것들 사이 */}

            {Searchdata.map((item) => {
              // 동일한 것만
              return (
                <Grid item xs={12} sm={6} md={4} lg={2}>
                  <Card
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      height: "120px",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "#fbfffb",
                      borderRadius: "20px",
                    }}
                  >
                    <div
                      style={{
                        width: "90%",
                        height: "60%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "flexend",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "flex-end",
                          width: "100%",
                          height: "50%",
                          fontSize: "18px",
                          fontWeight: 600,
                          whiteSpace: "noWrap",
                          overflow: "hidden",
                          //   textOverflow: "ellipsis", 이거 왜 안됨?
                        }}
                      >
                        {item.title}
                      </div>
                      <div
                        style={{
                          display: "flex",
                          width: "100%",
                          height: "50%",
                          fontSize: "18px",
                          fontWeight: 400,
                        }}
                      >
                        {convertDateToStr(item.date)}
                      </div>
                    </div>
                    <div
                      style={{
                        dispaly: "flex",
                        alignItems: "center",
                        width: "90%",
                        height: "40%",
                        whiteSpace: "noWrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {item.content}
                    </div>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </div>
      </div>
    </>
  );
};

export default Search;

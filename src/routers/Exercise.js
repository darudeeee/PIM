import { useEffect, useState } from "react";
import { Grid } from "@mui/material";

const Exercise = () => {
  const [heights, setHeight] = useState(0);

  useEffect(() => {
    setHeight(document.getElementById("header").offsetHeight);
  }, []);

  return (
    <>
      <div
        style={{
          display: "flex",
          height: `calc(100% - ${heights}px)`,
          width: "100%",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <div
              style={{ width: "100%", height: "100%", border: "1px solid #000" }}
            >
              입력창
            </div>
          </Grid>

          <Grid item xs={12} sm={6} md={6} lg={6}>
          <div
              style={{ width: "100%", height: "100%" }}
            >
              표시창
            </div>
          </Grid>

          <Grid item xs={12} sm={6} md={6} lg={6}>
            <div>식단</div>
          </Grid>

          <Grid item xs={12} sm={6} md={6} lg={6}>
            <div>운동</div>
          </Grid>
        </Grid>

        {/* <Grid container spacing={2}>
  <Grid item xs={6} md={8}>
    <Item>xs=6 md=8</Item>
  </Grid>
  <Grid item xs={6} md={4}>
    <Item>xs=6 md=4</Item>
  </Grid>
  <Grid item xs={6} md={4}>
    <Item>xs=6 md=4</Item>
  </Grid>
  <Grid item xs={6} md={8}>
    <Item>xs=6 md=8</Item>
  </Grid>
</Grid> */}
      </div>
    </>
  );
};

export default Exercise;

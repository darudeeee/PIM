import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import AccessibilityIcon from "@mui/icons-material/Accessibility";

const Exercise = () => {
  const [heights, setHeights] = useState(0);

  useEffect(() => {
    setHeights(document.getElementById("header").offsetHeight);
  }, []);

  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState("");
  const [result, setResult] = useState("");

  function calBMI() {
    const meter = height / 100;
    const bmi = weight / (meter * meter);

    if (bmi < 16) {
      setResult("Severe Thinness");
      setBmi("Your BMI is " + bmi.toFixed(2));
    } else if (bmi >= 16 && bmi < 17) {
      setResult("Moderate Thinness");
      setBmi("Your BMI is " + bmi.toFixed(2));
    } else if (bmi >= 17 && bmi < 18.5) {
      setResult("Mild Thinness");
      setBmi("Your BMI is " + bmi.toFixed(2));
    } else if (bmi >= 18.5 && bmi < 25) {
      setResult("Healthy weight");
      setBmi("Your BMI is " + bmi.toFixed(2));
    } else if (bmi >= 25 && bmi < 30) {
      setResult("Overweight");
      setBmi("Your BMI is " + bmi.toFixed(2));
    } else if (bmi >= 30 && bmi < 35) {
      setResult("Obese Class I");
      setBmi("Your BMI is " + bmi.toFixed(2));
    } else if (bmi >= 35 && bmi < 40) {
      setResult("Obese Class II");
      setBmi("Your BMI is " + bmi.toFixed(2));
    } else if (bmi >= 40) {
      setResult("Obese Class III");
      setBmi("Your BMI is " + bmi.toFixed(2));
    }
  }

  return (
    <div
      style={{
        display: "flex",
        height: `calc(100% - ${heights}px)`,
        width: "100%",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <Card
            sx={{
              display: "flex",
              height: "500px",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "40px",
            }}
          >
            <div style={{ display: "flex", width: "50%", height: "100%" }}>
              <AccessibilityIcon
                sx={{ display: "flex", width: "100%", height: "100%" }}
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                width: "40%",
                height: "100%",
              }}
            >
              <TextField
                label="Height"
                variant="standard"
                type="number"
                onChange={(e) => setHeight(e.target.value)}
              />
              <TextField
                label="Weight"
                variant="standard"
                type="number"
                onChange={(e) => setWeight(e.target.value)}
              />
              <br />
              <button
                style={{
                  backgroundColor: "#eb8e8e",
                  color: "#fff",
                  borderRadius: "10px",
                  padding: "3px",
                }}
                onClick={calBMI}
              >
                Calculate
              </button>
              {bmi} <br />
              {result}
            </div>
          </Card>
        </Grid>

        <Grid item xs={12} sm={12} md={4} lg={4}>
          <Card
            sx={{
              display: "flex",
              flexDirection: "column",
              height: "500px",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "40px",
            }}
          >
            <div
              id="top"
              style={{ display: "flex", width: "100%", height: "50%" }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "50%",
                  height: "100%",
                }}
              >
                아침
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "50%",
                  height: "100%",
                }}
              >
                점심
              </div>
            </div>
            <div
              id="bottom"
              style={{ display: "flex", width: "100%", height: "50%" }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "50%",
                  height: "100%",
                }}
              >
                저녁
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "50%",
                  height: "100%",
                }}
              >
                간식
              </div>
            </div>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <Card
            sx={{
              display: "flex",
              height: "500px",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "40px",
            }}
          >
            운동
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Exercise;

import AccessibilityIcon from "@mui/icons-material/Accessibility";
import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import { useEffect, useState } from "react";
import ExercisePopUp from "../component/Window/ExercisePopUp";

const Exercise = () => {
  const [heights, setHeights] = useState(0);

  useEffect(() => {
    setHeights(document.getElementById("header").offsetHeight);
  }, []);

  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState("");
  const [result, setResult] = useState("");
  const [ExercisePopUpVisible, setExerCisePopUpVisible] = useState(false);

  function calBMI() {
    const meter = height / 100;
    const bmiValue = weight / (meter * meter);

    if (bmiValue < 16) {
      setResult("Severe Thinness");
      setBmi("Your BMI is " + bmiValue.toFixed(2));
    } else if (bmiValue >= 16 && bmiValue < 17) {
      setResult("Moderate Thinness");
      setBmi("Your BMI is " + bmiValue.toFixed(2));
    } else if (bmiValue >= 17 && bmiValue < 18.5) {
      setResult("Mild Thinness");
      setBmi("Your BMI is " + bmiValue.toFixed(2));
    } else if (bmiValue >= 18.5 && bmiValue < 25) {
      setResult("Healthy weight");
      setBmi("Your BMI is " + bmiValue.toFixed(2));
    } else if (bmiValue >= 25 && bmiValue < 30) {
      setResult("Overweight");
      setBmi("Your BMI is " + bmiValue.toFixed(2));
    } else if (bmiValue >= 30 && bmiValue < 35) {
      setResult("Obese Class I");
      setBmi("Your BMI is " + bmiValue.toFixed(2));
    } else if (bmiValue >= 35 && bmiValue < 40) {
      setResult("Obese Class II");
      setBmi("Your BMI is " + bmiValue.toFixed(2));
    } else if (bmiValue >= 40) {
      setResult("Obese Class III");
      setBmi("Your BMI is " + bmiValue.toFixed(2));
    }
  }

  return (
    <>
      <div
        style={{
          display: "flex",
          height: `calc(100% - ${heights}px)`,
          width: "100%",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", width: "100%" }}>
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
                    Breakfast
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
                    Lunch
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
                    Dinner
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
                    Snack
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
                onClick={() => setExerCisePopUpVisible(true)}
              >
                {/* 운동 목록 외부에서 가져와서 연동해서 하고싶음 */}+  
              </Card>
            </Grid>
          </Grid>
        </div>
      </div>
      {ExercisePopUpVisible && (
        <ExercisePopUp onClose={() => setExerCisePopUpVisible(false)} />
      )}
    </>
  );
};

export default Exercise;

import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import TextField from "@mui/material/TextField";
import AccessibilityIcon from "@mui/icons-material/Accessibility";

const Exercise = () => {
  const [heights, setHeights] = useState(0);

  useEffect(() => {
    setHeights(document.getElementById("header").offsetHeight);
  }, []);

  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState('');
  const [result, setResult] = useState('');

  function calBMI() {
    const meter = height / 100;
    const bmi = weight / (meter * meter);

    if (bmi < 16) {
      setResult('Severe Thinness')
      setBmi('Your BMI is ' + bmi.toFixed(2));
    } else

    if (bmi >= 16 && bmi < 17) {
      setResult('Moderate Thinness')
      setBmi('Your BMI is ' + bmi.toFixed(2));
    } else
    
    if (bmi >= 17 && bmi < 18.5) {
      setResult('Mild Thinness')
      setBmi('Your BMI is ' + bmi.toFixed(2));
    } else

    if (bmi >= 18.5 && bmi < 25) {
      setResult('Healthy weight')
      setBmi('Your BMI is ' + bmi.toFixed(2));
    } else
    
    if (bmi >= 25 && bmi < 30) {
      setResult('Overweight')
      setBmi('Your BMI is ' + bmi.toFixed(2));
    } else
    
    if (bmi >= 30 && bmi < 35) {
      setResult('Obese Class I')
      setBmi('Your BMI is ' + bmi.toFixed(2));
    } else

    if (bmi >= 35 && bmi < 40) {
      setResult('Obese Class II')
      setBmi('Your BMI is ' + bmi.toFixed(2));
    } else

    if (bmi >= 40) {
      setResult('Obese Class III')
      setBmi('Your BMI is ' + bmi.toFixed(2));
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
        <Grid container spacing={2} style={{width:"100%", height: "100%"}}>
          <Grid item xs={12} sm={12} md={4} lg={4} style={{display: "flex", alignItems: "center"}}>
            <div
              style={{
                display: "flex",
                width: "100%",
                height: "60%",
                border: "1px solid #000",
              }}
            >
              <div style={{ display: "flex", width: "50%", height: "100%" }}>
                <AccessibilityIcon
                  sx={{ display: "flex", width: "100%", height: "100%" }}
                />
              </div>
              <div style={{ display: "flex",width: "50%", height: "100%" }}>
                <div style={{display: "flex", flexDirection: "column", width: "90%", height: "100%"}}> 
                  <TextField label="Height" variant="standard" type="number" onChange={ (e) => setHeight(e.target.value)} />
                  <TextField label="Weight" variant="standard" type="number"  onChange={ (e) => setWeight(e.target.value)} />
                    <br/>
                  <button style={{backgroundColor:"#eb8e8e", color: "#fff", borderRadius: "10px", padding: "3px"}} onClick={calBMI}>
                    Calculate
                  </button>
                  <div style={{display: "flex", flexDirection: "column", width: "90%", height: "40%"}}>
                    {bmi} <br/>
                    {result}
                  </div>
                  
                </div>
              </div>
            </div>
          </Grid>

          <Grid item xs={12} sm={12} md={4} lg={4} style={{display: "flex", alignItems: "center"}}>
            <div
              style={{
                display: "flex",
                width: "100%",
                height: "60%",
                border: "1px solid #000",
              }}
            >
              식단
            </div>
          </Grid>

          <Grid item xs={12} sm={12} md={4} lg={4} style={{display: "flex", alignItems: "center"}}>
            <div
              style={{
                display: "flex",
                width: "100%",
                height: "60%",
                border: "1px solid #000",
              }}
            >
              운동
            </div>
          </Grid>
        </Grid>
      </div>
  );
};

export default Exercise;

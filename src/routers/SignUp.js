import * as React from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

// 거의 다 라이브러리에서 가져온다고 생각
function SignUp() {
  const [id, setId] = React.useState("");
  const [pw, setPw] = React.useState("");

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div>
        <Typography
          variant="h3"
          gutterBottom
          style={{ fontFamily: "KyoboHandwriting2023wsa" }}
        >
          회원가입
        </Typography>
      </div>

      <div style={{ display: "flex", marginBottom: "5px" }}>
        <Typography
          variant="h5"
          gutterBottom
          style={{
            fontFamily: "KyoboHandwriting2023wsa",
            width: "90px",
            textAlign: "right",
            marginRight: "5px"
          }}
        >
          아이디 :
        </Typography>
        <TextField
          size="small"
          value={id}
          onChange={(event) => {
            setId(event.target.value);
          }}
        />
      </div>

      <div style={{ display: "flex", marginBottom: "5px" }}>
        <Typography
          variant="h5"
          gutterBottom
          style={{
            fontFamily: "KyoboHandwriting2023wsa",
            width: "90px",
            textAlign: "right",
            marginRight: "5px"
          }}
        >
          비밀번호 :
        </Typography>
        <TextField
          type="password"
          size="small"
          value={pw}
          onChange={(event) => {
            setPw(event.target.value);
          }}
        />
      </div>
    </div> // div 2개 = 컴포넌트 2개 리턴xx div 1개 안에 여러개는 가능
  );
}

export default SignUp;

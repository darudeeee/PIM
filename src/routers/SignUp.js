import * as React from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { IconButton } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

// 거의 다 라이브러리에서 가져온다고 생각
// useState 훅을 사용해 상태변수의 이름을 정의하고, 초기값은 ""
function SignUp() {
  const [id, setId] = React.useState("");
  const [pw, setPw] = React.useState("");
  const [showPw, setShowPw] = React.useState(false);
  const [age, setAge] = React.useState("");
  const [gender, setGender] = React.useState("female");
  const [local, setLocal] = React.useState([]);
  const [address, setAddress] = React.useState("");

  // 이름 폰번호도 넣으면 좋을듯!!
  // 나중에 아이디 자릿수 정하기, 비밀번호 영문+숫자+특수문자 섞기 등 설정 추가

  // 비밀번호 보이기/감추기 아이콘을 토글하는 함수
  const viewPw = () => {
    setShowPw(!showPw);
  };

  // 성별 클릭 이벤트
  const genderChange = (event) => {
    setGender(event.target.value);
  };

  // 지역 설정
  const localChange = (event) => {
    setLocal(event.target.value);
  };

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

      <div style={{ border: "1px solid black", borderRadius: "10px" }}>
        <div
          style={{ display: "flex", marginTop: "10px", marginBottom: "5px" }}
        >
          <Typography
            variant="h5"
            gutterBottom
            style={{
              fontFamily: "KyoboHandwriting2023wsa",
              width: "90px",
              textAlign: "right",
              marginRight: "5px",
            }}
          >
            아이디 :
          </Typography>
          <TextField
            placeholder="아이디를 입력하세요."
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
              marginRight: "5px",
            }}
          >
            비밀번호 :
          </Typography>
          <TextField
            placeholder="비밀번호를 입력하세요."
            type={showPw ? "text" : "password"} // showPw 값에 따라 비밀번호 표시 여부 변경
            size="small"
            value={pw}
            onChange={(event) => {
              setPw(event.target.value);
            }}
          />
          <IconButton onClick={viewPw}>
            {showPw ? <VisibilityIcon /> : <VisibilityOffIcon />}{" "}
            {/* 비밀번호 보이기/감추기 아이콘 */}
          </IconButton>
        </div>

        <div style={{ display: "flex", marginBottom: "5px" }}>
          <Typography
            variant="h5"
            gutterBottom
            style={{
              fontFamily: "KyoboHandwriting2023wsa",
              width: "90px",
              textAlign: "right",
              marginRight: "5px",
            }}
          >
            나이 :
          </Typography>
          <TextField
            placeholder="나이를 입력하세요."
            inputProps={{
              maxLength: 2,
              inputMode: "numeric",
              pattern: "[0-9]*",
            }}
            type="text"
            size="small"
            value={age}
            onChange={(e) => {
              setAge(e.target.value.replace(/\D/g, ""));
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
              marginRight: "5px",
            }}
          >
            성별 :
          </Typography>
          <FormControl>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              value={gender}
              onChange={genderChange}
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
            </RadioGroup>
          </FormControl>
        </div>

        <div style={{ display: "flex", marginBottom: "5px" }}>
          <Typography
            variant="h5"
            gutterBottom
            style={{
              fontFamily: "KyoboHandwriting2023wsa",
              width: "90px",
              textAlign: "right",
              marginRight: "5px",
            }}
          >
            지역 :
          </Typography>
          <Select
            value={local}
            onChange={localChange}
            style={{ width: "226px", height: "40px" }}
          >
            <MenuItem value={"seoul"}>서울</MenuItem>
            <MenuItem value={"incheon"}>인천</MenuItem>
            <MenuItem value={"gyeonggi"}>경기도</MenuItem>
            <MenuItem value={"gangwon"}>강원도</MenuItem>
            <MenuItem value={"gyeongbuk"}>경상북도</MenuItem>
            <MenuItem value={"gyeongnam"}>경상남도</MenuItem>
            <MenuItem value={"jeollabuk"}>전라북도</MenuItem>
            <MenuItem value={"jeollanam"}>전라남도</MenuItem>
            <MenuItem value={"chungbuk"}>충청북도</MenuItem>
            <MenuItem value={"chungnam"}>충청남도</MenuItem>
            <MenuItem value={"jeju"}>제주도</MenuItem>
          </Select>
        </div>

        <div style={{ display: "flex", marginBottom: "5px" }}>
          <Typography
            variant="h5"
            gutterBottom
            style={{
              fontFamily: "KyoboHandwriting2023wsa",
              width: "90px",
              textAlign: "right",
              marginRight: "5px",
            }}
          >
            주소 :
          </Typography>
          <TextField
            multiline
            rows={3}
            placeholder="주소를 입력하세요."
            style={{ width: "226px" }}
          />
        </div>
      </div>
    </div> // div 2개 = 컴포넌트 2개 리턴xx div 1개 안에 여러개는 가능
  );
}

export default SignUp;

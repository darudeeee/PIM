import * as React from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { IconButton, css } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import "./SignUp.css";

// 수정할 것
// 기존 라이브러리 스타일 none 처리 후 버튼 글자색/선 스타일 변경하기

// 추후에 추가할 기능
// 아이디 중복 확인 + 글자 수 정하기
// 비밀번호 숫자, 영문, 특수문자 포함 + 글자 수 정하기
// 이메일 도메인 선택(구글, 네이버 등 자동으로 -> [입력][@][도메인 선택])
// 비밀번호 확인 받기
// 휴대폰 통신사, 번호 입력 + 인증번호 받기
// 형식 유효성 검사 후 메세지 띄우기

function SignUp() {
  const [id, setId] = React.useState("");
  const [pw, setPw] = React.useState("");
  const [showPw, setShowPw] = React.useState(false);
  const [name, setName] = React.useState("");
  const [age, setAge] = React.useState("");
  const [gender, setGender] = React.useState("female");
  const [local, setLocal] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [infoList, setInfoList] = React.useState([]); // 배열

  // 유효성 검사 안에 들어갈 값?
  const [checkEmail, setCheckEmail] = React.useState("");

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

  // sendInfo시, 배열에 정보 저장
  const sendInfo = () => {
    const info = {
      id: id,
      pw: pw,
      name: name,
      age: age,
      gender: gender,
      local: local,
      address: address,
      email: email,
    };
    setInfoList([...infoList, info]);
    console.log(info); // 입력한 정보 콘솔창에 뜨도록

    // 상태 변수 초기화
    setId("");
    setPw("");
    setName("");
    setAge("");
    setGender("female");
    setLocal("");
    setAddress("");
    setEmail("");
  };

  // 유효성 검사
  const isValidation = (event) => {
    const { value } = event.target;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const emailValidation = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("이메일 형식이 올바르지 않습니다.");
      return false; // 이메일 형식이 맞지 않으면 false 반환
    }
    return true; // 이메일 형식이 맞으면 true 반환
  };

  return (
    <div
      style={{
        vw: "100%",
        vh: "100%",
        backgroundColor: "lightyellow",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div style={{ marginTop: "10px" }}>
        <Typography
          variant="h3"
          gutterBottom
          style={{ fontFamily: "KyoboHandwriting2023wsa" }}
        >
          회원가입
        </Typography>
      </div>
      <div id="cover">
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
            이름 :
          </Typography>
          <TextField
            placeholder="이름을 입력하세요."
            size="small"
            value={name}
            onChange={(event) => {
              setName(event.target.value);
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
            value={address}
            onChange={(event) => {
              setAddress(event.target.value);
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
            이메일 :
          </Typography>
          <TextField
            placeholder="abcd@naver.com"
            type="email"
            size="small"
            value={email}
            onChange={(event) => {
              if (!emailValidation(event.target.value)) {
                return; // 이메일 형식이 맞지 않으면 함수를 빠져나감
              }
              setEmail(event.target.value);
            }}
          />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginRight: "25px",
            marginBottom: "5px",
          }}
        >
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="개인정보 수집 동의"
          />
        </div>

        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: "10px",
          }}
        >
          <Button
            style={{
              width: "90%",
              backgroundColor: "lightyellow",
              border: "3px solid #c2ffc2",
            }}
            onClick={sendInfo}
            variant="outlined"
            startIcon={<SendIcon />} // endIcon하면 아이콘이 글자 뒤로 옴
          >
            회원가입
          </Button>
        </div>
      </div>
    </div> // div 2개 = 컴포넌트 2개 리턴xx div 1개 안에 여러개는 가능
  );
}

export default SignUp;

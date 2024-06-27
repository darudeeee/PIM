import SendIcon from "@mui/icons-material/Send";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { IconButton } from "@mui/material";
import Button from "@mui/material/Button";
import * as React from "react";
import InputControl from "../component/InputControl";

const LogIn = () => {
  const [user, setUser] = React.useState({
    id: "",
    pw: "",
  });

  const tempoId = "admin";
  const tempoPw = "123";

  const InputChange = (name, value) => {
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // 비밀번호 보이기/감추기 아이콘
  const viewPw = () => {
    setUser((prev) => ({
      ...prev,
      showPw: !prev.showPw,
    }));
  };

  // sendInfo시, 배열에 정보 저장
  const sendInfo = () => {
    console.log(user); // 입력한 정보 콘솔창에 뜨도록

    if(user.id === tempoId && user.pw === tempoPw) {
      alert("로그인 성공!"); 
      window.location.href = "/";
    } else {
      alert("로그인 실패!")
    }

    // 상태 변수 
    setUser({
      id: "",
      pw: "",
      showPw: false,
    });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
      }}
    >
      <div
        id="cover"
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <div
          id="left"
          style={{
            display:"flex",
            alignItems: "center",
            justifyContent: "center",
            width: "400px",
            height: "500px",
            flexDirection: "column",
          }}
        >

            <InputControl
              type={"text"}
              label={"아이디"}
              placeholder={"아이디를 입력하세요."}
              value={user.id}
              name={"id"}
              Function={(name, value) => InputChange(name, value)}
            />

            <div style={{ display: "flex" }}>
              <InputControl
                type={user.showPw ? "text" : "password"}
                label={"비밀번호"}
                placeholder={"비밀번호를 입력하세요."}
                value={user.pw}
                name={"pw"}
                Function={(name, value) => {
                  InputChange(name, value);
                }}
              />
              <IconButton onClick={viewPw}>
                {user.showPw ? <VisibilityIcon /> : <VisibilityOffIcon />}
                {/* 비밀번호 보이기/감추기 아이콘 */}
              </IconButton>
            </div>
            <div // 버튼 정렬 박스
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
                  backgroundColor: "#89CFFD",
                  border: "1px solid white",
                  color: "white",
                }}
                onClick={sendInfo}
                variant="outlined"
                startIcon={<SendIcon />} // endIcon하면 아이콘이 글자 뒤로 옴
              >
                로그인
              </Button>
            </div>
            <div
              style={{ display: "flex", justifyContent: "center" }}
              onClick={() => {
                window.location.href = "/SignUp";
              }}
            >
              회원가입
            </div>

        </div>

        <div
          id="right"
          style={{
            width: "400px",
            height: "500px",
            backgroundColor: "lightyellow",
            backgroundImage: `url(${process.env.PUBLIC_URL}/blue.jpg)`, // 이미지 경로 지정
            backgroundSize: "cover", // 이미지 크기 조정
            backgroundRepeat: "no-repeat", // 이미지 반복 없음
          }}
        ></div>
      </div>
    </div>
  );
};

export default LogIn;

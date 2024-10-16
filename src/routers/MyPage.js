import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { IconButton } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import * as React from "react";
import { useEffect, useState } from "react";
import ComboControl from "../component/Control/ComboControl";
import InputAreaControl from "../component/Control/InputAreaControl";
import InputControl from "../component/Control/InputControl";
import RadioControl from "../component/Control/RadioControl";
import UserData from "../data/UserData";

// 모바일에 useRef 사용한 첨부파일 추가 기능

const MyPage = () => {
  // React Avatar
  // https://mui.com/material-ui/react-avatar/
  let deviceWidth = window.innerWidth;
  const [isMobile, setIsMobile] = useState(deviceWidth <= 1200);

  const [heights, setHeight] = useState(0); // return값 안에 초기값 지정
  useEffect(() => {
    setHeight(document.getElementById("header").offsetHeight);
  }, []);

  window.addEventListener("resize", function () {
    setIsMobile(window.innerWidth <= 1200); // 크기 감지만 해줌
  });

  const [user, setUser] = React.useState({
    id: UserData.id,
    pw: UserData.pw,
    showPw: false,
    name: UserData.name,
    age: UserData.age,
    gender: UserData.gender,
    local: UserData.local,
    address: UserData.address,
    email: UserData.email,
    img: "",
  });

  // 지역 배열 선언
  const localArray = [
    {
      value: "seoul",
      name: "서울",
    },
    {
      value: "incheon",
      name: "인천",
    },
    {
      value: "gyeonggi",
      name: "경기도",
    },
    {
      value: "gangwon",
      name: "강원도",
    },
    {
      value: "gyeongbuk",
      name: "경상북도",
    },
    {
      value: "gyeongnam",
      name: "경상남도",
    },
    {
      value: "jeollabuk",
      name: "전라북도",
    },
    {
      value: "jeollanam",
      name: "전라남도",
    },
    {
      value: "chungbuk",
      name: "충청북도",
    },
    {
      value: "chungnam",
      name: "충청남도",
    },
    {
      value: "jeju",
      name: "제주도",
    },
  ];

  const RadioArray = [
    {
      value: "female",
      label: "Female",
    },
    {
      value: "male",
      label: "Male",
    },
  ];

  const InputChange = (name, value) => {
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const accountDeletion = () => {
    const confirm = window.confirm("정말 회원탈퇴 하시겠습니까?");
    if (confirm) {
      alert("회원 탈퇴가 완료되었습니다.");
      // 탈퇴 로직
    } else {
      alert("회원 탈퇴가 취소되었습니다.");
    }
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
    if (!emailValidation(user.email)) {
      return;
    }
    console.log(user); // 입력한 정보 콘솔창에 뜨도록

    // 상태 변수 초기화
    setUser({
      id: "",
      pw: "",
      showPw: false,
      name: "",
      age: "",
      gender: "female",
      local: "",
      address: "",
      email: "",
      img: "",
    });
  };

  const emailValidation = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("이메일 형식이 올바르지 않습니다.");
      return false;
    }
    return true;
  };

  const fileInput = React.useRef(null);

  // 파일 업로드 버튼 클릭 시 파일 입력 요소 클릭 이벤트 발생
  const handleButtonClick = (e) => {
    fileInput.current.click();
  };

  // 파일 입력 요소의 값이 변경되면 호출되는 함수
  const handleChange = (e) => {
    // 선택한 파일 정보를 콘솔에 출력
    if (!e.target.files) return;
    const file = e.target.files[0];
    if (file) {
      let image = window.URL.createObjectURL(file);
      setUser((prev) => ({
        ...prev,
        img: image,
      }));
    }
    console.log(e.target.files[0]);
  };
  return (
    <>
      {!isMobile ? (
        <div
          style={{
            display: "flex",
            height: `calc(100% - ${heights}px)`,
            width: "100%",
            padding: "20px 0px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "100%",
            }}
          >
            <div
              id="propileBox"
              style={{
                width: "100%",
                height: "30%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Avatar
                sx={{ width: "100px", height: "100px", cursor: "pointer" }}
                src={user.img == "" ? "/broken-image.jpg" : user.img}
                onClick={handleButtonClick}
              />
              <input
                type="file"
                accept="image/*"
                ref={fileInput}
                onChange={handleChange}
                style={{ display: "none" }}
              />
              <h2>Web Master</h2>
            </div>
            <div
              id="propilInfo"
              style={{
                width: "40%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "3px solid #BCBCF7",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "50px 0px",
                }}
              >
                <InputControl
                  type={"text"}
                  label={"ID"}
                  value={user.id}
                  name={"id"}
                  Function={(name, value) => InputChange(name, value)}
                />

                <div style={{ display: "flex" }}>
                  <InputControl
                    type={user.showPw ? "text" : "password"}
                    label={"PW"}
                    value={user.pw}
                    name={"pw"}
                    Function={(name, value) => {
                      InputChange(name, value);
                    }}
                    endAdornment={
                      <IconButton onClick={viewPw} style={{ padding: "0px" }}>
                        {user.showPw ? (
                          <VisibilityIcon />
                        ) : (
                          <VisibilityOffIcon />
                        )}
                        {/* 비밀번호 보이기/감추기 아이콘 */}
                      </IconButton>
                    }
                  />
                </div>

                <InputControl
                  type={"text"}
                  label={"Name"}
                  value={user.name}
                  name={"name"}
                  Function={(name, value) => InputChange(name, value)}
                />

                <InputControl
                  type={"number"}
                  label={"Age"}
                  value={user.age}
                  name={"age"}
                  Function={(name, value) => InputChange(name, value)}
                />

                <RadioControl
                  label={"Gender"}
                  name={"gender"}
                  value={user.gender}
                  list={RadioArray}
                  Function={(name, value) => InputChange(name, value)}
                />

                <ComboControl
                  label={"Local"}
                  name={"local"}
                  local={user.local} // props의 값이 local
                  list={localArray}
                  Function={(name, value) => InputChange(name, value)}
                />

                <InputAreaControl
                  label={"Address"}
                  multiline={true}
                  rows={3}
                  name={"address"}
                  address={user.address}
                  Function={(name, value) => InputChange(name, value)}
                />

                <InputControl
                  type={"email"}
                  label={"Email"}
                  value={user.email}
                  name={"email"}
                  Function={(name, value) => InputChange(name, value)}
                />

                <div // 버튼 정렬 박스
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    padding: "10px",
                  }}
                >
                  <Button
                    style={{
                      width: "100%",
                      backgroundColor: "#BCBCF7",
                      border: "1px solid white",
                      color: "white",
                      fontWeight: 600,
                    }}
                    onClick={sendInfo}
                    variant="outlined"
                  >
                    Save
                  </Button>
                  <Button
                    style={{
                      width: "100%",
                      backgroundColor: "#BCBCF7",
                      border: "1px solid white",
                      color: "white",
                      fontWeight: 600,
                    }}
                    onClick={() => {
                      window.location.href = "/MyPage";
                    }}
                    variant="outlined"
                  >
                    Cancel
                  </Button>
                </div>
                <Button
                  style={{
                    width: "60%",
                    border: "none",
                    color: "#7d7878",
                  }}
                  onClick={accountDeletion}
                  variant="outlined"
                >
                  &gt; account deletion
                </Button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        // 모바일
        <div
          style={{
            display: "flex",
            height: `calc(100% - ${heights}px)`,
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "100%",
            }}
          >
            <div
              id="propileBox"
              style={{
                width: "100%",
                height: "30%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Avatar
                sx={{ width: "50px", height: "50px" }}
                src="/broken-image.jpg"
              />
              <h4>Web Master</h4>
            </div>
            <div
              id="propilInfo"
              style={{
                width: "40%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "3px solid #BCBCF7",
                paddingBottom: "10px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "20px 0px",
                }}
              >
                <InputControl
                  type={"text"}
                  label={"ID"}
                  value={user.id}
                  name={"id"}
                  Function={(name, value) => InputChange(name, value)}
                />

                <div style={{ display: "flex" }}>
                  <InputControl
                    type={user.showPw ? "text" : "password"}
                    label={"PW"}
                    value={user.pw}
                    name={"pw"}
                    Function={(name, value) => {
                      InputChange(name, value);
                    }}
                    endAdornment={
                      <IconButton onClick={viewPw} style={{ padding: "0px" }}>
                        {user.showPw ? (
                          <VisibilityIcon />
                        ) : (
                          <VisibilityOffIcon />
                        )}
                        {/* 비밀번호 보이기/감추기 아이콘 */}
                      </IconButton>
                    }
                  />
                </div>

                <InputControl
                  type={"text"}
                  label={"Name"}
                  value={user.name}
                  name={"name"}
                  Function={(name, value) => InputChange(name, value)}
                />

                <InputControl
                  type={"number"}
                  label={"Age"}
                  value={user.age}
                  name={"age"}
                  Function={(name, value) => InputChange(name, value)}
                />

                <RadioControl
                  label={"Gender"}
                  name={"gender"}
                  value={user.gender}
                  list={RadioArray}
                  Function={(name, value) => InputChange(name, value)}
                />

                <ComboControl
                  label={"Local"}
                  name={"local"}
                  value={user.local}
                  list={localArray}
                  Function={(name, value) => InputChange(name, value)}
                />

                <InputAreaControl
                  label={"Address"}
                  multiline={true}
                  rows={3}
                  name={"address"}
                  value={user.address}
                  Function={(name, value) => InputChange(name, value)}
                />

                <InputControl
                  type={"email"}
                  label={"Email"}
                  value={user.email}
                  name={"email"}
                  Function={(name, value) => InputChange(name, value)}
                />

                <div // 버튼 정렬 박스
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    padding: "10px",
                  }}
                >
                  <Button
                    style={{
                      width: "50%",
                      backgroundColor: "#BCBCF7",
                      border: "1px solid white",
                      color: "white",
                      fontWeight: 600,
                    }}
                    onClick={sendInfo}
                    variant="outlined"
                  >
                    Save
                  </Button>
                  <Button
                    style={{
                      width: "50%",
                      backgroundColor: "#BCBCF7",
                      border: "1px solid white",
                      color: "white",
                      fontWeight: 600,
                    }}
                    onClick={() => {
                      window.location.href = "/MyPage";
                    }}
                    variant="outlined"
                  >
                    Cancel
                  </Button>
                </div>
                <Button
                  style={{
                    width: "60%",
                    border: "none",
                    color: "#7d7878",
                    fontSize: "12px",
                  }}
                  onClick={accountDeletion}
                  variant="outlined"
                >
                  &gt; account deletion
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MyPage;

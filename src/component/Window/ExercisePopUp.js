import React from "react";
import ReactModal from "react-modal"; 
import { Button } from "@mui/material"; 

/*
isOpen	모달 창이 표시되어야 하는지 여부를 설명하는 boolean 값이다.
즉, 해당 값이 true여야 모달 창이 열리는 것이다.

onRequestClose	모달이 닫힐 때 실행될 함수를 의미한다.
즉,사용자가 모달을 닫으려고 할 때 실행되는 함수이다.

style	모달 창과 모달 창 바깥에 대한 style을 지정해준다.

ariaHideApp	appElement를 숨길지 여부를 나타내는 boolean 값입니다.
이 값이 true이면 appElement가 숨겨준다.

contentLabel	스크린리더 사용자에게 콘텐츠를 전달할 때
사용되는 방법을 나타내는 문자열이다.

shouldCloseOnOverlayClick	팝업창이 아닌 바깥 부분에서 클릭하였을 때,
닫히도록 할 것인지에 대한 처리이다.
기본값으로는 true를 가지고 있다.
*/

const customModalStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    zIndex: 10,
  },
  content: {
    width: "500px", // 모바일 크기 조정
    height: "450px",
    zIndex: 150,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "10px",
    boxShadow: "2px 2px 2px rgba(0, 0, 0, 0.25)",
    backgroundColor: "white",
    padding: "20px",
    overflow: "hidden",
  },
};

const ExercisePopUp = ({ onClose }) => {
  return (
    <ReactModal
      isOpen={true}
      onRequestClose={onClose}
      style={customModalStyles}
      ariaHideApp={false} // 접근성
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
          width: "100%",
          height: "20%",
        }}
      >
        <h4>Today's Workout Log</h4>
        <Button
          variant="contained"
          onClick={onClose}
          style={{ width: "30px", height: "30px", backgroundColor: "#eb8e8e", color: "#fff"}}
        >
          Close
        </Button>
      </div>
      <div style={{ width: "100%", height: "70%", border: "1px solid #000" }}>
        {/* 스크롤 형식 list 참고 */}
        <ul style={{ overflowX: "hidden", overflowY: "auto", whiteSpace: "nowrap" }}>
          <li>Push-ups</li>
          <li>Squats</li>
          <li>Plank</li>
          <li>Push-ups</li>
          <li>Squats</li>
          <li>Plank</li>
          <li>Push-ups</li>
          <li>Squats</li>
          <li>Plank</li>
          <li>Push-ups</li>
          <li>Squats</li>
          <li>Plank</li>
          <li>Push-ups</li>
          <li>Squats</li>
          <li>Plank</li>
        </ul>
      </div>
    </ReactModal>
  );
};

export default ExercisePopUp;

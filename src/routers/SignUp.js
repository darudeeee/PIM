import SendIcon from "@mui/icons-material/Send";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { IconButton } from "@mui/material";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Typography from "@mui/material/Typography";

import * as React from "react";
import InputControl from "../component/InputControl";
import RadioControl from "../component/RadioControl";
import "./SignUp.css";
import ComboControl from "../component/ComboConrol";
import InputAreaControl from "../component/InputAreaControl";

// 수정할 것
// css(컴포넌트 묶으면 return 안에 값에선 빼)
// 나이 0~100까지

// 추후에 추가할 기능
// 아이디 중복 확인 + 글자 수 정하기
// 비밀번호 숫자, 영문, 특수문자 포함 + 글자 수 정하기
// 이메일 도메인 선택(구글, 네이버 등 자동으로 -> [입력][@][도메인 선택])
// 비밀번호 확인 받기
// 휴대폰 통신사, 번호 입력 + 인증번호 받기
// 형식 유효성 검사 후 메세지 띄우기
// 회원가입 후 년도마다 회원정보(나이) 바꾸기(만나이?)

// input type = [text] id, name // [password] pw(showPw) // [number] age // [email] email(형식검사 제외) => o
// [radio] gender 
// [select] local 
// [textField] address => mui에서 textArea를 가져오던지, component의 input들어가서 참고하고 생각해보던지

function SignUp() {
	// const [id, setId] = React.useState(""); 등을 한번에 압축해 정리할 수 있음
	// 여기서 id : 선언, setId : 값 설정, useState : 초기값 설정
	const [user, setUser] = React.useState({
		id: "",
		pw: "",
		showPw: false,
		name: "",
		age: "",
		gender: "female",
		local: "",
		address: "",
		email: "",
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
			label: "Female"
		},
		{
			value: "male",
			label: "Male",
		}
	]

	const InputChange = (name, value) => {
		// name은 입력받을 필드의 이름(id가 변경되면 name은 id가 되고, name이 변경되면 name은 name이 된다 // value는 사용자가 새롭게 입력한 값)
		setUser((prev) => ({
			...prev,
			[name]: value, // 필드의 값을 입력받은 것으로 변경
		}));
	};

	// 비밀번호 보이기/감추기 아이콘을 토글하는 함수
	const viewPw = () => {
		setUser((prev) => ({
			// prev -> user
			...prev, // ...prev => user 안에 정보들을 다 가져오기
			showPw: !prev.showPw, // showPw : prev에서 가져온 showPw만 반대로 사용하기
		}));
	};

	// sendInfo시, 배열에 정보 저장
	const sendInfo = () => {
		if (!emailValidation(user.email)) {
			return; // 이메일 형식이 맞지 않으면 함수를 빠져나감
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
		});
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
				vw: "100vw",
				vh: "100vh",
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

			<div id="cover" style={{ backgroundColor: "#E0FFFF" }}>
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
							InputChange(name, value)
						}}
					/>
					<IconButton onClick={viewPw}>
						{user.showPw ? <VisibilityIcon /> : <VisibilityOffIcon />}
						{/* 비밀번호 보이기/감추기 아이콘 */}
					</IconButton>
				</div>

				<InputControl
					type={"text"}
					label={"이름"}
					placeholder={"이름을 입력하세요."}
					value={user.name}
					name={"name"}
					Function={(name, value) => InputChange(name, value)}
				/>

				<InputControl
					type={"number"}
					label={"나이"}
					placeholder={"나이를 입력하세요."}
					value={user.age}
					name={"age"}
					Function={(name, value) => InputChange(name, value)}
				/>

				<RadioControl label={"성별"} name={"gender"} value={user.gender}
					list={RadioArray}
					Function={(name, value) => InputChange(name, value)}
				/>

				<ComboControl
					label={"지역"}
					name={"local"}
					value={user.local}
					list={localArray}
					Function={(name, value) => InputChange(name, value)}
				/>


				<InputAreaControl
				label={"주소"}
				multiline={true}
				rows={3}
				name={"address"}
				value={user.address}
				placeholder={"주소를 입력하세요."}
				Function={(name, value) => InputChange(name, value)}
				/>

				<InputControl
					type={"email"}
					label={"이메일"}
					placeholder={"abcd@naver.com"}
					value={user.email}
					name={"email"}
					Function={(name, value) => InputChange(name, value)}
				/>

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
							backgroundColor: "#008B8B",
							border: "3px solid #008B8B",
							color: "black",
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

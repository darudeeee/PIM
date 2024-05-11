import SendIcon from "@mui/icons-material/Send";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { IconButton } from "@mui/material";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import MenuItem from "@mui/material/MenuItem";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import * as React from "react";
import Input from "../component/Input";
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
	})

	const localArray = [
		{
			value: "seoul",
			name: "서울"
		},
		{
			value: "incheon",
			name: "인천"
		},
		{
			value: "gyeonggi",
			name: "경기도"
		},
		{
			value: "gangwon",
			name: "강원도"
		},
		{
			value: "gyeongbuk",
			name: "경상북도"
		},
		{
			value: "gyeongnam",
			name: "경상남도"
		},
		{
			value: "jeollabuk",
			name: "전라북도"
		},
		{
			value: "jeollanam",
			name: "전라남도"
		},
		{
			value: "chungbuk",
			name: "충청북도"
		},
		{
			value: "chungnam",
			name: "충청남도"
		},
		{
			value: "jeju",
			name: "제주도"
		},
	]
	// const [id, setId] = React.useState(""); 를 위처럼 한번에 정리할 수 있음
	// 여기서 id : 선언, setId : 값 설정, useState : 초기값 설정

	// 비밀번호 보이기/감추기 아이콘을 토글하는 함수
	const viewPw = () => {
		setUser((prev) => ({ //prev -> user
			...prev, // user 안에 정보들을 다 가져오기
			showPw: !prev.showPw // 이것만 반대로 사용하기
		}))
	};

	const InputChange = (name, value) => {
		setUser((prev) => ({
			...prev,
			[name]: value
		}))
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
		})
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
				<Input type={"text"} label={"아이디"} placeholder={"아이디를 입력하세요."} value={user.id} name={"id"} Function={(name, value) => InputChange(name, value)} />
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
						type={user.showPw ? "text" : "password"} // showPw 값에 따라 비밀번호 표시 여부 변경
						size="small"
						value={user.pw}
						onChange={(event) => InputChange(event, "pw")}

					/>
					<IconButton onClick={viewPw}>
						{user.showPw ? <VisibilityIcon /> : <VisibilityOffIcon />}
						{/* 비밀번호 보이기/감추기 아이콘 */}
					</IconButton>
				</div>
				<Input type={"text"} label={"이름"} placeholder={"이름을 입력하세요."} value={user.name} name={"name"} Function={(name, value) => InputChange(name, value)} />
				<Input type={"number"} label={"나이"} placeholder={"나이를 입력하세요."} value={user.age} name={"age"} Function={(name, value) => InputChange(name, value)} />
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
							value={user.gender}
							onChange={(event) => InputChange(event, "gender")}
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
						value={user.local}
						onChange={(event) => InputChange(event, "local")}
						style={{ width: "226px", height: "40px" }}
					>
						{
							localArray.map((item) => <MenuItem value={item.value}>{item.name}</MenuItem>)
							// map : for문, item : 내부 배열 요소
						}
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
						value={user.address}
						onChange={(event) => InputChange(event, "address")}
					/>
				</div>
				<Input type={"email"} label={"이메일"} placeholder={"abcd@naver.com"} value={user.email} name={"email"} Function={(name, value) => InputChange(name, value)} />
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

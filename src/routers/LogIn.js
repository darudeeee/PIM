import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { IconButton } from "@mui/material";
import Button from "@mui/material/Button";
import * as React from "react";
import InputControl from "../component/Control/InputControl";

const LogIn = () => {
	const [user, setUser] = React.useState({
		id: "",
		pw: "",
	});

	// 임시 아이디 부여
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

		if (user.id === tempoId && user.pw === tempoPw) {
			alert("로그인 성공!");
			window.location.href = "/Home";
		} else {
			alert("로그인 실패!");
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
				width: "100vw",
				height: "100vh",
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
				backgroundColor: "#d3faffc7"
			}}
		>
			<div id="cover">
				<div
					id="left"
					style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						width: "50%",
						height: "100%",
						flexDirection: "column",
					}}
				>
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							justifyContent: "space-around",
							height: "40%"
						}}
					>
						<div>
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
									endAdornment={<IconButton onClick={viewPw} style={{ padding: "0px" }}>
										{user.showPw ? <VisibilityIcon /> : <VisibilityOffIcon />}
										{/* 비밀번호 보이기/감추기 아이콘 */}
									</IconButton>}
								/>
							</div>
						</div>
						<div // 버튼 정렬 박스
							style={{
								display: "flex",
								flexDirection: "row",
								alignItems: "center",
								marginBottom: "10px",
							}}
						>
							<Button
								style={{
									backgroundColor: "#2289C3",
									border: "1px solid white",
									color: "white",
									fontWeight: 600,
									width: "100%"
								}}
								onClick={sendInfo}
								variant="outlined"

							>
								로그인
							</Button>
							<Button
								style={{
									backgroundColor: "#2289C3",
									border: "1px solid white",
									color: "white",
									fontWeight: 600,
									width: "100%"
								}}
								onClick={() => {
									window.location.href = "/SignUp";
								}}
								variant="outlined"

							>
								회원가입
							</Button>
						</div>
					</div>
				</div>
				<div
					id="right"
					style={{
						width: "50%",
						height: "100%",
						backgroundColor: "lightyellow",
						backgroundImage: `url(${process.env.PUBLIC_URL}/blue.jpg)`, // 이미지 경로 지정
						backgroundSize: "cover", // 이미지 크기 조정
						backgroundRepeat: "no-repeat", // 이미지 반복 없음
						borderRadius: "0px 50px 50px 0px"
					}}
				></div>
			</div>
		</div>
	);
};

export default LogIn;

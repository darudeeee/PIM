import { useEffect, useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Typography from "@mui/material/Typography";

const ComboControl = (props) => {

	console.log(props);
	let deviceWidth = window.innerWidth;
	const [isMobile, setIsMobile] = useState(deviceWidth <= 1200);

	window.addEventListener("resize", function () {
		setIsMobile(window.innerWidth <= 1200);
	  });

	const ComboChange = (event, name) => {
		props.Function(name, event.target.value)
	};
	return (
		<div style={{ display: "flex", marginBottom: "5px" }}>
			<Typography
				variant="subtitle"
				gutterBottom
				style={{
					fontFamily: "Grandiflora One",
					width: "110px",
					display: "flex",
					alignItems: "center",
					justifyContent: "flex-end",
					marginRight: "5px",
					fontWeight: 600, // 모바일일 때 더 얇은 폰트
				}}
			>
				{props.label} :
			</Typography>
			<Select
				value={props.local}
				onChange={(event) => ComboChange(event, "local")}
				// style={{ width: "226px", height: "40px" }}
				sx={{
					color: "#000",
					'.MuiOutlinedInput-notchedOutline': {
						borderColor: '#D3C4E1',
					},
					'&.Mui-focused .MuiOutlinedInput-notchedOutline': {
						borderColor: '#A75BB5 ', // 클릭
					},
					'&:hover .MuiOutlinedInput-notchedOutline': {
						borderColor: '#A75BB5 ', // 호버
					},
					'.MuiSvgIcon-root ': {
						fill: "#A75BB5 !important",
					}
				}}
				style={{width: isMobile ? "50%" : "100%"}}
			>
				{props.list !== undefined ? (
					props.list.map((item) =>
						<MenuItem
							value={item.value}>
							{item.name}</MenuItem>
					)
				) : ("")
				}

			</Select>
		</div>
	)
}

export default ComboControl;

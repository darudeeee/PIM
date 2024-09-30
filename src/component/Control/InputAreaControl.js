import { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

const InputAreaControl = (props) => {
	let deviceWidth = window.innerWidth;
	const [isMobile, setIsMobile] = useState(deviceWidth <= 1200);

	window.addEventListener("resize", function () {
		setIsMobile(window.innerWidth <= 1200);
	  });

	const InputAreaChange = (event, name) => {
		props.Function(name, event.target.value)
	};
	return (

		<div style={{ display: "flex" }}>
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
					fontWeight: 600,
				}}
			>
				{props.label} :
			</Typography>
			<TextField
				multiline={props.multiline}
				rows={props.rows}
				placeholder={props.placeholder}
				sx={{
					"& .MuiOutlinedInput-root": {
						"&.MuiInputBase-root fieldset": {
							border: "2px solid #D3C4E1",
							padding: "4px"
						},
					},
				}}
				style={{ width: isMobile ? "50%" : "100%" }}
				value={props.address}
				onChange={(event) => InputAreaChange(event, props.name)}
			/>
		</div>
	)
}

export default InputAreaControl;

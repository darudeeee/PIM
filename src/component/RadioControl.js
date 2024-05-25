import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Typography from "@mui/material/Typography";

const RadioControl = (props) => {
	const RadioChange = (event, name) => {
		props.Function(name, event.target.value)
	};
	return (
		<div style={{ display: "flex", marginBottom: "5px" }}>
			<Typography // 성별 정리 쉽지 않음
				variant="h5"
				gutterBottom
				style={{
					fontFamily: "KyoboHandwriting2023wsa",
					width: "90px",
					textAlign: "right",
					marginRight: "5px",
				}}
			>
				{props.label} :
			</Typography>
			<FormControl>
				<RadioGroup
					row
					aria-labelledby="demo-row-radio-buttons-group-label"
					name="row-radio-buttons-group"
					value={props.value}
					onChange={(event) => RadioChange(event, props.name)}
				>
					{props.list !== undefined ? (
						props.list.map((item) =>
							<FormControlLabel
								value={item.value}
								control={<Radio  sx={{
									'& .MuiSvgIcon-root:not(.MuiSvgIcon-root ~ .MuiSvgIcon-root)':
										{
											color: 'red',
										},
									'& .MuiSvgIcon-root + .MuiSvgIcon-root': {
										color: 'blue',
									},
								}}/>}
								label={item.label}
							/>
						)
					) : ("")}

					
				</RadioGroup>
				
			</FormControl>
		</div>
	)
}

export default RadioControl;

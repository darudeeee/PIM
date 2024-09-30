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
			<FormControl style={{ width: "100%" }}>
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
								control={<Radio sx={{
									'& .MuiSvgIcon-root:not(.MuiSvgIcon-root ~ .MuiSvgIcon-root)':
									{
										color: '#D3C4E1',
									},
									'& .MuiSvgIcon-root + .MuiSvgIcon-root': {
										color: '#BCBCF7',
									},
								}} />}
								label={<Typography
									variant="subtitle"
									gutterBottom
									style={{
										fontFamily: "Grandiflora One",
										fontSize: "0.8rem",
										fontWeight: 600,
									}}
								>
									{item.label}
								</Typography>}
							/>
						)
					) : ("")}
				</RadioGroup>
			</FormControl>
		</div>
	)
}

export default RadioControl;

import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

const InputAreaControl = (props) => {
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
				width: "95px",
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
					border: "2px solid #9bdcfa",
					padding: "4px"
				  },
				},
			  }}
			value={props.address}
			onChange={(event) => InputAreaChange(event, props.name)}
		/>
	</div>
	)
}

export default InputAreaControl;

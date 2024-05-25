import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

const InputAreaControl = (props) => {
	const InputAreaChange = (event, name) => {
		props.Function(name, event.target.value)
	};
	return (
		
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
			{props.label} :
		</Typography>
		<TextField
			multiline={props.multiline}
			rows={props.rows}
			placeholder={props.placeholder}
			style={{ width: "226px" }}
			value={props.address}
			onChange={(event) => InputAreaChange(event, props.name)}
		/>
	</div>
	)
}

export default InputAreaControl;

import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

const Input = (props) => {
	const InputChange = (event, name) => {
		props.Function(name, event.target.value)
	};

	return (
		<div
			style={{ display: "flex", marginTop: "10px", marginBottom: "5px" }}
		>
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
				placeholder={props.placeholder}
				type={props.type}
				size="small"
				value={props.value}
				onChange={(event) => InputChange(event, props.name)}
			/>
		</div>
	)
}

export default Input;

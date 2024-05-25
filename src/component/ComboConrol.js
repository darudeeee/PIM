import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

const ComboControl = (props) => {
	const ComboChange = (event, name) => {
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
				{props.label}
			</Typography>
			<Select
				value={props.local}
				onChange={(event) => ComboChange(event, "local")}
				style={{ width: "226px", height: "40px" }}
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

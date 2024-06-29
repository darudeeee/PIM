import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Typography from "@mui/material/Typography";

const ComboControl = (props) => {
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
					fontWeight: 600,
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
						borderColor: '#9bdcfa',
					},
					'&.Mui-focused .MuiOutlinedInput-notchedOutline': {
						borderColor: '#2289C3', // 클릭
					},
					'&:hover .MuiOutlinedInput-notchedOutline': {
						borderColor: '#2289C3', // 호버
					},
					'.MuiSvgIcon-root ': {
						fill: "#9bdcfa !important",
					}
				}}
				style={{width: "100%"}}
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

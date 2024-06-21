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
				variant="h6"
				gutterBottom
				style={{
					fontFamily: "Grandiflora One",
					width: "90px",
					textAlign: "right",
					marginRight: "5px",
				}}
			>
				{props.label} :
			</Typography>
			<Select
				value={props.local}
				onChange={(event) => ComboChange(event, "local")}
				style={{ width: "226px", height: "40px" }}
				sx={{
					color: "#000",
					'.MuiOutlinedInput-notchedOutline': {
					  borderColor: '#9bdcfa',
					},
					'&.Mui-focused .MuiOutlinedInput-notchedOutline': {
					  borderColor: '#89CFFD', // 클릭
					},
					'&:hover .MuiOutlinedInput-notchedOutline': {
					  borderColor: '#89CFFD', // 호버
					},
					'.MuiSvgIcon-root ': {
					  fill: "#9bdcfa !important",
					}
				  }}
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

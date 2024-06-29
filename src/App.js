import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LogIn from "./routers/LogIn.js";
import SignUp from "./routers/SignUp.js";
import Home from "./routers/Home.js";

function App() { // 쿼리에 따라 보여주는걸 다르게
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<LogIn />} />
				<Route path="/SignUp" element={<SignUp />} />
				<Route path="/Home" element={<Home />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;

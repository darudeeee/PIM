import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./routers/Home.js";
import SignUp from "./routers/SignUp.js";
import LogIn from "./routers/LogIn.js";

function App() { // 쿼리에 따라 보여주는걸 다르게
	return (
		<BrowserRouter>
			<Routes>				
				<Route path="/" element={<Home />} />
				<Route path="/SignUp" element={<SignUp />} />
				<Route path="/LogIn" element={<LogIn />} />			
			</Routes>
		</BrowserRouter>
	);
}

export default App;

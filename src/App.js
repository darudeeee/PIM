import SignUp from "./routers/SignUp";
import Login from "./routers/Login";
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/SignUp" element={<SignUp />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;

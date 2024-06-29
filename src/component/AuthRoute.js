import { Route, Routes } from "react-router-dom";
import Home from "../routers/Home";
import Todo from "../routers/Todo";

const AuthRoute = () => {
  return (
	// 1. AppBar Children = AuthRoute
	// 2. AuthRoute Childre = 이중 Route 링크
	// 결론 : AppBar의 Children = 아래의 이중 Route들
    <Routes> 
      <Route path="/Home" element={<Home />} />
	  <Route path="/Todo" element={<Todo />} />
    </Routes>
  );
};

export default AuthRoute;

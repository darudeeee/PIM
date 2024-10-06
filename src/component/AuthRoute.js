import { Route, Routes } from "react-router-dom";
import Home from "../routers/Home";
import Budget from "../routers/Budget";
import MyPage from "../routers/MyPage";
import Note from "../routers/Note";
import Search from "../routers/Search";
import Schedule from "../routers/Schedule";
import Menstruation from "../routers/Menstruation";
import Exercise from "../routers/Exercise";

const AuthRoute = () => {
  return (
    // 1. AppBar Children = AuthRoute
    // 2. AuthRoute Childre = 이중 Route 링크
    // 결론 : AppBar의 Children = 아래의 이중 Route들
    <Routes>
      <Route path="/Home" element={<Home />} />
      <Route path="/MyPage" element={<MyPage />} />
      <Route path="/Note" element={<Note />} />
      <Route path="/Search" element={<Search />} />
      <Route path="/Schedule" element={<Schedule />} />
      <Route path="/Budget" element={<Budget />} />
      <Route path="/Menstruation" element={<Menstruation />} />
      <Route path="/Exercise" element={<Exercise />} />
    </Routes>
  );
};

export default AuthRoute;

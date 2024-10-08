import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppBarContainer from "./component/Container/AppBarContainer.js";
import AuthRoute from "./component/AuthRoute.js";
import LogIn from "./routers/LogIn.js";
import SignUp from "./routers/SignUp.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route
          path="/*"
          element={
            <AppBarContainer>
              <AuthRoute />
            </AppBarContainer>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

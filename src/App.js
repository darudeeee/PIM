import SignUp from "./routers/SignUp";

function App() {
  return (
    // impot 후 여기에 써주기
    <SignUp /> // = <SignUp></SignUp> => 얘는 signup 사이에 다른거 들어올 수 있음(ex.icon)
  );
}

export default App;

import Button from "@mui/material/Button";

function Home() {
  return (
    <div>
      <Button
        onClick={() => {
          window.location.href = "/SignUp";
        }}
      >
        회원가입
      </Button>

      <Button
        onClick={() => {
          window.location.href = "/LogIn";
        }}
      >
        로그인
      </Button>
    </div>
  );
}

export default Home;

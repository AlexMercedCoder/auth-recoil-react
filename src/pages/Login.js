import AuthForm from "../components/AuthForm";
import { useAuthState } from "../atoms";
import { useNavigate } from "react-router-dom";

function Login({ url }) {
  const navigate = useNavigate();
  const [authState, setAuthState] = useAuthState();

  const loginSubmit = async (form) => {
    const response = await fetch(url + "auth/login", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await response.json();

    if (response.status === 400) {
      console.error(data.error);
      return 0;
    }

    setAuthState({ loggedIn: true, ...data });
    localStorage.setItem("auth", JSON.stringify(data));
    navigate("/dashboard");
  };

  return (
    <div className="Login">
      <AuthForm submit={loginSubmit} label="Login" />{" "}
    </div>
  );
}

export default Login;

import { Link } from "react-router-dom";
import { useAuthState } from "../atoms";
import { Navigate, useNavigate } from "react-router";

function Header({url}) {

    const [authState, setAuthState] = useAuthState()
    const navigate = useNavigate()

    const logout = async () => {
        const response = await fetch(url + "auth/logout")

        if (response.status === 200){
            localStorage.removeItem("auth")
            setAuthState({loggedIn: false, username:"", role: ""})
            navigate("/")
        }
    }

  return <div className="Header">
      <Link to="/"><div className="Header_link">Home</div></Link>
      <Link to="/signup"><div className="Header_link">Signup</div></Link>
      <Link to="/login"><div className="Header_link">Login</div></Link>
      <div className="Header_link" onClick={logout}>Logout</div>
      </div>;
}

export default Header;

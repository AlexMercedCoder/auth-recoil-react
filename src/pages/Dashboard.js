import { useNavigate } from "react-router-dom";
import { useAuthState } from "../atoms";

function Dashboard(props) {
  const navigate = useNavigate();
  const [authState, setAuthState] = useAuthState();

  if (authState.loggedIn) {
    return <div className="Dashboard">Dashboard</div>;
  } else {
    return <h1>Must Be Logged In to See This Page</h1>;
  }
}

export default Dashboard;

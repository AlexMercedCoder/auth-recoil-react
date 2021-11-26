import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { useEffect } from "react";
import { useAuthState } from "./atoms";


function App() {

  const [authState, setAuthState] = useAuthState()

  const url = "http://localhost:4000/"

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("auth"))
    if (data){
      setAuthState({loggedIn: true, ...data})
    }
  }, [])


  return (
    <div className="App">
      <Header url={url}/>
      <Main url={url}/>
      <Footer/>
    </div>
  );
}

export default App;
